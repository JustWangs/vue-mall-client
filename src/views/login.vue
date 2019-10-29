<template>
    <div class="page">
        <van-nav-bar :title="titleName" left-arrow @click-left="onBack" />
        <van-cell-group class="vanGroup">
            <van-field
                v-model="loginData.userName"
                required
                clearable
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                @click-right-icon="$toast('长度不超过10位')"
            />

             <van-field
                v-model="loginData.phone"
                required
                clearable
                v-if="status === 'regist'"
                label="手机号"
                right-icon="question-o"
                placeholder="请输入手机号"
                @click-right-icon="$toast('长度不超过10位')"
            />

            <van-field
                v-model="loginData.password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                right-icon="question-o"
                @click-right-icon="$toast('长度不超过10位')"
                required
            />

            <van-field
                v-if="status === 'regist'"
                v-model="loginData.passwordAgain"
                type="password"
                label="确认密码"
                placeholder="请输入密码"
                right-icon="question-o"
                @click-right-icon="$toast('长度不超过10位')"
                required
            />

            <van-field
                v-if="status === 'login'"
                class="verfiyCode"
                v-model="loginData.code"
                center
                required
                label="验证码"
                placeholder="请输入验证码"
            >
            </van-field>
            <img :src="codeUrl" v-if="status === 'login'" class="loginCodeImg" @click="getCodeImg"/>
            </van-cell-group>

        <div class="login">
            <van-button v-if="status==='login'" class="login_btn" size="small" type="info" @click="onLogin">登录</van-button>
            <van-button class="login_btn registBtn" size="small" type="warning" @click="onRegist">注册</van-button>
        </div>
    </div>
</template>

<script>
    import { getCode, login, regist } from './../api/login'
    export default {
        name:'login',
        data() {
            return {
                status:'login',
                loginData: {
                    userName: '',
                    password: '',
                    code:'',
                    phone:'',
                    passwordAgain:''
                },
                titleName:'登录',
                codeUrl:'',
            }
        },
        created() {
            this.$db.clear()
            this.getCodeImg()
        },
        methods: {
            onBack() {
                if(this.titleName == '注册') {
                    this.status = 'login'
                    this.titleName = '登录'
                    return
                }
                this.$router.go(-1)
            },
            onLogin() {
                var {userName,password,code} = this.loginData
                if(!userName || !password || !code) {
                    this.$toast('请输入必填项')
                    return
                }
                login(this.loginData).then(res=> {
                    for(let i in res.data) {
                        if(i!='code' && i!='msg') {
                            this.$db.save(i,res.data[i])
                        }
                    }
                    this.$toast('登录成功')
                    this.$router.go(-1)
                })
            },
            getCodeImg() {
                getCode().then(res=> {
                    var src = 'data:image/jpg;base64,' + btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))
                    this.codeUrl = src
                })
            },
            onRegist() {
                if(this.status === 'login') {
                    this.titleName = '注册'
                    this.loginData = {
                        userName: '',
                        passWord: '',
                        code:'',
                    }
                    this.status = 'regist'
                    return
                }

                // 执行注册
                var {userName,phone,password,passwordAgain} = this.loginData
                if(!userName || !password || !phone || !passwordAgain) {
                    this.$toast('请填写完整')
                    return
                }
                if(password != passwordAgain) {
                    this.$toast('两次输入密码不一致,请重新输入')
                    return
                }
                regist(this.loginData).then(()=>{
                    this.$toast('注册成功')
                    setTimeout(()=> {
                        this.status = 'login'
                        this.titleName = '登录'
                    },500)
                })
            },
        },
    }
</script>

<style lang="scss">
    .verfiyCode{
        width: 70%;
        height: 50px;
        display: inline-block;
        .van-cell__title{
            display: inline-block;
        }
        .van-cell__value{
            width: 100px;
            display: inline-block;
        }
    }
</style>

<style scoped lang="scss">
    .page {
        width: 100%;
        height:1000px;
        overflow: hidden;
        background: #F4F6F9;
        .vanGroup{
            margin-top: 50px;
        }
    }
    .loginCodeImg {
        width: 30%;
        height: 50px;
        float: right;
        display: inline-block;
    }
    .login {
        text-align: center;
        margin:40px auto;
        button {
            width: 60%;
            height: 35px;
            line-height: 35px;
            font-size: 16px;
            border-radius: 10px;
        }
    }
    .registBtn{
        margin-top: 20px;
    }
</style>
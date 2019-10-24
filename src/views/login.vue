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
                v-model="loginData.passWord"
                type="password"
                label="密码"
                placeholder="请输入密码"
                right-icon="question-o"
                @click-right-icon="$toast('长度不超过10位')"
                required
            />

            <van-field
                v-if="status === 'regist'"
                v-model="loginData.passWordAgain"
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
    export default {
        data() {
            return {
                status:'login',
                loginData: {
                    userName: '',
                    passWord: '',
                    code:'',
                },
                titleName:'登录',
                codeUrl:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',
                registData: {
                    userName: '',
                    passWord: '',
                }
            }
        },
        created() {
            this.getCodeImg()
        },
        methods: {
            onBack() {
                this.$router.go(-1)
            },
            onLogin() {

            },
            getCodeImg() {

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
                var {userName,passWord,passWordAgain} = this.loginData
                if(!userName || !passWord) {
                    this.$toast('请填写完整')
                    return
                }
                if(passWord != passWordAgain) {
                    this.$toast('两次输入密码不一致,请重新输入')
                    return
                }
                console.log(userName,passWord)
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
<template>
    <div class="page">
        <div style="background:#000;position:relative">
            <van-image v-if="JSON.stringify(this.$db.get('avatar'))!='{}'" :src="this.$db.get('avatar')" fit="cover" class="backgroundImage">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
            <img v-else src="./../../../assets/image/mine@2x.png" class="backgroundImage">
            <span class="user_name" @click="toLogin()">{{userInfo.name | toUpper}}</span>
        </div>
        
        <div class="user_info">
            <van-image :src="userInfo.img" fit="cover" round class="user_img" @click="toLogin('image')" />
        </div>
        <van-action-sheet
            v-model="showSheet"
            :actions="sheetActions"
            @select="selectSheetItem"
            cancel-text="取消"
            @cancel="onCancelSheet"
        >
        <label class="uploadClass" for="file">
            <span class="uploadSpan" @click="uploadImage">更换头像</span>
            <input ref="filElem" accept="image/*" type="file" @change="afterRead" style="display:none">
        </label>
        <label class="uploadClass">
            <span class="uploadSpan" @click="logout">退出登录</span>
        </label>
        </van-action-sheet>
        <van-popup v-model="showBigPic" class="my_van_popup">
            <img :src="userInfo.img" class="bigAva">
        </van-popup>
        <div class="info_cell">
            <van-cell icon="bar-chart-o" title="我的订单" is-link/>
            <van-cell icon="user-o" title="我的信息" is-link/>
            <van-cell icon="location-o" title="我的地址" @click="myAddress" is-link/>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
import { uploadToken, upload, updateUserAvatar } from './../../api/user'
export default {    
    name:'mine',
    data() {
        return {
            userInfo:{
                img:JSON.stringify( this.$db.get('avatar')) != "{}"?this.$db.get('avatar'):"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571979029531&di=ccf9aba6fcdbeab18579926e1ce6d3f5&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F53%2F99%2F185746f8a036d96.jpg",
                name:JSON.stringify( this.$db.get('userName')) != "{}"?this.$db.get('userName'):"未登录"
            },
            sheetActions: [
                { name: '查看大图' }
            ],
            showBigPic:false,
            showSheet:false
        }
    },
    filters: {
        // 小写转大写
        toUpper: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.toUpperCase();
        }
    },
    created() {

    },
    methods: {
        myAddress() {
            this.$router.push({name:'address'})
        },
        toLogin(val) {
            if(this.userInfo.name==='未登录') {
                this.$router.push({name:'login'})
            }
            else if(val=='image') {
                this.showSheet = true
            }
        },
        selectSheetItem(e) {
            if(e.name==='查看大图') {
                this.showBigAvatar()
            }
        },
        showBigAvatar() { // 查看大图
            this.showSheet = false
            this.showBigPic = true
        },
        uploadImage() { // 事件委托
            this.$refs.filElem.dispatchEvent(new MouseEvent('click')) 
        },
        afterRead(e) { // 上传图片
            uploadToken().then((res)=> {
                let fileName = Date.parse(new Date()) + e.target.files[0].name
                let data = {token:res.data.uptoken,file:e.target.files[0],key:fileName}
                upload(data).then((upResponse) => {
                    // 更新过的图片地址
                    let imageUrl = 'http://pzpn0fefv.bkt.clouddn.com/'+upResponse.data.key
                    updateUserAvatar({userId:this.$db.get('userId'),avatar:imageUrl}).then((res)=> {
                        this.userInfo.img = imageUrl
                        this.$db.save('avatar',imageUrl)
                        this.showSheet = false 
                        this.$toast(res.data.msg)
                    })
                })
            })
        },
        logout() { // 退出登录
            Dialog.confirm({
                title: '',
                message: '确认退出吗？'
            }).then(() => {
                this.onCancelSheet()
                this.$router.push({name:'login'})
            }).catch(() => {
                // this.onCancelSheet()
            });
        },
        onCancelSheet() {
            this.showSheet = false
        },
    },
    
}
</script>

<style lang="scss">
    .uploadClass{
        width: 100%;
        text-align: center;
        border-top: 1px solid #eee;
        display: block;
        height: 50px;
        line-height: 50px;
        .uploadSpan{
            font-size: 16px;
        }
    }
    .my_van_popup{
        width: 100%;
    }
</style>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9;
        .backgroundImage {
            width: 100%;
            height: 150px;
            vertical-align: top;
            -webkit-mask:-webkit-linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0.5));
            opacity: 0.5;
        }
        .user_name {
            font-size: 40px;
            font-weight: bold;
            position: absolute;
            z-index: 999;
            text-align: center;
            top: 50px;
            left: 0px;
            right: 0px;
            letter-spacing: 5px;
            color: white;
            padding:0px 10px;
        }
        .bigAva{
            width: 100%;
        }
        .user_info{
            padding: 0px 15px;
            vertical-align: top;
            position: relative;
            height: 60px;
            background: #fff;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            .user_img{
                width: 80px;
                height: 80px;
                position: absolute;
                top: -45px;
            }
        }
        .info_cell{
            margin-top: 40px;
        }
    }
</style>
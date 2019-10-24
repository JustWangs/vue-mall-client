<template>
    <div class="page">
        <img src="./../../../assets/image/mine@2x.png" class="backgroundImage">
        <div class="user_info">
            <img :src="userInfo.img" class="user_img">
            <span class="user_name">{{userInfo.userName}}</span>
        </div>
        <div class="info_cell">
            <van-cell icon="bar-chart-o" title="我的订单" is-link/>
            <van-cell icon="user-o" title="我的信息" is-link/>
            <van-cell icon="location-o" title="我的地址" is-link/>
        </div>
    </div>
</template>

<script>
export default {    
    name:'mine',
    data() {
        return {
            userInfo:{
                img:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',
                name:'wangshi'
            }
        }
    },
    created() {
        
    },
}
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9;
        .backgroundImage {
            width: 100%;
            height: 150px;
            vertical-align: top;
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
                border-radius: 50%;
                position: absolute;
                top: -45px;
            }
            .user_name {
                font-size: 16px;
                font-weight: bold;
                position: absolute;
                left: 100px;
                top:-30px;
            }
        }
        .info_cell{
            margin-top: 40px;
        }
    }
</style>
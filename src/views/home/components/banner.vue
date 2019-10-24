<template>
    <div>
        <van-notice-bar text="通知内容" left-icon="volume-o" background="#F8D456"/>
        <van-swipe :autoplay="3000" class="bannerBox">
            <van-swipe-item v-for="(image, index) in bannerPic" :key="index">
                <img :src="image.url" class="bannerImg" @click="getGoodsDetail(image.goodsId)"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        props:['bannerPic'],
        methods: {
            getGoodsDetail(id) {
                console.log(id)
                // junp to detail by id
            },
        }
    }
</script>

<style lang="scss" scoped>
    .bannerBox{
        margin: 0px;
        height: 145px;
        overflow: hidden;
    }
    .bannerBox .bannerImg{
        width: 100%;
        height:145px;
    }
</style>
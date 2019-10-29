<template>
    <div class="page">
        <van-nav-bar :title="titleName" left-arrow @click-left="onBack" fixed/>
        <van-swipe :autoplay="3000" indicator-color="white" class="my_swiper">
            <van-swipe-item v-for="(item,index) in swiperImgList" :key="index">
                <van-image width="100%" height="250" :src="item.url">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-swipe-item>
        </van-swipe>

        <div class="goods_info">
            <p class="name">{{goodsInfo.name}}</p>
            <span class="shortInfo" v-if="goodsInfo.shortInfo">规格：{{goodsInfo.shortInfo}}</span>
            <div class="sale">
                <span class="price num">¥{{goodsInfo.price}}</span>
                <span class="saleNum num">销量：{{goodsInfo.saleNum}}</span>
            </div>
        </div>

        <van-tabs @click="onClickTabs" class="goods_tabs" animated>
            <van-tab title="商品详情">
                <van-image v-for="(item,index) in goodsInfo.detail" :src="item" :key="index">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-tab>
            <van-tab :title="'粉丝说 ('+goodsInfo.commentNumber+')'">

            </van-tab>
        </van-tabs>

        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" info="5" @click="onClickShopCar" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToShopCar" />
            <van-goods-action-button type="danger" text="立即购买" @click="toBuy" />
        </van-goods-action>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            titleName:'商品详情',
            swiperImgList:[{
                url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg'
            },{
                url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg'
            }],
            goodsInfo:{
                name:'XXX',
                shortInfo:'aaa',
                price:'123',
                saleNum:'1',
                detail: [
                    '//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',
                    '//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg'
                ],
                commentNumber:'5'
            }
        }
    },
    created() {

    },
    methods:{
        onClickShopCar() { // 购物车
        },
        addToShopCar() { // 加入购物车
        },
        toBuy() { // 立即购买
        },
        onClickTabs(name,title) { // tabs切换
            this.$toast(title)
        },
        onBack() {
            this.$router.go(-1)
        },

    }
}
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9;
        height: 100vh;
        overflow-y: scroll;
        .my_swiper{
            width: 100%;
            height: 250px;
        }
        .goods_info{
            padding: 20px;
            margin: 0 auto;
            background: #fff;
            .name{
                font-size: 20px;
                margin: 0;
                font-weight: bold;
                margin-block-start: 0em;
                margin-block-end: 0em;
                word-wrap: break-word;
            }
            .shortInfo{
                font-size: 14px;
                color: #6C7B8A;
                padding-top: 5px;
                border-top: 1px solid #6C7B8A;
                margin: 0px;
            }
            .sale{
                display: flex;
                justify-content:space-between;
                margin-top: 20px;
                .price{
                    color: #ee0a24;
                    font-size: 24px;
                }
                .saleNum{
                    width: 70px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    background: #F4F6F9;
                    border-radius: 10px;
                    font-size: 14px;
                    color:rgba(108,123,138,1);
                }
            }
        }
        .goods_tabs{
            margin-top: 25px;
        }
    }
</style>
<template>
    <div class="page">
        <van-nav-bar :title="titleName" left-arrow @click-left="onBack" fixed/>
        <van-swipe :autoplay="3000" indicator-color="white" class="my_swiper">
            <van-swipe-item v-for="(item,index) in goodsInfo.banner" :key="index">
                <van-image width="100%" height="250" :src="item">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-swipe-item>
        </van-swipe>

        <div class="goods_info">
            <p class="name">{{goodsInfo.goodsName}}</p>
            <span class="shortInfo" v-if="goodsInfo.info">规格：{{goodsInfo.info}}</span>
            <div class="sale">
                <span class="price num">¥{{goodsInfo.price}}</span>
                <div>
                    <span class="saleNum num">销量：{{goodsInfo.saleNum}}</span>
                    <span class="saleNum num">库存：{{goodsInfo.stock}}</span>
                </div>
            </div>
        </div>

        <van-tabs @click="onClickTabs" class="goods_tabs" animated>
            <van-tab title="商品详情">
                <van-image v-for="(item,index) in goodsInfo.richCover" :src="item" :key="index">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-tab>
            <van-tab :title="'粉丝说 ('+goodsInfo.noteNumber+')'">

            </van-tab>
        </van-tabs>

        <van-goods-action>
            <van-goods-action-icon icon="cart-o" text="购物车" :info="infoNum" @click="onClickShopCar" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToShopCar" />
            <van-goods-action-button type="danger" text="立即购买" @click="toBuy" />
        </van-goods-action>
    </div>
</template>

<script>
import { goodsDetail, addToCar } from './../api/goods'
export default { 
    data() {
        return {
            titleName:'商品详情',
            goodsInfo:{},
            infoNum:this.$db.get('collectionGoods').length
        }
    },
    created() {
        this.getGoodsDetail()
    },
    methods:{
        getGoodsDetail() {
            goodsDetail({goodsId:this.$route.query.goodsId}).then(res=> {
                this.goodsInfo = res.data.info
            })
        },
        onClickShopCar() { // 购物车
        },
        addToShopCar() { // 加入购物车
            addToCar({userId:this.$db.get('userId'),goodsId:this.goodsInfo.goodsId}).then(res=> {
                this.$db.save('collectionGoods',res.data.list.collectionGoods)
                this.infoNum = res.data.list.collectionGoods.length
            })
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
                    padding: 0px 8px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    background: #F4F6F9;
                    border-radius: 10px;
                    font-size: 14px;
                    color:rgba(108,123,138,1);
                    margin-right: 5px;
                }
            }
        }
        .goods_tabs{
            margin-top: 25px;
            margin-bottom: 70px;
        }
    }
</style>
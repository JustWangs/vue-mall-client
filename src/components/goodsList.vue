<template>
    <div class="goods">
        <van-divider class="goodsDivider">{{titleName}}</van-divider>
        <div class="goodsBox">
            <div class="goodsContent" v-for="(item,index) in goods" :key="index" @click="getGoodsDetail(item.goodsId)">
                <img :src="item.url" class="goodsImg">
                <div class="goodsInfo">
                    <div class="name">{{item.name}}</div>
                    <div class="info">{{item.info}}</div>
                    <div class="price">¥{{item.price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['goods','titleName'],
        methods:{
            getGoodsDetail(id) {
                alert(id)
                // todo...
            },
        }
    }
</script>

<style lang="scss" scoped>
.goods{
    background: #fff;
    padding: 0px 10px;
    margin-bottom: 100px;
    .goodsDivider{
        margin-top: 20px;
        padding-top: 15px;
        margin-bottom: 0px;
    }
    .goodsBox{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-content: flex-start;
        .goodsContent{
            margin-top:15px;
            width: 48%;
            height: 200px;
            border-radius: 10px;
            background:#F4F6F9;
            .goodsImg{
                width: 100%;
                height: 130px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                vertical-align:top
            }
            .goodsInfo{
                height: 55px;
                overflow: hidden;
                padding:5px 10px 10px 10px; 
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                vertical-align:top;
                .name {
                    font-size: 16px;
                    line-height: 16px;
                    height: 20px;
                    font-weight: bold;
                    color: #0E1924;
                    white-space: nowrap;/*不换行*/
                    text-overflow:ellipsis;/*超出部分省略号显示*/
                }
                .info { 
                    font-size: 14px;
                    line-height: 14px;
                    font-weight: 400;
                    color: #6C7B8A;
                    height: 20px;
                    white-space: nowrap;/*不换行*/
                    text-overflow:ellipsis;/*超出部分省略号显示*/
                }
                .price {
                    height: 15px;
                    line-height: 15px;
                    font-size:15px;
                    font-weight: bold;
                    color: #54C9E8;
                }
            }
        }
    }
}
</style>
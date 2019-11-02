<template>
    <div class="goods">
        <van-divider class="goodsDivider">{{titleName}}</van-divider>
        <div class="goodsBox" v-show="goods.length>0">
            <div class="goodsContent" v-for="(item,index) in goods" :key="index" @click="getGoodsDetail(item.goodsId)">
                <van-image fit="contain" :src="item.cover" class="goodsImg" />
                <div class="goodsInfo">
                    <div class="name">{{item.goodsName}}</div>
                    <div class="info">{{item.info}}</div>
                    <div class="price">¥{{item.price}}
                        <van-icon name="shopping-cart-o" class="addToCar" @click.stop="addToCar(item)"/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div v-show="goods.length<1">
            <img src="./../../assets/image/noFind.png" class="nofind">
            <p class="nofindFont">暂无商品</p>
        </div>
    </div>
</template>

<script>
    import {addToCar} from './../api/goods'
    export default {
        props:['goods','titleName'],
        data(){
            return {
                
            }
        },
        methods:{
            getGoodsDetail(id) {
                this.$router.push({name:'goods',query:{goodsId:id}})
            },
            addToCar(e) {
                addToCar({userId:this.$db.get('userId'),goodsId:e.goodsId}).then(res=> {
                    this.$db.save('collectionGoods',res.data.list.collectionGoods)
                    this.$emit('getData',res.data.list.collectionGoods.length)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.goods{
    background: #fff;
    padding: 0px 10px;
    margin-bottom: 50px;
    padding-bottom: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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
                    white-space: nowrap;
                    text-overflow:ellipsis;
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
                    display: flex;
                    justify-content:space-between;
                    .addToCar{
                        width: 20px;
                        height: 20px;
                        color: #ee0a24;
                    }
                }
            }
        }
    }
    .nofind{
        width: 100%;
    }
    .nofindFont{
        text-align: center;
        font-size: 14px;
        color: #6C7B8A;
        padding-bottom: 40px;
    }
}
</style>
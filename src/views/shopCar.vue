<template>
    <div class="page">
        <van-nav-bar
            title="购物车"
            right-text="编辑"
            @click-right="onClickEdit"
            fixed
        />
        <div class="content">   
            <div class="goods_content_box" v-for="(item,index) in carGoods" :key="index">
                <van-checkbox class="goods_radio" size="20px" v-model="item.goodsRadio" @change="onGoodsRadio(item)"></van-checkbox>
                <div class="goods_detail_content">
                    <img :src="item.url"  @click="onGoodsDetail(item.goodsId)">
                    <div class="goods_txts" @click="onGoodsDetail(item.goodsId)">
                        <p class="goods_name">{{item.goodsname}}</p>
                        <div class="goods_Op">
                            <van-icon size="20px" name="ellipsis" @click.stop="onCutCart(item)" />
                            <input type="number" :value="item.number" />
                            <van-icon size="20px" name="add-o" @click.stop="onAddCart(item)" />
                        </div>
                        <div class="goods_price">¥{{item.price}}</div>
                    </div>
                </div>
                <div class="goods_del_box" v-show="editStatus" @click="deleteGoods(item,index)">
                    <van-icon size="20px" name="delete"></van-icon>
                </div>
            </div>
            
        </div>
        <van-submit-bar
            style="margin-bottom:50px;"
            :price="totalPrice * 100"
            button-text="提交订单"
            @submit="onSubmit"
        >
        <van-checkbox v-model="allChecked" @click="clickAllGoods" style="padding-left:15px">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default { 
    data() {
        return {
            totalPrice:0,
            allChecked:false,
            editStatus:false,
            carGoods:[
                {goodsname:'aaabbbbaaabbbb',goodsRadio:false,price:100.12,number:1,goodsId:1,url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg'},
                {goodsname:'aaa',goodsRadio:false,number:2,price:100.5,goodsId:2,url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg'},
            ],
            checkedGoods:[],
            checkAll:false
        }
    },
    watch: {
        checkedGoods: {
            handler(newVal,oldVal) {
                this.totalPrice = 0
                newVal.map(x=> {
                    this.totalPrice += parseFloat(x.price) * x.number
                })
            },deep:true
        }
    },
    created() {
        this.initGoodsRadio()
    },
    methods: {
        initGoodsRadio() {
            this.carGoods.map(x=> {
                x.goodsRadio = false
            })
        },
        onClickEdit() {
           this.editStatus = !this.editStatus
        },
        onSubmit() {
            console.log(this.checkedGoods)
        },
        onGoodsRadio(e) { // 单选
            this.checkedGoods = []
            this.carGoods.forEach(x=> {
                if(x.goodsRadio) { // 选中
                    this.checkedGoods.push(x)
                }
            })
            if(this.checkedGoods.length === this.carGoods.length) {
                this.allChecked = true
            }else {
                this.allChecked = false
            }
            
        },
        clickAllGoods(e) { // 全选
            Toast.loading({
                message: '加载中...',
                duration:500,
                forbidClick: true
            })
            setTimeout(()=> {
                this.checkAll = !this.checkAll
                if(this.checkAll) {
                    this.carGoods.map(x=> {
                        x.goodsRadio = true
                        this.checkedGoods.push(x)
                    })
                }else {
                    this.carGoods.map(x=> {
                        x.goodsRadio = false
                    })
                    this.checkedGoods = []
                }
            },500)
        },
        onGoodsDetail() {

        },
        onAddCart(e) {
            e.number++
        },
        onCutCart(e) {
            if(e.number>1) {
                e.number--
            }
        },
        deleteGoods(item,index) {
            this.carGoods.splice(index,1)
            var checkedGoodsIds = []
            this.checkedGoods.map(x=> checkedGoodsIds.push(x.goodsId))
            if(checkedGoodsIds.includes(item.goodsId)) { // 删除的在选中的里面
                this.checkedGoods.splice(checkedGoodsIds.indexOf(item.goodsId),1)
            }
            // todo ...
        },

    }
}
</script>

<style lang="scss" scoped>
    .page {
        background:#F4F6F9;
        .shopCarTop{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
        }
        .content {
            background: #fff;
            padding-top: 60px;
            padding-bottom: 100px;
            .goods_content_box{
                display: flex;
                border-bottom: 1px solid #cccccc;
                height: 120px;
                padding: 0 10px;
                background: white;
                .goods_radio {
                    width: 10%;
                }
                .goods_detail_content {
                    width: 80%;
                    & > img {
                        margin-right: 10px;
                        width: 100px;
                        height: 100px;
                        margin-left: 10px;
                        margin-top: 10px;
                        float: left;
                    }
                    .goods_txts{
                        display: inline-block;
                        max-width: 200px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 15px;
                    }
                    .goods_Op {
                        margin: 10px 0;
                        input {
                            border: none;
                            font-size: 14px;
                            text-align: center;
                            width: 30px;
                            top: -5px;
                            position: relative;
                        }
                    }
                    .goods_price {
                        color: #ee0a24;
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
                .goods_del_box{
                    width: 10%;
                    text-align: center;
                    line-height: 120px;
                }
            }
        }
    }
</style>
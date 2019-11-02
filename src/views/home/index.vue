<template>
    <div class="page">
        <searchBar ref="searchBar" @search-goods="getGoodsList"></searchBar>
        <banner :bannerPic="bannerPic" :content="content"></banner>
        <goodsList @getData="changeShopCar" :goods="goods" :titleName="'好物推荐'"></goodsList>
    </div>
</template>

<script>
    import searchBar from './../../components/searchBar'
    import banner from './components/banner'
    import goodsList from './../../components/goodsList'
    import { getBanner, getGoodsByTags } from './../../api/home'
    export default {
        name: 'home',
        components:{ searchBar, banner, goodsList },
        data() {
            return {
                postData: {
                    goodsName:''
                },
                bannerPic:[],
                content:'',
                goods:[]
            }
        },
        created() {
            this.getBanner()
            this.getGoods()
        },  
        methods:{
            getBanner() {
                getBanner().then(res=> {
                    this.bannerPic = res.data.bannerList
                    this.content = res.data.notice
                })
            },
            getGoods() {
                getGoodsByTags({tags:''}).then(res=> {
                    this.goods = res.data.goodsList
                })
            },
            getGoodsList(goodsName) {
                this.postData.goodsName = goodsName
            },
            changeShopCar(res) {
                this.$emit('getData',res)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9;
        height: 100vh;
        overflow-y: scroll;
    }
</style>
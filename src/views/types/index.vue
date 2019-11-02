<template>
    <div class="page">
        <searchBar ref="searchBar" @search-goods="getGoodsList"></searchBar>
        <van-tabs >
            <van-tab v-for="(item,index) in allTabs" :key="index">
                <div slot="title" @click="getGoodsList(item)">{{ item }}</div>

                <goodsList :titleName="item+'精选商品'" :goods="goods"></goodsList>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import searchBar from './../../components/searchBar'
    import goodsList from './../../components/goodsList'
    import { getAllTags } from './../../api/types'
    import {getGoodsByTags} from './../../api/home'
    export default {    
        name:'types',
        components:{ searchBar, goodsList },
        data() {
            return {
                allTabs:[],
                goods:[]
            }
        },

        created() {
            this.getAllTabs()
        },

        methods:{
            getAllTabs() { // 获取所有tab
                getAllTags().then(res=> {
                    this.allTabs = res.data.list
                    this.getGoodsList(res.data.list[0])
                })
            },

            getGoodsList(e) { // 获取商品列表
                getGoodsByTags({tags:e}).then(res=> {
                    this.goods = res.data.goodsList
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9
    }
</style>
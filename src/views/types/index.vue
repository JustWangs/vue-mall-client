<template>
    <div class="page">
        <searchBar ref="searchBar" @search-goods="getGoodsList"></searchBar>
        <van-tabs >
            <van-tab v-for="(item,index) in allTabs" :key="index">
                <div slot="title" @click="getGoodsList(item.type)">{{ item.name }}</div>

                <goodsList :titleName="item.name+'精选商品'" :goods="goods"></goodsList>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import searchBar from './../../components/searchBar'
    import goodsList from './../../components/goodsList'
    export default {    
        name:'types',
        components:{ searchBar, goodsList },
        data() {
            return {
                allTabs:[
                    {name:'男装',type:1},
                    {name:'女装',type:2},
                    {name:'男鞋',type:3},
                    {name:'女鞋',type:4},
                ],
                goods:[
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1',type:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'}
                ]
            }
        },

        created() {
            this.getAllTabs()
        },

        methods:{
            getAllTabs() { // 获取所有tab

            },

            getGoodsList(e) { // 获取商品列表
                console.log(e)
                // todo ...
            },
        },
    }
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9
    }
</style>
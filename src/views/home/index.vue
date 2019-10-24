<template>
    <div class="page">
        <searchBar ref="searchBar" @search-goods="getGoodsList"></searchBar>
        <banner :bannerPic="bannerPic"></banner>
        <goodsList :goods="goods" :titleName="'好物推荐'"></goodsList>
    </div>
</template>

<script>
    import searchBar from './../../components/searchBar'
    import banner from './components/banner'
    import goodsList from './../../components/goodsList'
    export default {
        name: 'home',
        components:{ searchBar, banner, goodsList },
        data() {
            return {
                postData: {
                    goodsName:''
                },
                bannerPic:[
                    { url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',goodsId:1 },
                    { url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',goodsId:2 }
                ],
                goods:[
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'奶粉',info:'aaaaaa',price:1231,goodsId:'1'},
                    {url:'//imgcps.jd.com/ling4/1431731/5am05bm85aW257KJ5LyY5ZOB/54ix5LmL54iG5qy-/p-5c1361ed82acdd181dd72168/87308cc5/cr_1125x445_0_171/s1125x690/q70.jpg',name:'xxxxx',info:'',price:1231,goodsId:'2'}
                ]
            }
        },
        created() {
            
        },
        methods:{
            getGoodsList(goodsName) {
                this.postData.goodsName = goodsName
                console.log(goodsName)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        background: #F4F6F9
    }
</style>
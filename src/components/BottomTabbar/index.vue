<template>
    <div>
        <van-tabbar v-model="active" id="NavBar">    
            <van-tabbar-item name="home" icon="home-o" @click="changeLink('home')">首页</van-tabbar-item>
            <van-tabbar-item name="types" icon="hot" @click="changeLink('types')">分类</van-tabbar-item>
            <van-tabbar-item name="shop_car" icon="search" @click="changeLink('shopCar')" :info="shopCarNum">购物车</van-tabbar-item>
            <van-tabbar-item name="mine" icon="friends-o" @click="changeLink('mine')">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name:'BottomTabbar',
        data() {
            return {
                active: 'home',
                shopCarNum: 0,
            }
        },
        created() {
            this.getshopCarNum()
        },
        methods:{
            getshopCarNum() {
                if(this.$db.get('shopCarNum')>0) {
                    this.shopCarNum = this.$db.get('shopCarNum')
                }
            },
            changeLink(e) {
                this.$router.push({name:e})
            },
        },
    }
</script>

<style lang="scss" scoped>
    #NavBar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
</style>
<template>
    <div class="page">
        <van-nav-bar title="地址列表" left-arrow @click-left="onBack" fixed/>
        <van-address-list
            class="address"
            v-model="defultAddress"
            :list="addressList"
            @select="selectAddress"
            @add="onAdd"
            @edit="onEdit"
        />  
    </div>
</template>

<script>
import { getAllAddress } from './../../api/address'
export default { 
    data() {
        return {
            defultAddress:'1',
            addressList: [],
        }
    },
    created() {
        this.userAddress()
    },
    methods: {
        userAddress() {
            getAllAddress({userId:this.$db.get('userId')}).then(res=> {
                this.addressList = res.data.addressList
            })
        },
        onAdd() {
            this.$router.push({name:'handleAddress',query: {type:'new'}})
        },
        onEdit(item) {
            this.$router.push({name:'handleAddress',query: { type:'edit',info:JSON.stringify(item)}})
        },
        selectAddress(item) {
            console.log(item)
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
        .address{
            margin-top: 60px;
            .van-radio-group{
                margin-bottom: 120px;
            }
        }
    }
</style>
<template>
    <div class="page">
        <van-nav-bar title="操作地址" left-arrow @click-left="onBack" fixed/>
        <van-address-edit
            class="addressEdit"
            :area-list="areaList"
            show-postal
            :show-delete="this.$route.query.type==='edit'"
            show-set-default
            show-search-result
            :address-info="addressInfo"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>

<script>
import areaList from "./../../assets/area.js";
import { createAddress } from './../../api/address'
export default {
  name:'handleAddress',
  data() {
    return {
      areaList,
      addressInfo:{}
    }
  },
  created() {
    if(this.$route.query.type==='edit') {
      this.addressInfo = JSON.parse(this.$route.query.info)
    }
  },
  methods: {
    onSave(item) {
      if(this.$route.query.type=='new') { // create
        item.userId = this.$db.get('userId')
        item.address = item.province+item.city+item.county+item.addressDetail
        createAddress(item).then(res=> {
          if(res.data.code==200) {
            this.$toast('新增成功')
            this.$router.go(-1)
          }
        })
      }else { // update
        console.log(item)
        console.log('更新')
      }
    },
    onDelete() {

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
        .addressEdit{
          margin-top: 60px;
        }
    }
</style>
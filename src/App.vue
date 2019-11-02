<template>
  <div id="app">
    <router-view @getData="getShopCarNum"/>
    <BottomTabbar :changeCarNum="changeCarNum" v-if="this.$route.meta.showBottom"></BottomTabbar>
  </div>
</template>

<script>
import BottomTabbar from "./components/BottomTabbar/index"
export default {
  name: 'app',
  components:{ BottomTabbar },
  data(){
    return {
      changeCarNum:0,
    }
  },
  methods:{
    getShopCarNum(res) {
      console.log(res)
      this.changeCarNum = res
    }
  }
}
</script>

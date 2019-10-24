<template>
  <div id="app">
    <router-view />
    <BottomTabbar v-if="this.$route.meta.showBottom"></BottomTabbar>
  </div>
</template>

<script>
import BottomTabbar from "./components/BottomTabbar/index"
export default {
  name: 'app',
  components:{ BottomTabbar },
}
</script>

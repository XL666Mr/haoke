<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#21b97a" @change="onChange" class="Home_tabber">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">资讯</van-tabbar-item>
      <van-tabbar-item to="/home/profile">
        <template #icon>
          <van-icon name="contact" />
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: this.$route.name
    }
  },
  methods: {
    onChange () {
      console.log(this.active)
    }
  }
}
</script>

<style>
</style>

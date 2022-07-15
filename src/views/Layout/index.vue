<template>
  <div>
    <router-view></router-view>
    <van-tabbar active-color="#21b97a" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/list">找房</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o" to="/home/news">资讯</van-tabbar-item>
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
export default {}
</script>

<style></style>

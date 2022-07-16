<template>
  <div>
    <div>
      <van-nav-bar title="收藏列表" class="title" @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-list>
        <van-cell
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
        >
          <template>
            <img :src="url + item.houseImg" />
          </template>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/user'
export default {
  data () {
    return {
      list: [],
      url: 'http://liufusong.top:8080'
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const { data: res } = await getList()
      console.log(res.body)
      this.list = res.body
    },
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  background-color: #21b97a;
  :deep .van-nav-bar__title {
    color: #fff;
  }
  :deep .van-icon-arrow-left:before {
    color: #fff;
  }
}
</style>

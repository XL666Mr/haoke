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
        <van-cell v-for="(item, index) in list" :key="index" class="Fa_grid">
          <div class="Fa_template">
            <div class="Fa_img">
              <img :src="url + item.houseImg" />
            </div>
            <div class="Fa_right">
              <div>
                <h3>{{ item.title }}</h3>
              </div>
              <div class="Fa_text">{{ item.desc }}</div>
              <div class="Fa_site">
                <span v-for="(obj, i) in item.tags" :key="i">{{ obj }}</span>
              </div>
              <div class="Fa_price">
                <span>{{ item.price }}</span
                >元/月
              </div>
            </div>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/user'
import { URL } from '@/utils/url'
export default {
  data() {
    return {
      list: [],
      url: URL
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data: res } = await getList()
      console.log(res.body)
      this.list = res.body
    },
    onClickLeft() {
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
.Fa_grid {
  height: 240px;
  padding-top: 18px;
  :deep .van-cell__value {
    display: flex;
    .Fa_template {
      display: flex;
      align-items: center;
      // justify-content: center;
      .Fa_img {
        width: 106 * 2px;
        height: 80 * 2px;
        display: flex;
        align-items: center;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .Fa_right {
      padding-left: 20px;
      h3 {
        margin: 0;
      }
      .Fa_text {
        font-size: 12px;
        color: #afb2b3;
      }
      .Fa_site {
        color: #39becd !important;
        background-color: #e1f5f8;
        width: 46 * 2px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
        margin-right: 10px;
      }
      .Fa_price {
        font-size: 12px;
        color: #fa5741;
        span {
          font-size: 32px;
          font-weight: bolder;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

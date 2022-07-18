<template>
  <div>
    <!-- 头部 -->
    <div class="My_title">
      <!-- 背景图 -->
      <img class="My_bg" :src="url + userInfo.avatar" alt="" v-if="isLogin" />
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt=""
        style="margin-bottom:100px"
        v-else
      />

      <!-- 登录 -->
      <div class="My_info" v-if="isLogin">
        <!-- 头像 -->
        <div class="My_myIcon">
          <img class="My_avatar" :src="url + userInfo.avatar" />
          <div class="My_name">{{ userInfo.nickname }}</div>
        </div>
        <!-- 登录按钮 -->
        <div class="My_user">
          <van-button
            type="primary"
            color="#21b97a"
            class="my_button"
            size="small"
            @click="goBack"
            >退出</van-button
          >
        </div>
      </div>
      <!-- 未登录 -->
      <div class="My_info1" v-else>
        <!-- 头像 -->
        <div class="My_myIcon">
          <img
            class="My_avatar"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
          />
          <div class="My_name">游客</div>
        </div>
        <!-- 登录按钮 -->
        <div class="My_user">
          <van-button
            type="primary"
            color="#21b97a"
            class="my_button"
            size="small"
            to="/login"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <div style="margin-top: 20px">
      <!-- 宫格 -->
      <van-grid :column-num="3" :border="false" class="My_grid">
        <van-grid-item icon="photo-o" text="我的收藏" @click="toMyfavorate">
          <template #icon><van-icon name="star-o" /> </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="我的出租">
          <template #icon><van-icon name="wap-home-o" /> </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="看房记录">
          <template #icon><van-icon name="underway-o" /> </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="成为房主">
          <template #icon><van-icon name="idcard" /> </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="个人资料">
          <template #icon><van-icon name="contact" /> </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="联系我们">
          <template #icon><van-icon name="phone-o" /> </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 广告 -->
    <div class="My_ad">
      <img class="advertise" :src="url + '/img/profile/join.png'" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo, userLogout } from '@/api'
import { URL } from '@/utils/url'
export default {
  data() {
    return {
      userInfo: {},
      url: URL
    }
  },
  methods: {
    toMyfavorate() {
      this.$router.push('/favorate')
    },
    async getUserInfo() {
      const res = await getUserInfo()
      this.userInfo = res.data.body
      console.log(res)
    },
    async goBack() {
      try {
        console.log(this.isLogin)
        const res = await userLogout()
        this.$store.commit('setTokens', {})
        console.log(res)
      } catch (error) {}
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    isLogin() {
      return !!this.$store.state.token.token
    }
  }
}
</script>

<style lang="less" scoped>
.My_title {
  min-height: 300px;
  position: relative;
  .My_bg {
    width: 100%;
  }
  .My_info {
    position: absolute;
    background: #fff;
    width: 80%;
    height: 55%;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    text-align: center;
    font-size: 13px;
    .My_myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 115px;
      height: 115px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .My_avatar {
        width: 100%;
        border-radius: 50%;
      }
      .My_name {
        margin-top: 50px;
        margin-bottom: 10px;
      }
    }
    .My_user {
      margin-top: -25px;
      .my_button {
        border-radius: 13px;
        width: 140px;
      }
    }
  }
  .My_info1 {
    position: absolute;
    background: #fff;
    width: 80%;
    height: 55%;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    text-align: center;
    font-size: 13px;
    .My_myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 115px;
      height: 115px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .My_avatar {
        width: 100%;
        border-radius: 50%;
      }
      .My_name {
        margin-top: 50px;
        margin-bottom: 10px;
      }
    }
    .My_user {
      margin-top: -25px;
      .my_button {
        border-radius: 13px;
        width: 140px;
      }
    }
  }
}
.My_grid {
  margin-bottom: 55px;
}
.My_ad {
  text-align: center;
  margin-top: 10px;
  .advertise {
    width: 91%;
  }
}
</style>

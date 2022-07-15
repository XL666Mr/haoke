<template>
  <div>
    <!-- 头部 -->
    <div class="My_title">
      <!-- 背景图 -->
      <img
        class="My_bg"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt=""
      />
      <!-- 登录模块 -->
      <div class="My_info">
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
            to="/login"
            color="#21b97a"
            class="my_button"
            size="small"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <div style="margin-top: 20px">
      <!-- 宫格 -->
      <van-grid :column-num="3" :border="false" class="My_grid">
        <van-grid-item icon="photo-o" text="我的收藏">
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
      <img
        class="advertise"
        src="http://liufusong.top:8080/img/profile/join.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.My_title{
  min-height: 300px;
  position: relative;
  .My_bg {
    width: 100%;
  }
  .My_info {
    position: absolute;
    background: #fff;
    width: 80%;
    height: 82%;
    top:56%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_myIcon{
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
      .My_name{
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
.My_grid{
  margin-top: 230px;
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

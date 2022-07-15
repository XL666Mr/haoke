<template>
  <div>
    <van-nav-bar title="账号登录" class="title" @click-left="onClickLeft">
      <template #left>
        <span class="toutiao toutiao-zuojiantou"></span>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
      </van-field>

      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="btn"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="register"><a href="#">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      console.log(values)
      const res = await login(this.username, this.password)
      console.log(res)
      if (res.data.status === 200) {
        return this.$toast.success('登录成功')
      } else {
        return this.$toast.fail('登录失败')
      }
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
    font-size: 38px;
  }
  .toutiao {
    color: #fff;
    font-size: 35px;
  }
}

.form {
  :deep .van-field__control {
    height: 120px;
    width: 100%;
    padding: 2px 0;
    border: 0;
    color: #000;
    font-size: 34px;
    background-color: transparent;
  }
  .btn {
    display: block;
    outline: 0 none;
    -webkit-appearance: none;
    padding: 0;
    text-align: center;
    font-size: 35px;
    height: 100px;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    color: #fff;
    background-color: #1cb676;
    border: 1px solid #1cb676;
    border-radius: 5px;
    width: 100%;
  }
}
.register {
  position: relative;
  left: 50%;
  bottom: -20px;
  width: 300px;
  margin-left: -150px;
  font-size: 28px;
  text-align: center;
  a {
    color: #666;
  }
}
</style>

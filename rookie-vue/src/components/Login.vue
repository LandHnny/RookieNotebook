<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">账号/邮箱/手机号码：</label>
      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="inputPassword5" class="form-label">密码：</label>
      <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
      <div id="passwordHelpBlock" class="form-text">
        密码为8位，同时包含英文字母和数字。
      </div>
    </div>
    <button type="button" class="mb-3 btn btn-primary">登录/注册</button>

  </div>
</template>

<style scoped>
.greetings {
  width: 100%;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: #009c98;
}

h3 {
  font-size: 1.2rem;
}

button  {
  width: 100%;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

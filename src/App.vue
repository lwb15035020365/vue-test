<template>
  <div id="app">
    <div class="header">
      <div class="logo"
      @click='handleClick'>lwb</div>
      <!-- <router-link tag='div' class="logo" to='/home'>lwb</router-link> -->
       <ul class="nav">
          <router-link tag='li' to='/home'>首页</router-link>
          <router-link tag='li' :to='{path: "/learn"}'>课程学习</router-link>
          <router-link tag='li' :to="{name: 'student'}">学员展示</router-link>
          <router-link tag='li' to='/about'>关于</router-link>
          <router-link tag='li' to='/community'>社区</router-link>
       </ul>
    </div>
    <router-view class="view"/>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        this.$router.push('/home')//push,replace,go
      }
    }
  }
</script>
<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 200px;
    background-color: #38f;
    line-height: 70px;
    padding-bottom: 2px;
    color: #fff;
  }

  .logo {
    cursor: pointer;
  }

  .nav {
    display: flex;
  }

  .nav li {
    margin: 0 20px;
    cursor: pointer;
  }

  .view {
    padding: 50px 200px;
  }

  .active {
    font-weight: bold;
  }
</style>
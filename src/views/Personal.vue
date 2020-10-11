<template>
  <div class="personal">
    姓名:
    <input type="text" v-model="name" />
    <button @click="handleClick">确定</button>
  </div>
</template>


<script>
export default {
  beforeRouteLeave (to, from, next) {//钩子函数，也叫导航守卫
      if(this.name) {
        let flag = window.confirm('确定离开吗?');
        if(flag) {
          next();
          this.name = '';
        }
      }else {
        next();
      }
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleClick() {
      this.name = "";
    }
  }
};
</script>

<style scoped>
    button {
        margin-left: 15px;
        border: none;
        outline: none;
        cursor: alias;
        width: 60px;
        height: 30px;
    }
</style>
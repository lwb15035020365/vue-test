<template>
  <ul class="academic">
      <router-link
      tag='li'
      :to="{name: 'question', params: {id: question.questionId}}"
        v-for="question in questionList"
        :key="question.questionId"
      >{{ question.title }}</router-link>
  </ul> 
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    // consoel.log(this) undefined
    next();
    // next(vm => {
    //   vm//可以获取到组件实例
    // });//
  },
  data() {
    return {
      questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
    };
  }
};
</script>

<style scoped>
    li {
        margin-bottom: 20px;
    }
</style>
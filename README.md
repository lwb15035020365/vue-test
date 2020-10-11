# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


返回上一级：cd ..

运行指令：vue serve App.vue 如果文件名是App，可以简写为vue serve

npm install -g @vue/cli     安装脚手架，用于生成项目
npm install -g @vue/cli-service-global   快速原型开发 编译.vue文件

如果之前已经安装过旧版本（非3.x）脚手架，需先卸载旧版本：
npm uninstall vue-cli -g

如果仍然需要使用旧版本的 vue init 功能，可以全局安装一个桥接工具：
npm install -g @vue/cli-init    拉取旧版本

插件名字：Vetur

vue文件里可以写单标签

````js
main.js是主入口文件 可以用jsx语法，html文件里不能用
App.vue是组件
````

用脚手架搭建项目命令：vue cerate vue-app; vue-app时项目文件名称
运行指令：npm run serve

ui生成项目命令： vue ui


删除自己的预设，去c盘/用户/李文博，打看文件.vuerc，删除prestes里的东西
ui删除项目，路径一样，找到.vue-cli-ui文件夹，打开db.json，全删


路由：切换路径，
安装路由命令：vue add router

class:router-link-exact-active:点击路径会添加这个class
      router-link-active:点击路径包含该路径，就会添加这个class

页面级组件：一个路径对应渲染一个页面。

路由提供的钩子函数也叫导航守卫

$router：放置的路由实例的方法
$route: 放置的路由信息

动态路由 /question/:id   this.$route.params.xxx  this.$route.query.xxx(通过?在url上显示)
        动态路由router-link的to必须是name

###导航守卫
全局守卫
beforeEach 守护每一个路径的，不写next，任何路径都点不开
beforeResolve 路由内的组件都加载完，才执行
afterEach 所有都准备好，才执行,没有next

路由独享守卫
beforeEnter

组件内守卫
beforeRouteLeave 当离开这个路径执行
beforeRouteEnter 当进入这个路径执行,获取不到组件的this(undefiend)，可通过next传参来获取 next(vm => vm.$data)
beforeRouteUpdate 当路径更新时执行
参数 to、from、next

路由守卫执行顺序：全局守卫 > 路由独享守卫 > 组件守卫 > beforeResolve > afterEach


完整的导航解析流程
1.导航被触发。
2.在失活的组件里调用离开守卫。
3.调用全局的 beforeEach 守卫。
4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5.在路由配置里调用 beforeEnter。
6.解析异步路由组件。
7.在被激活的组件里调用 beforeRouteEnter。
8.调用全局的 beforeResolve 守卫 (2.5+)。
9.导航被确认。
10.调用全局的 afterEach 钩子。
11.触发 DOM 更新。
12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

路由元信息
存储路由信息 meta: {}


安装vuex：vue add vuex
vuex上的方法
strict: true,//开启严格模式
state: this.$store.state.xxx,
       mapState([]), 
       mapState({
           newXXX: state => state.xxx
       })

getters: this.$store.getters.xxx
         mapGetters(['xxx'])
         mapGetters({
             newXXX: 'xxx'
         })
         getters: {
             func(state, getters) {
                 return 'xxx'
             }
         }


mutations
改变vuex中的状态
只能执行同步
this.$store.commit('xxx')
mapMutation(['xxx])
mapMutation({
    newXXX: 'xxx'
})


action
提交mutation，让mutation去更改状态
能够执行异步
this.$store.dispatch('xxx')
mapActions(['xxx'])
mapActions({
    newXXX: 'xxx'
})



modules
根据功能让vuex分出模块
state会放入每一个模块下，getters、mutations、actions会直接放入到全局

获取vuex中的数据（无namespaced）
获取 state：this.$store.state.moduleName.xxx
获取getters、mutations、actions:    this.$store.getters.xxx
                                    this.$store.commit('xxx')
                                    this.$store.dispatch('xxx')
可以通过mapXXX方式拿到getters、mutations、action,但是不能拿到state，如果想通过这种方式获取state，需要加命名空间：namespaced:true


获取vuex中的数据（有namespaced）
获取 state：this.$store.state.moduleName.xxx
获取getters、mutations、actions:    this.$store['moduleName/getters'].xxx
                                    this.$store.commit('moduleName/xxx')
                                    this.$store.dispatch('moduleName/xxx')
可以通过mapXXX方式:mapXXX('moduleName', ['xxx'])  mapXXX('moduleName', {})


打包脚手架项目文件：npm run build

安装css样式插件 vue add style-resources-loader,

单元测试
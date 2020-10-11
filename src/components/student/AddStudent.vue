<template>
    <div class="add-student">
        <div>添加学生：{{ newPerson }}</div>
        <div>姓名：<input type="text" v-model="name"></div>
        <div>年龄：<input type="text" v-model="age"></div>    
        <div><button @click='handleClick'>添加</button></div>
        <hr>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    // mapState(['name', 'age', 'sex']); 
    export default {
        data () {
            return {
                name: '',
                age: null
            }
        },
        methods: {
            // ...mapMutations(['changeStudentList']),
            ...mapActions(['changeStudentList']),
             handleClick () {
                const tempObj = {
                    name: this.name,
                    age: this.age,
                    id: +new Date()
                };
                // this.$store.state.studentList.push(tempObj);

                // this.$store.commit('changeStudentList', {tempObj, name: 'lwb123'})
                this.changeStudentList({tempObj, name: 'lwb'})
                // this.$store.dispatch('changeStudentList', {tempObj, name: 'lwb123'})
           }
        },
        computed: {
            // ...mapGetters(['person'])
            ...mapGetters({
                newPerson: 'person'
            })


            // ...mapState(['age', 'sex']),
            // ...mapState({
            //     storeName: state => state.name//修改store里属性名
            // })

            // name () {
            //     return this.$store.state.name;
            // }
        }
    }
</script>

<style scoped>
    div{
        margin-bottom: 15px;
    }
</style>
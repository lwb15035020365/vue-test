<template>
    <div class="login">
        <button @click="handleClick">登录</button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick () {
                const expirse = 900 * 24 * 60 * 60 * 1000;
                const date = new Date(+new Date() + expirse);
                document.cookie = `login=true;expirse=${date.toUTCString(expirse)}`
            }
        }
    }
</script>
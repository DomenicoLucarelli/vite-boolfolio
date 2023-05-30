<script>
export default {
    name: 'Prova',
    data() {
        return {
            work: '',
        }
    },

    created() {
        this.work = this.$route.params
       
        
    },

   
}
</script>

<template>
    <div class="container d-flex flex-column  justify-content-center align-items-center">
        <h1>{{ work.title }}</h1>
        <img :src="'http://127.0.0.1:8000/storage/' + work.posts" alt="">
    </div>
</template>

<style lang="scss" scoped>
.container{
    margin-top: 150px;
}
    img{
        
        width: 400px;
    }
</style>
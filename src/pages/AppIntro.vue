<script>
export default {
    name: 'AppIntro',
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <div id="container" class="container d-flex justify-content-center align-items-center flex-column" >
        <h4>Per visualizzare la Home clicca il link qui sotto</h4>
        
        <router-link :to="{name: 'home'}"> <button class="btn btn-primary"> Home </button> </router-link>
    </div>
</template>

<style lang="scss" scoped>
    #container{
        height: calc(100% - 57px);
    }
</style>
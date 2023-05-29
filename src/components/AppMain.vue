<script>
import axios from 'axios';

import MainCard from './MainCard.vue';

export default {

    name: 'AppMain',

    data() {
        return {
           
            works: [],
            
        }
    },

    components: {
        MainCard,
    },

    created() {

        axios.get('http://127.0.0.1:8000/api/works').then((res)=>{
            this.works = res.data.results
        });
            
    },
}
</script>

<template>

    <div class="container d-flex gap-3 py-5 justify-content-center">

        <div v-for="(work, index) in works" :key="index">

            <MainCard :work="work"></MainCard>

        </div>

    </div>

</template>

<style lang="scss" scoped>
    
</style>
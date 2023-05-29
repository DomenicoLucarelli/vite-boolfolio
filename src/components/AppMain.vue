<script>
import axios from 'axios';
export default {

    name: 'AppMain',

    data() {
        return {
           
            works: [],
            
        }
    },

    created() {

        axios.get('http://127.0.0.1:8000/api/works').then((res)=>{
            this.works = res.data.results
        });
            
    },
}
</script>

<template>
    <div class="container">
        
    </div>
</template>

<style lang="scss" scoped>
    
</style>
<script>
import axios from 'axios';

import MainCard from './MainCard.vue';

export default {

    name: 'AppMain',

    data() {
        return {
           
            works: [],
            page: 1,
            totalPages: '',
            
        }
    },

    components: {
        MainCard,
    },

    created() {

        axios.get('http://127.0.0.1:8000/api/works?page=' + this.page ).then((res)=>{
            this.works = res.data.results.data
            this.totalPages= res.data.results.last_page
            
        });
            
    },

    methods: {
        goNext(){
            this.page ++;

            if(this.page > this.totalPages){

                this.page = 1;

                axios.get('http://127.0.0.1:8000/api/works?page=' + this.page ).then((res)=>{

                    this.works = res.data.results.data
                    
                });
            }else{

                axios.get('http://127.0.0.1:8000/api/works?page=' + this.page ).then((res)=>{
                 
                    this.works = res.data.results.data
    
                });
            }
        },

        goPrev(){
            this.page --;

            if(this.page < 1){
                this.page = this.totalPages;

                axios.get('http://127.0.0.1:8000/api/works?page=' + this.page ).then((res)=>{
    
                    this.works = res.data.results.data
                     
                });

            }else{
                axios.get('http://127.0.0.1:8000/api/works?page=' + this.page ).then((res)=>{
    
                    this.works = res.data.results.data
     
                });
            }

        }
    },
}
</script>

<template>

    <div class="container d-flex gap-3 py-5 justify-content-center flex-wrap">

        <div id="card-container" v-for="(work, index) in works" :key="index">

            <MainCard :work="work" ></MainCard>

        </div>

    </div>

    <div class="container justify-content-center d-flex gap-3 pb-5 ">
        
        <button class="btn btn-secondary " @click="goPrev()">Prev</button>
        <button class="btn btn-primary" @click="goNext()">Next</button>

    </div>
</template>

<style lang="scss" scoped>
    
</style>
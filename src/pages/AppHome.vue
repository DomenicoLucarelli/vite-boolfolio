<script>
import axios from 'axios';

import MainCard from '../components/MainCard.vue';

export default {

    name: 'AppHome',

    data() {
        return {
           
            works: [],
            page: 1,
            totalPages: '',

            types: [],

            selectedType: '',

            postFound: false,

            errorMessage: '',
            
        }
    },

    components: {
        MainCard,
    },

    created() {

        this.getApi()
            
    },

    methods: {

        getApi(){
            axios.get('http://127.0.0.1:8000/api/works?page=' + this.page + '&type_id=' + this.selectedType ).then((res)=>{
            
            if(res.data.success){

                this.works = res.data.results.data
    
                this.types = res.data.types
    
                this.totalPages= res.data.results.last_page

                this.postFound = true
            }else{

                this.errorMessage = res.data.error
                this.postFound = false
            }
        
            
            
        });
        },

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
    <div class="container mt-5">

        <form @submit.prevent="" action="" >
    
            <select name="type_id" id="type_id"  class="form-select" v-model="selectedType" @change="getApi()" >
    
            <option value="">Tutte</option>
    
            <option v-for="(type, index) in types" :key="index" :value="type.id" >{{ type.name }}</option>
    
            </select>
    
        </form>

    </div>
    <div id="home-container" class="container d-flex gap-3 py-5 justify-content-center flex-wrap">


        <div v-if="postFound" v-for="(work, index) in works" :key="index">
           
            <MainCard  :work="work" ></MainCard>
            <router-link class="btn btn-primary my-2" :to="{name: 'singleCard' , params: {slug: work.slug}}">Mostra</router-link>
        </div>

        <div v-else>
            <div class="alert alert-info" role="alert">
                {{ errorMessage }}
            </div>
        </div>

    </div>

    <div class="container justify-content-center d-flex gap-3 pb-5 ">
        
        <button class="btn btn-secondary " @click="goPrev()">Prev</button>
        <button class="btn btn-primary" @click="goNext()">Next</button>

    </div>
</template>

<style lang="scss" scoped>
form{
    margin-top: 100px;
}
</style>
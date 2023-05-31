<script>
import axios from 'axios';

export default {
    name: 'SingleCard',
    data() {
        return {
            slug: '',

            card: {},
        }
    },

    created() {
        
     this.slug = this.$route.params.slug;

     axios.get('http://127.0.0.1:8000/api/works/' + this.slug ).then((res)=>{
        this.card = res.data.result
        console.log(this.card)
     })
        
    },

    methods: {
        getImage(){

            if (this.card.image == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            }else{

                return 'http://127.0.0.1:8000/storage/' + this.card.image
            }
            
        }
    },

   
}
</script>

<template>
    <div class="container d-flex justify-content-center mt-5">
        <div class="card" style="width: 18rem;">
        <img :src="getImage()" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">{{card.title}}</h5>
            <p class="card-text"> {{card.description}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Data: </b> {{ card.date }}</li>
            <li class="list-group-item"><b>Categoria: </b> {{ card.type.name }}</li>
            <li class="list-group-item"><b>Tecnologia/e: </b>
                <span v-if="card.technologies.length != 0" v-for="(tech, index) in card.technologies" :key="index" class="badge rounded-pill mx-1" :style="{backgroundColor: tech.color}">{{ tech.name }}</span>  
                <span v-else>Nessuna</span>          
            </li>           
        </ul>
        <div class="card-body d-flex justify-content-center">
            <a :href="card.git_url" ><i class="fa-brands fa-github fs-1"></i></a>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
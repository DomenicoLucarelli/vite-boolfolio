<script>
export default {

    name: 'MainCard',

    data() {
        return {
           
        
            
        }
    },

    props:{
        work: Object,
    },

    methods: {
        getImage(){

            if (this.work.image == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            }else{

                return 'http://127.0.0.1:8000/storage/' + this.work.image
            }
            
        }
    },
   
}
</script>

<template>
    
   <div class="card" style="width: 18rem;">
        <img :src="getImage()" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">{{work.title}}</h5>
            <p class="card-text"> {{work.description}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Data: </b> {{ work.date }}</li>
            <li class="list-group-item"><b>Categoria: </b> {{ work.type.name }}</li>
            <li class="list-group-item"><b>Tecnologia/e: </b>
                <span v-if="work.technologies.length != 0" v-for="(tech, index) in work.technologies" :key="index" class="badge rounded-pill mx-1" :style="{backgroundColor: tech.color}">{{ tech.name }}</span>  
                <span v-else>Nessuna</span>          
            </li>           
        </ul>
        <div class="card-body d-flex justify-content-center">
            <a :href="work.git_url" ><i class="fa-brands fa-github fs-1"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .fa-brands{
    color: #333;
}

.card{
    width: calc(100% / 3 - 1rem / 3 * 2);
}

.card-img, .card-img-top, .card-img-bottom{
    height: 250px;
    object-fit: cover;
}
</style>
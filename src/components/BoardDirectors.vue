<template>
    <div class="container my-5">
        <h1 class="director-title">Board of Directors</h1>
        <div class="row ">
          <div class="col-6 col:sm-12 mt-5"  v-for="director in directors" :key="director" v-on:mouseover="getRole">
               <div class="card">
            <div class="card-body card-content">
                <div class="card-left">
                    <img class="director-image" :src="require('@/assets/images/team/'+director.image)"  alt="image">
                </div>
                <div class="card-right ">
                    <h2>{{director.name}}</h2>
                    <h6>{{director.post}}</h6>
                    <a href="">
                        <img :src="require('../assets/images/facebook.png')" alt="">
                    </a>
                    <p>{{director.role}}</p>
                   
                </div>
             </div>
            </div>
          </div>
      </div>

    </div>
</template>
<script>
// const chairman=require('@/assets/images/team/chairman.webp')
// const ganesh=require('@/assets/images/team/ganesh.webp')
// const radha=require('@/assets/images/team/radha-mam.webp')
// const ambar=require('@/assets/images/team/ambar.webp')
// const mahesh=require('@/assets/images/team/mahesh.webp')
// const nanda=require('@/assets/images/team/nanda-sir.webp')
// const santosh=require('@/assets/images/team/san.webp')
import { mapGetters } from 'vuex'
export default{
    name:'BoardDirectors',
    data(){
        return{
            rolestate:false
            // directors:[
            //     {name:'Ram Chandra Sharma', post:'Chairman', fb:'', image:chairman},
            //      {name:'Ganesh Raj Gautam', post:'Director', fb:'', image:ganesh},
            //      {name:'Radha Dhakal', post:'Director', fb:'', image:radha},
            //      {name:'Ambar Sapkota', post:'Director', fb:'', image:ambar},
            //      {name:'Mahesh Kumar Sigdel', post:'Director', fb:'', image:mahesh},
            //      {name:'Dr Nanda Sharma', post:'Director', fb:'', image:nanda},
            //      {name:'Santosh Adhikari', post:'Director', fb:'', image:santosh}


            // ],
        }
    },
    methods:{
        getRole(index){
        console.log(index)
        }
    },
    computed:{
        ...mapGetters('directors',{
            directors:'getAllDirectors'

        })
    }
}
</script>
<style>
.card-content{
    display: flex;
    height: 250px;
    cursor: pointer;
}
.card-left{
    display: flex;
    align-items: center;
    justify-content: center;

}
.card-left img{
    width: 200px;
    height: 200px;
    background-size: cover;
    border-radius: 50%;
    
}
.director-title{
    font-size: 50px;
    color:#37517e;
}
.card-right{
    text-align: left;
    margin-left:30px
}
.card-right h2{
    color:#009550;
}
.card-right h6{
    text-decoration: underline;
    font-weight: bold;
    color: #37517e;
}
.card-right img{
    width:35px;
}
</style>
<template>
    <div class="row mt-5">

        <div class="col"><img :src="require('../assets/images/Sponsor.gif')" alt=""></div>
        <div class="col about-right">
            <h1 class="about-title">About Tourism Investment Fund Limited</h1>
            <p class="about-text">Tourism Investment Fund is a limited company registered with Government of Nepal, Ministry of Industry, Company Registrar Office, Kathmandu on 2076.06.16 BS under registration No. 226600/076/077 having its registered office at Pokhara Municipality, Sabhagriha Chowk -8, Kaski.</p>
            <br>
            <p>The objectives of the company are as follows:</p>
            <ul class="objective-list">
                <li v-for="objective in objectives" :key="objective"><img  class="arrows" :src="require('../assets/images/arrow.png')" alt=""> &nbsp;{{objective}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
// console.log(this.$store.getters['objectives/getObjective'])
import { mapGetters } from "vuex"
export default{
    name:'AboutComponent',
    data(){
        return{
            
        }
    },
    computed:{
        // displayObjective(){
        //     return this.$store.objectives.getObjectives
        // },
        ...mapGetters('data',{
            objectives:'getObjective'
            
        })

    }

}

</script>
<style>
.objective-list{
    list-style: none;
}
img.arrows{
    width: 20px;
}
.about-right{
    text-align: left;
    font-size: 22px;
}
.about-title{
    color:#37517e;
    font-size: 50px;
    font-weight: bold;
}
.about-text{
    text-justify: inter-word;
}
</style>

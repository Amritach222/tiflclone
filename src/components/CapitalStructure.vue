<template>
    <div class="capital">
        <div class=" container capital-content">
            <h1 class="capital-title">Capital Structure</h1>
            <br>
            <h3 class="audit-text">As per Audit 2077/78</h3>
            <div class="row mt-3">
                <div class="col capital-card" v-on:mouseover="getHover">
                    <img :src="require('../assets/images/icon-pack/capital.webp')" alt="">
                    <h1>1 Arba</h1>
                    <h5>Authorized Capital</h5>
                </div>
                <div class="col capital-card" v-on:mouseover="getHover">
                    <img :src="require('../assets/images/icon-pack/loan.webp')" alt="">
                    <h1>1 Arba</h1>
                    <h5>Authorized Capital</h5>
                </div>
                <div class="col capital-card" v-on:mouseover="getHover">
                    <img :src="require('../assets/images/icon-pack/paidup.webp')" alt="">
                    <h1>1 Arba</h1>
                    <h5>Authorized Capital</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'CapitalStructure',
    data(){
        return{
            hover:false
        }
    },
    methods:{
        getHover(){
            this.hover=!this.hover

        }
    }
}

</script>

<style>
.capital{
    text-align: left;
    background-image: url('../assets/images/service4-bg.webp');
    padding: 50px 0;
    background-repeat: no-repeat;
    color:white;
}
.capital-card{
    width: 100%;
    margin: 10px;
    height: 250px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
}
.capital-card:hover {
    background: #009550;
    opacity: 1;
    transition: all 0.5s ease;
    
}
.capital-title{
    font-size: 50px;
    font-weight: bold;
}
.audit-text{
    font-weight: bold;
}
.capital-card img{
    width: 40px;
}
.capital-card img{
    width: 40px;
}
.img-hover{
    position: relative;
    top: -30px;
    transition: all  1s ease;

}
</style>
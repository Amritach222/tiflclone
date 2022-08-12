<template>
<div class="subsidiary ">
<div class="container ">
    <div>
        <h1 class="subsi-title">Our Subsidiary Company</h1>
    </div>
    
    <div class="row">
        <div class="col-4 subsidiary-left">
            <div class="panchase project" v-on:click="update('panchase')">Panchase Cable Car</div>
            <div class="bandipur project" v-on:click="update('bandipur')">Bandipur Cable Car and Tourism Limited</div>
            <div class="bizbazar project" v-on:click="update('biz')">Bizbazar</div>
        </div>
        <div class="col subsidiary-right">
            <p class="subsidiary-content mt-5">{{currentItem}}</p>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import { mapGetters , mapActions } from "vuex"
export default{
    name:'SubsidiaryCompany',

    data(){
        return{
           
        }
    }
    ,
    methods:{
        getText(event){
            this.currentItem=event
        },
        ...mapActions('data',{
         upadteCompany:'updateCompany'
        }),
    // Updating company
        update(company){
            this.upadteCompany(company)

        }

    }
    ,
    computed:{
    ...mapGetters('data',{
        currentItem:'getAboutCompany'

    })
    }
}
</script>
<style>
.subsi-title{
     color:#37517e;
     font-size: 50px;
     font-weight: bold;
}
.subsidiary{
    background: #f3f5fa;
    text-align: left;
    padding: 90px 0;
}
.project{
    height: 100px;
    margin: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #009550;
    font-size: 22px;
    color: #009550;
    cursor: pointer;
    
}
.project:hover{
    background: #009550;
    color: white;
}
.project:active{
    background: #009550;
    color: white;
}
.subsidiary-right{
   background: white;
   transition: all 1s ease-in;
}
.subsidiary-content{
    font-size: 22px;
    transition: all 1s ease-in;

}

</style>
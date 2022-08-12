<template>
   <div class="program-section py-5">
       <div class="container">
           <div class="program-header">
               <ul class="program-tab">
                <li v-on:click="getComponent('program')" >Immediate program</li>&nbsp;&nbsp;&nbsp;
                <li v-on:click="getComponent('implement')" >Immediate Implementation</li>&nbsp;&nbsp;&nbsp;
                <li v-on:click="getComponent('strategy')" >Strategy Work Direction and Goal</li>
               </ul>
               <hr>
           </div>
           <div v-if="currentTab=='program'" class="content-details">
                <ProgramsComp/>
           </div>
           <div v-if="currentTab=='implement'" class="content-details">
                <ImmidiateImplementation/>
           </div>
           <div v-if="currentTab=='strategy'" class="content-details">
                <StrategyWork/>
           </div>
       </div>
   </div>
</template>
<script>
// import ProgramsComp from "./programs/ProgramsComp.vue"
import ProgramsComp from "./programs/ProgramsComp.vue"
import  ImmidiateImplementation from "./programs/ImmidiateImplementation.vue"
import StrategyWork from "./programs/StrategyWork.vue";
import { mapActions,mapGetters } from "vuex";
export default{
    name: "OurPrograms",
    components:{
    ProgramsComp,
    ImmidiateImplementation,
    StrategyWork
},
    data() {
        return {
           
        };
    },
    methods:{
       
        ...mapActions('programs',{
            // update Tab on clicking tab
            updateTab:'updateTab'

        }),
        //updating tab
        getComponent(tab){
            this.updateTab(tab)

        }
    },
    computed:{
        ...mapGetters('programs',{
            // Getting current Tab 
            currentTab:'getCurrentTab'
        })
    }, 
}
</script>

<style>
.program-tab{
    display: flex;
    color: #37517e;
    font-size: 25px;
    font-weight: bold;
    cursor:pointer;
}
.program-section{
    background: #f3f5fa;
}
</style>
<template>
    <div class="row" style="text-align:left">
        <div class="col immidiate">
            <p >As the company's immediate program:</p>
            <ul class="program-list">
                <li v-for="program in immidiateprogram" :key="program"><span class="program-arrow">→</span> {{program}}</li>
            </ul>
        </div>
        <div class="col timmidiate">
            <p class="" >As a targeted program:</p>
            <ul>
                <li v-for="program in targateprogram" :key="program">
                <span class="targate-arrow">→</span>
                    {{program}}
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
import { mapGetters } from "vuex"
export default {
    name:'ProgramComp',
    data(){
        return{
            //data here
            }
    },
    computed:{
        ...mapGetters('programs',{
            immidiateprogram:'getImmidiateProgram',
            targateprogram:'getTargetProgram'

        })
    }
}
</script>
<style>
.program-arrow{
    height: 50px;
    width: 50px;
    background: white;
    color: #009550;
    border-radius: 50%;
    text-align: center;
}
.targate-arrow{
    height: 50px;
    width: 50px;
    background: #009550;
    color: white;
    border-radius: 50%;
    text-align: center;
    padding: 0 1px;
}
.immidiate{
    background: #009550;
    color: white;
    font-size: 22px;
    padding:50px 0  ;
}
.timmidiate{
    font-size: 22px;
    padding:50px 0;
    background: white;
}
.immidiate p{
    font-size: 30px;
    color: white;
    text-align: center;
}
.timmidiate p{
    font-size: 30px;
    margin-left: 20px;
    color:#37517e;
    font-weight: bold;
}
</style>
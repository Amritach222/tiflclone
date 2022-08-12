<template>
    <div class="strategy">
        <ul>
            <li v-for="text in strategies" :key="text">
            <span class="strategy-arrow">→</span>
            {{text}}
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default{
    name:'StrategyWokr',
    data(){
        return{
            // data here
        }
    },
    computed:{
        ...mapGetters('programs',{
            strategies:'getStrategies'
        })
    }
    }
</script>
<style>
.strategy-arrow{
    height: 50px;
    width: 50px;
    background: #009550;
    color: white;
    border-radius: 50%;
    text-align: center;
    padding: 0 1px;
}
.strategy{
    background: white;
    font-size: 22px;
    text-align: left;
    padding: 20px 10px;
}
</style>
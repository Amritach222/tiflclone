const data = require('../../data.json')
export default{
    namespaced:true,
    state:{
        currentTab:'program',
        benefit_value: false,
        plan_value:false,
      summary_value:false,
      scheme_value:false,
    },
    mutations:{
        getCurrentTab(state,tab){
            state.currentTab=tab
        },
        toggleBenefit(state){
            state.benefit_value=!state.benefit_value
        },
         togglePlan(state){
            state.plan_value=!state.plan_value
         },
         toggleSummary(state){
             state.summary_value=!state.summary_value
         }, 
         toggleScheme(state){
             state.summary_value=!state.summary_value
         }
    },
    actions:{
        updateTab(context,payload){
            context.commit("getCurrentTab", payload)
        }
    },
    getters:{
        getCurrentTab(state){
            return state.currentTab
        },
        getImmidiateProgram(){
            return data.immidiateprogram;
        },
        getTargetProgram(){
            return data.targetprogram

        },
        // Getting strategies
        getStrategies(){
            return data.strategies;
        },
        getImpLists(){
            return data.imp_lists
        },
        //Get benefit value 
        getBenefit(state){
            return state.benefit_value
        },
        //getPlan()
        getPlan(state){
            return state.plan_value
        },
        // get Summary value
        getSummary(state){
            return state.summary_value
        },
        getScheme(state){
            return state.summary_value
        },
        // get Benefit data 
        getBenefitData(state){
            if(state.benefit_value){
                return data.benefits
            }
        },
        // Get plan data from data.json
        getPlanData(state){
            if(state.plan_value){
                return data.plans
            }

        },
        // Get summary data from data.json
        getSummaryData(state){
            if(state.summary_value){
                return data.summaries
            }
        },
        // get scheme data 
        getSchemeData(state){
            if(state){
                return data.schemes
            }
        },
        // Get SWPF agenda 
        getSwpfAgenda(){
            return data.swpfagenda
        }
    }
}
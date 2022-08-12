const data = require('../../data.json')
export default{
    namespaced:true,
    state:{
        company:data.about.panchase
    },
    getters:{
        getObjective(){
            return data.objectives
        },
        getAboutCompany(state){
            return state.company
        }
    },
    mutations:{
        getSubsiCompany(state, company){
            state.company=data.about[company]
        }
    },
    actions:{
        updateCompany(context,payload){
            return new Promise((resolve) => {
                  context.commit("getSubsiCompany", payload);
                  resolve("Okay");
              });
        }
    }
}
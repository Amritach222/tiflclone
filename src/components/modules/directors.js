const data = require('../../data.json')
// console.log(data.directors)
export default{
    namespaced:true,
    getters:{
        getAllDirectors(){
            return data.directors;
        }
    },
    mutations:{
        setRole(){
            
        }
    }
}
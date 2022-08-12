<template>
  <div class="implementation">
    <section class="implementation-list">
      <ul>
        <li v-for="list in imp_lists" :key="list">
          <span class="imp-arrow">→</span>
          {{ list }}
        </li>
      </ul>
    </section>
    <section>
      <div class="sldp-container">
        <h1>SLDP</h1>
        <nav>
          <div class="sldp-nav-menu">
            <ul>
              <li class="sldp-nav-menu-list">परिलक्ष्य (Mission)</li>
              &nbsp;&nbsp;&nbsp;
              <li class="sldp-nav-menu-list">परिदृश्य (Vision)</li>
              &nbsp;&nbsp;&nbsp;
              <li class="sldp-nav-menu-list">उद्देश्य (Objective)</li>
              &nbsp;&nbsp;&nbsp;
              <li class="sldp-nav-menu-list">जग्गा क्षेत्र (Land Area)</li>
            </ul>
          </div>
        </nav>
        <hr />
        <div class="sldp-obj">
          <p>
            स्वायत्त व्यवसायिक साझेदारी गर्ने र थप प्रतिफलको आधार खडा गर्ने ।
          </p>
        </div>
        <div class="sldp-brief">
          <div class="benefit">
            <div class="benefit-first" v-on:click="updateBenefit">
              <h4>मुख्य फाइदाहरु</h4>
              <span>{{ benefit_value ? "-" : "+" }}</span>
            </div>
            <ul v-if="benefit_value">
              <li v-for="benefit in benefits" :key="benefit">
                <span class="arrow">→</span> {{ benefit }}
              </li>
            </ul>
          </div><hr>
          <div class="plans">
            <div class="benefit">
            <div class="benefit-first" v-on:click="updatePlan">
              <h4>पहिलो परियोजना</h4>
              <span>{{ plan_value ? "-" : "+" }}</span>
            </div>
            <ul v-if="plan_value">
              <li v-for="plan in plans" :key="plan">
                <span class="arrow">→</span> {{ plan }}
              </li>
            </ul>
          </div>
          </div><hr>
          <div class="summary">
            <div class="benefit">
            <div class="benefit-first" v-on:click="updateSummary">
              <h4>सारांशमा</h4>
              <span>{{ summary_value ? "-" : "+" }}</span>
            </div>
            <ul v-if="summary_value">
              <li v-for="summary in summaries" :key="summary">
                <span class="arrow">→</span> {{ summary }}
              </li>
            </ul>
          </div>
          </div>
          <hr>
        </div>
      </div>
    </section>
    <section>
      <div class="swpf">
        <h1>SWPF</h1>
        <div class="scheme">
          <div class="scheme-head" v-on:click="updateScheme">
            <p>स्किमको नामः “शेयरधनी अग्राधिकार शेयर फण्ड SWPF” स्किमलाई देहायबेमोजिम वर्गीकरण गरिएको छ ।</p>
            <span>{{ scheme_value ? "-" : "+" }}</span>
          </div>
          <div class="scheme-content">
            <ul v-if="scheme_value">
              <li v-for="scheme in schemes" :key="scheme">
                {{scheme}}
              </li>
            </ul>
          </div>
        </div>
        <div class="swpf-agenda">
          <ul>
            <li v-for="agenda in swpfagenda" :key="agenda">
              <span class="arrow">→</span> {{ agenda }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
     //  Data Here
    };
  },
  methods: {
    getSummary(){
      this.summary_value=!this.summary_value
    },
    getScheme(){
      this.scheme_value=!this.scheme_value
    },
    ...mapMutations('programs',{
        updateBenefit:'toggleBenefit',
        updatePlan:'togglePlan',
        updateSummary:'toggleSummary',
        updateScheme:'toggleScheme'
    }),
  },
  computed:{
    ...mapGetters('programs',{
        imp_lists:'getImpLists',
        benefit_value:'getBenefit',
        plan_value:'getPlan',
        summary_value:'getSummary',
        scheme_value:'getScheme',
        // get benefit data
        benefits:'getBenefitData',
        // getting plan data
        plans:'getPlanData',
        // Getting summary data 
        summaries:'getSummaryData',
        // getting sheme data
        schemes:'getSchemeData',
        // get SWPF agenda
        swpfagenda:'getSwpfAgenda'
    })
  }
};
</script>
<style>
.implementation-list {
  text-align: left;
  background: white;
  padding: 20px 10px;
  font-size: 22px;
}
.imp-arrow {
  height: 50px;
  width: 50px;
  background: #009550;
  color: white;
  border-radius: 50%;
  text-align: center;
  padding: 0 1px;
}
.sldp-container {
  text-align: left;
}
.sldp-nav-menu ul {
  display: flex;
}
.sldp-nav-menu-list {
  margin-right: 25px;
  font-size: 20px;
  font-weight: bold;
  color: #37517e;
  cursor: pointer;
}
.sldp-obj p {
  font-size: 20px;
  font-weight: bold;
  color: #37517e;
  background: white;
  padding: 40px 60px;
}
.arrow {
  height: 50px;
  width: 50px;
  background: #009550;
  color: white;
  border-radius: 50%;
  text-align: center;
  padding: 0 1px;
}
.benefit ul {
  text-align: left;
  font-size: 18px;
  /* border-bottom: 1px solid gray; */
}
.sldp-brief {
  background: white;
  padding: 50px 10px;
}
.benefit-first {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.benefit-first span {
  font-size: 25px;
  font-weight: bold;
}
.swpf{
  text-align: left;
}
.scheme{
background: white;
padding: 20px;
}
.scheme-head{
   font-size: 20px;
  font-weight: bold;
  color: #37517e;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  
}
.scheme-content{
  font-size: 18px;
}
.swpf-agenda{
  padding: 30px;
  background: white;


}
.swpf-agenda ul{
  font-size: 18px;
  font-weight: bold;
   color: #37517e;
}
</style>
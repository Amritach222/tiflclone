<template>
<div class="app">
  <NavBar/>
  <!-- Home Section -->
  <div>
    <HomeComponent/>
    <OurProjects/>
    <AboutComponent/>
    <SubsidiaryCompany/>
    <CapitalStructure/>
    <BoardDirectors/>
    <OurPrograms/>
    <ContactComp/>
    <FooterComp/>
  </div>
</div>
</template>
<script>
import NavBar from "./components/NavBar.vue"
import HomeComponent from "./components/HomeComponent.vue"
import OurProjects from "./components/OurProjects.vue"
import AboutComponent from "./components/AboutComponent.vue"
import SubsidiaryCompany from "./components/SubsidiaryCompany.vue"
import CapitalStructure from "./components/CapitalStructure.vue"
import BoardDirectors from "./components/BoardDirectors.vue"
import OurPrograms from "./components/OurPrograms.vue"
import ContactComp from "./components/ContactComp.vue"
import FooterComp from "./components/FooterComp.vue"
// import HomeView from "./views/HomeView.vue"
// import HomeComponent from "./components/HomeComponent.vue" 
export default{
  components:{
    // eslint-disable-next-line vue/no-unused-components
    NavBar,
    HomeComponent,
    OurProjects,
    AboutComponent,
    SubsidiaryCompany,
    CapitalStructure,
    BoardDirectors,
    OurPrograms,
    ContactComp,
    FooterComp
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

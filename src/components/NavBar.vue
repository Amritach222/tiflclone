<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border border-bottom">
  <div class="container">
<a class="navbar-brand" href="#"><img v-bind:src="logo" alt="" width="90"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-items" id="navbarSupportedContent" >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  link-text" aria-current="page" href="#"><p class="active">Home</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  link-text" aria-current="page" href="#"><p></p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  link-text" aria-current="page" href="#"><p>Subsidiary Company</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link  link-text" aria-current="page" href="#"><p>Board Of Directors</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-text" aria-current="page" href="#"><p>Our Programs</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-text" aria-current="page" href="#"><p>Contact</p></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
const logo=require('../assets/images/tourism_logo.png')
export default {
   name:'NavBar',
   data(){
       return{
       logo:logo
       }
       
       }
}
</script>
<style>
div.nav-items{
    color:#198754
}
.link-text p{
  font-size: 20px;
  color:#37517e;
  margin-top: 15px;
}
</style>
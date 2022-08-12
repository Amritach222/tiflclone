<template>
<div class="container">
  <div class="row mt-5 home">
      <div class="col-6 home-left">
          <h1 class="home-title">Investment Fund <br> Company</h1>
          <p>Tourism Investment Fund Ltd. main motive is to promote the tourism  industry in Nepal & to express the importance of entrepreneurship to a mass number of people.</p>
          <button class="btn btn-success">Contact </button>
      </div>
      <div class="col-6">
          <img width="600" :src="require('../assets/images/Investment-data.gif')" alt="">
      </div>
  </div>
  </div>
</template>

<script>
export default{
    name:'HomeComponent'
}
</script>
<style>
.home{
    /* height: 100vh; */
   
}
.home-left{
    text-align: left;
    font-size: 22px;
}
.home-title{
    color:#37517e;
    font-weight: bold;
    font-size: 50px;
}
</style>

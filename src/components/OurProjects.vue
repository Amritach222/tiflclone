<template>
    <div class="projects">
        <div class="row flex flex-wrap">
            <div class="col"><img title="Panchase Cable Car & Tourism Limited"  class="project_logo" :src="require('../assets/images/partner_company/panchase-logo.webp')" alt=""></div>
            <div class="col"><img title="Bandipu Cable Car" class="project_logo" :src="require('../assets/images/partner_company/logo.webp')" alt=""></div>
            <div class="col"><img title="Bizbazar" class="project_logo" :src="require('../assets/images/partner_company/biz.webp')" alt=""></div>
        </div>
    </div>
</template>
<script>
export default{
    name:'OurProjects'
}
</script>
<style>
div.projects{
    background: #f3f5fa;
    margin: 10px;
    padding: 20px 0px;
}
.project_logo{
    width: 100px;
    filter: grayscale(100%);
}
.project_logo:hover{
     filter: grayscale(0%);
     transition: all 0.5s ease-out;
}
</style>
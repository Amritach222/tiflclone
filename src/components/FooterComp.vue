<template>
    <div class="footer">

        <div class="container footer-container my-5">
            <div class="support f-content">
                <h3>Customer Support</h3>
                <p>Tourism Investment Fund Limited <br>
                    Sabhagrihachowk Pokhara</p>
                <h5>Phone : +977 9802855608</h5>
            </div>
            
            <div class="links f-content">
                <h3>Useful Lnks</h3>
                <ul>
                    <li> <a href=""> > RKD Holdings</a></li>
                    <li> <a href="">> Bizbazar</a></li>
                    <li> <a href="">> Bandipur Cable Car and Tourism</a></li>
                </ul>
                <h4></h4>
            </div>
            <div class="social f-content">
                <h3>Our Social Networks</h3>
                <p>Get Connected with us</p>
               <span class="socialmedia"><i class="fab fa-facebook-f"></i> &nbsp;&nbsp;&nbsp;<i class="fa fa-instagram" ></i></span>
            </div>
        </div>
        <div class="bottomfooter ">
            <div class="container f-btm">
            <p>© Copyright TIFL</p>
            <p>All Rights Reserved by<span>RKD Holdings</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'FooterComp'
}
</script>
<style>
.footer-container
{
    text-align: left;
    display: flex;
    justify-content: space-between;
}
.f-content{
    font-size: 22px;
    
}
.socialmedia i{
    text-align: center;
    background: #009550;
    height: 50px;
    width: 50px;
    padding-top:15px ;
    border-radius: 50%;
    cursor: pointer;
    color: white;
}
.bottomfooter{
   
    background-color:#37517e;

}
.bottomfooter div{
    height: 100px;
    background-color:#37517e;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.f-btm p{
    color: white;
    font-size: 20px;
    font-weight: bold;

}
</style>
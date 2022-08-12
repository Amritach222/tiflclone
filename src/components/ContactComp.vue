<template>
    <div class="container my-5">
        <div class="contact-container">
            <h1 class="location">Get in Touch</h1>
            <div class="contact-content">
                <div class="contact-left "> 
                    <form action="">
                        <div class="fieldname my-3">
                            <label for="name" class="text-secondary">Name</label>
                        <input type="name" id="name" placeholder="Enter Your Name">
                            <label for="email" class="text-secondary">Email</label>
                        <input type="email" id="email" placeholder="Enter Your Name">
                        </div>
                        <div class="fieldmessage mb-3">
                            <label for="message" class="text-secondary">Message</label>
                        <textarea name="" id="message" cols="30" rows="5" placeholder="Enter Your Message" ></textarea>
                        </div>
                        <input class="submitBtn" type="submit" value="Submit">
                    </form>
                </div>
                <div class="contact-right">
                    <div class="contact-right-left">
                        <div class="tiflcontact">
                            <div class="tiflup">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <h3 class="location">My Location</h3>
                            </div>
                            <div class="tifldown">
                                <p>Tourism Investment Fund Limited <br>
                                    Sabhagrihachowk Pokhara</p>
                            </div>
                        </div>
                         <div class="tiflcontact">
                            <div class="tiflup">
                               <i class="fas fa-mobile-alt"></i>
                            <h3 class="location">Give a Call</h3>
                            </div>
                            <div class="tifldown">
                                <p>+977 9802855608</p>
                            </div>
                        </div>
                         <div class="tiflcontact">
                            <div class="tiflup">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            <h3 class="location">Email</h3>
                            </div>
                            <div class="tifldown">
                                <p>info@tifl.com.np</p>
                            </div>
                        </div>
                    </div>
                     <img :src="require('../assets/images/contact-us.gif')" alt="">
                </div>
            </div>
        </div>
        
    </div>
    <section id="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d439.47957179843513!2d83.9835558!3d28.2122774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21c88f7b4197425a!2sTourism%20Investment%20Fund%20Limited!5e0!3m2!1sen!2snp!4v1650450106676!5m2!1sen!2snp"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
</template>

<style>
.contact-left{
    display: flex;
    flex-direction: row;
    font-size: 22px;
    font-weight: bold;
    flex-wrap: wrap;
}
.contact-content{
    display: flex;
    justify-content: space-between;
}
.fieldname{
    display: flex;
    align-items: center;
}
.fieldname input{
    border: none;
    outline: none;
    margin: 10px;
    padding: 10px;
}
.fieldmessage textarea{
    border: none;
    outline: none;
    width: 100%;
    margin: 10px;
    padding: 10px;
}
.contact-container{
    text-align: left;
}
.contact-right{
    width: 50%;
    display: flex;
    position: relative;
}
.contact-right-left {
    position: absolute;
    z-index: 1;
}
.contact-right img{
    position: relative;
    left: 100px;
    z-index: 0;
}
.tiflup i{
    color:#009550;
    font-size: 30px;
    margin-right: 10px;
}
.tiflup {
    display: flex;
    align-items: center;

}
.tifldown{
    font-size: 22px;
}
.location{
    color:#37517e;
    font-weight: bold;
}
.submitBtn{
    background: #009550;
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid transparent;
}
.submitBtn:hover{
    background:white ;
    color: #009550;
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #009550;
}
</style>
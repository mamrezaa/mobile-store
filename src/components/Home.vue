<template>
  
<div class="container">
  <div class="row">

    <div class="col-sm-4">
      <div class="row"><img class="img-fluid" src="https://img.favpng.com/8/24/2/xiaomi-mi-max-logo-brand-smartphone-png-favpng-QExWJqX8BtPbHCVaNy5wbuRCN.jpg" alt=""></div>
      <div class="row"><img class="img-fluid py-3" src="https://cdn.gooshishop.com/Content/media/uploaded/press/best_samsung_galaxy_m_series-14000609.jpg?preset=WeblogPostDetail" alt=""></div>
      <h2>بهترین لوازم الکترونیکی را از ما بخواهید</h2>
    </div>

    <div class="col-sm-8">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 img-fluid" src="https://etebarkala.com/wp-content/uploads/2021/05/mobile-phones.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src="https://www.chip.de/ii/1/2/6/3/6/1/2/2/7/Apple-iPhone-12-Pro-Max_3-9f0fa86db3a194f8.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/120903-tablets-news-buyer-s-guide-best-tablets-image1-mtkxlp4zjs.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>      
    </div>

  </div>
</div>

<div class="container py-3">
  <div class="row">
    <div class="col-sm-3 bg-secondary"><h2 class="m-auto">بهترین برند های روز بازار</h2></div>
    <div class="col-sm-3"><img class="img-fluid" src="https://www.vesttech.com/wp-content/uploads/2019/10/apple-iphone-logo-png-1.png" alt=""></div>
    <div class="col-sm-3"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Xiaomi-logo.jpg" alt=""></div>
    <div class="col-sm-3"><img class="img-fluid" src="https://i1.wp.com/www.schmidtisblog.de/wp-content/uploads/2019/02/Samsung-Logo.jpg?fit=1200%2C675&ssl=1&is-pending-load=1" alt=""></div>
  </div>
</div>




<div class="container py-3">
  <div class="row bg-danger">

    <div class="col-sm-10">
      <div class="typing">
        <marquee behavior="" direction="rtl"><h2>اینجا کلیک کنید!!</h2></marquee>
      </div>
    <div class="col-sm-2">
      <button class="click-konid"><a href="/Shop" style="text-decoration:none"><h2 class="text-light">اینجا کلیک کنید</h2></a></button>
    </div>
  </div>
  </div>

</div>






</template>

<script>
import {mapGetters} from 'vuex'
//import { Carousel, Slide } from 'vue-carousel';
//import VueCarousel from 'vue-carousel';
//import {mdbvue} from 'mdbvue'


export default {
  name: "CarouselPage",

  

  computed:{
    ...mapGetters(['all_products'])
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
  margin-top: 60px;
}

@font-face {
        font-family: "Byekan";
        src: url("../assets/Byekan.ttf");
      }
      *{
        font-family: "Byekan";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .a-header{
        margin: 0rem 2rem;
        color:white;
      }

      .input-search input,button{
        border: 2px solid black;
        border-radius: 3px;
      }

      .buy{
        width: 10rem;
        height: 4rem;
        margin-left: 1rem;
        border-radius: 0px 0px 10px 0px rgba(40,29,18,0.83);
        border: 1px solid black;
        border-radius: 4px;

      }

     .typing marquee h2{
       color: rgb(240, 231, 231); 
       font-size: 3em;
       margin: 10px 0 0 10px;
       white-space: nowrap;
       overflow: hidden;
       width: 100%;
       animation: animtext 1s steps(80, end); 
       transition: all cubic-bezier(0.1, 0.7, 1.0, 0.1);
     }

    @keyframes animtext { 
     from {
       width: 0;
       transition: all 2s;
    } 
      } 

       

 .click-konid{
   background-color: red;
   color: white;
   width: 14rem;
   height: 4rem;
   border-radius: 5px;
   border: 2px solid black;
   box-shadow: 5px;
 }

 .social-network li{
   margin: 0.5rem 1rem;
 }


 
</style>
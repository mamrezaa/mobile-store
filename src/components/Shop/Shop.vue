<template>
 

<div class="container">
    <div class="row" >
       
        <div  class="col-sm-4" v-for="(product,idx) in all_products" :key="idx">
            <div id="my_card" class="card my-3 my-card"  v-for="(product_x,index) in product" :key="index">
              <img id="my_img" class="card-img-top img-fluid" :src="product_x.src" alt="Card image cap">
              <div class="card-body">
                <h3 class="card-title">{{product_x.name}}</h3>
                <h5 class="card-text">{{product_x.price}}<span> تومان</span></h5>
                <a href="#" class="btn btn-primary" @click="$store.commit('increament',product_x)">افزودن به سبد خرید</a><br>
                 <button v-if="product_x.condition" class="btn btn-primary my-3" data-toggle="modal" data-target="#exampleModal">
                  سبد خرید
                 </button>
              </div>
            </div>
        </div>
    </div>
</div>







</template>

<script>
import {mapGetters} from 'vuex'
export default {
  
  computed:{
    ...mapGetters(['all_products','buy_total'])
  },


 // components:{
  //  Samsung
  //},
    data(){
        return{

        }
    },

    

    

}
</script>

<style>

#my_img{
 min-width: 50%;
}

#my_card{
box-shadow: -2px -1px 7px 0px #1D1A2B;
width: 70%;
min-height: 45%;
}

@media screen and (max-width:420px){
  #my_card{
    margin-right: 50px;
  }
}
</style>
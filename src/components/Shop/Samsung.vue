<template>

<div class="container">
    <div class="row" >
       
        <div class="col-sm-4" v-for="(samsung,idx) in all_products[0]" :key="idx">
            <div id="my_card" class="card my-3" style="width: 20rem;">
              <img class="card-img-top img-fluid" :src="samsung.src" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{samsung.name}}</h5>
                <p class="card-text">{{samsung.price}}</p>
                <a href="#" class="btn btn-primary"  @click="$store.commit('increament',samsung)">افزودن به سبد خرید</a>
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

  data(){
    return{
      
    }
  }


}
</script>

<style>
#my_card{
  box-shadow: -2px -1px 7px 0px #1D1A2B;

}

</style>
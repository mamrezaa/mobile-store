<template>

<div class="container">
    <div class="row" >
       
        <div class="col-sm-4" v-for="(product,idx) in all_products[3]" :key="idx">
            <div id="my_card" class="card my-3" style="width: 20rem;">
              <img class="card-img-top img-fluid" :src="product.src" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.price}}</p>
                <a href="#" class="btn btn-primary"  @click="$store.commit('increament',product)">افزودن به سبد خرید</a>
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
    }

}
</script>

<style>
#my_card{
    box-shadow: -2px -1px 7px 0px #1D1A2B;

}

</style>
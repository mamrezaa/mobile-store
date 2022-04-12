
const state = {
    buy_total:0,
    buy_total_:0,
    cards:[],
    cards_:[]    
 
}


const getters = {
    buy_total: (state) => state.buy_total,
    buy_total_:(state) => state.buy_total_,
    cards: (state) => state.cards,
    cards_: (state) => state.cards_,
    condition: (state) => state.condition,
}

const mutations = {
    increament(state,product_x){
        if(product_x.count === 0 ){

            

            product_x.condition = true

            state.buy_total = state.buy_total + parseInt(product_x.price.replace(/\D/g,''))
            //state.buy_total = state.buy_total.toLocalString()

            product_x.count = product_x.count + 1
            product_x.x.push(product_x.count)

            product_x.item_total = parseInt(product_x.price.replace(/\D/g,''))

            product_x.item_total = Intl.NumberFormat().format(product_x.item_total)
            state.cards.push(product_x)
            
            
             //state.cards[state.cards.length - 1].price = Intl.NumberFormat().format(state.cards[state.cards.length - 1].price)

            //console.log(state.cards[0].indexOf())
            state.buy_total_ = Intl.NumberFormat().format(state.buy_total)

           


            localStorage.setItem('list-mobile',JSON.stringify(this.cards))
        }

        else{
            product_x.count++
            product_x.x.push(product_x.count)
            
            
            //console.log(product_x.price + 'issss')

            product_x.item_total = parseInt(product_x.price.replace(/\D/g,'')) * product_x.count

            state.buy_total = state.buy_total + parseInt(product_x.price.replace(/\D/g,''))
            state.buy_total_ = Intl.NumberFormat().format(state.buy_total)


            //state.buy_total = Intl.NumberFormat().format(state.buy_total)

            //state.cards.count.push(product_x.count)
            product_x.item_total = Intl.NumberFormat().format(product_x.item_total)

            state.cards[0].x.push(product_x.count)
            state.cards[0].item_total.push(product_x.item_total)

            

            //state.cards[state.cards.length - 1].price = typeof Number
            //state.cards[state.cards.length - 1].price = Intl.NumberFormat().format(Number(state.cards[state.cards.length - 1].price))


            console.log(state.cards[1])
            console.log(product_x)
            //state.cards.count.push(state.cards.count)

        }
        

    },

    mychange(state,card){
        //card.x.push(card.count)
        //console.log(card.x)
        
        state.condition = false

        card.x.push(card.count)
        card.item_total = card.count * parseInt(card.price.replace(/\D/g,''))
        card.item_total = Intl.NumberFormat().format(card.item_total)

        console.log(card.x[card.x.length - 2])
        state.buy_total = state.buy_total + (parseInt(card.item_total.replace(/\D/g,'')) - ( parseInt(card.price.replace(/\D/g,'')) * card.x[card.x.length - 2]))
        state.buy_total_ = Intl.NumberFormat().format(state.buy_total)

        //card.cards[card.cards.length - 1].x.push(card.cards[card.cards.length - 1].count)
        //card.cards[card.cards.length - 1].item_total =  card.cards[card.cards.length - 1].price *  card.cards[card.cards.length - 1].count
        //state.buy_total = state.buy_total + (card.cards[card.cards.length - 1].item_total - (card.cards[card.cards.length - 1].price *  card.cards[card.cards.length - 1].x[card.cards[card.cards.length - 1].x.length - 1]))
        
        //console.log(card.cards[card.cards.length - 1].x[card.cards[card.cards.length - 1].x.length - 1])
        //console.log(card.cards[card.cards.length - 1].item_total)
          
    },

    remove_all_card(state){
        if(confirm("آیا مطمثن هستید؟")){

            
            
            state.cards.splice(0,state.cards.length)

            state.buy_total = 0
            state.buy_total_ = Intl.NumberFormat().format(state.buy_total)

    
            for(var i = 0 ; i< state.products.length; i++){
              state.products[i].condition = false
              state.products[i].count = parseInt('')
              state.products[i].item_total = 0
              state.products[i].x = []
            }
          }
          //console.log(state.products[i].condition)

    },

    remove_card(state,index){
        if(confirm("آیا مطمئن هستید؟")){
            state.cards[index].count = 0

            state.buy_total = state.buy_total - parseInt(state.cards[index].item_total.replace(/\D/g,''))
            state.buy_total_ = Intl.NumberFormat().format(state.buy_total)

            console.log('index is :'+index)
            state.cards.splice(index,1)
            state.products[index].condition = false
            state.products[index].count = parseInt('')
            state.products[index].total_item = 0
            state.products[index].x = []
          }
    }

    
}

const actions = {
   // increament({commit},product_x){
     //   commit('increament',product_x)
       // console.log(this.increament)
    //}
    
}

export default {
    state,
    getters,
    mutations,
    actions
}
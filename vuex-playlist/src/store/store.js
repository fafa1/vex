import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict:true, // nao sei pra que serve
    state:{
    products:[
        {name: 'Banana Skin,', price: 20},
        {name: 'shiny start,', price: 40},
        {name: 'Imac,', price: 60},
        {name: 'Red Shell,', price: 80}
      ]
    },

    getters:{
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                name: '**'+ product.name + '**',
                price: product.price/2
                }
                
            })
            return saleProducts
        }
    },

    mutations: {
        reducePrice: state => {            
             let reducePrice = state.products.forEach(product => {
                    product.price -= 1
                });
            
        } 
    },

    actions:{
        reducePrice: context => {
            setTimeout(function(){
                context.commit('reducePrice') // agindo em cima do mutations
            },2000)
        }
    }

})
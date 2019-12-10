import JWTDecode from 'jwt-decode';
import cookieparser from 'cookieparser';
import {db} from '@/services/firebase';
export const state = () => ({
    products:[],
    pedidoActual:[],
    pedidos:[],
    editproducto:{}
}) 
export const mutations={
    SET_PRODUCTS(state, listproducts){
        console.log("si se hizo la asignacion de productos")
        state.products= listproducts
    },
    SET_PEDIDOACTUAL(state, meal){
        state.pedidoActual.push(meal)
    },
    UPDATE_PEDIDO(state,newValue){
        state.pedidoActual = newValue
    },
    SET_PEDIDOS(state,listpedidos){
        state.pedidos=listpedidos
    },
    SET_EDITARPRODUCTO(state,editproduct){
        state.editproducto=editproduct
    },
    DELETE_MEAL(state,index){
        state.pedidoActual.splice(index,1)
    }
}
export const actions={
    async nuxtServerInit({commit},{req}){
        let listproducts=[]
         await db.collection("productos").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                listproducts.push(Object.assign({}, doc.data(), { id: doc.id}))
            })
        })
        commit("SET_PRODUCTS", listproducts)
        let listpedidos=[]
         await db.collection("pedidos").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                listpedidos.push(Object.assign({}, doc.data(), { idfirebase: doc.id}))
            })
        })
        commit("SET_PEDIDOS", listpedidos)
        if(process.server && process.static) return;
        if(!req.headers.cookie) return;
        const parsed = cookieparser.parse(req.headers.cookie)
        const accessTokenCookie= parsed.access_token;
        if(!accessTokenCookie)return;

        const decoded= JWTDecode(accessTokenCookie);
        if(decoded){
            commit("users/SET_USER", {
                uid: decoded.user_id,
                email:decoded.email
            })
        }
        
    },
    addToOrder({commit},meal){
        commit("SET_PEDIDOACTUAL",meal)
    },
    deleteMeal({commit}, index){
        commit("DELETE_MEAL",index)
    }
    
}
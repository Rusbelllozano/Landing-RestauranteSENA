import JWTDecode from 'jwt-decode';
import cookieparser from 'cookieparser';
import {db} from '@/services/firebase';
export const state = () => ({
    products:[],
    pedido:[]
}) 
export const mutations={
    SET_PRODUCTS(state, listproducts){
        state.products= listproducts
    },
    SET_PEDIDO(state, meal){
        state.pedido.push(meal)
    }
}
export const actions={
    async nuxtServerInit({commit},{req}){
        if(process.server && process.static) return;
        if(!req.headers.cookie) return;
        const parsed = cookieparser.parse(req.headers.cookie)
        const accessTokenCookie= parsed.access_token;
        if(!accessTokenCookie)return;

        const decoded= JWTDecode(accessTokenCookie);
        if(decoded){
            console.log(decoded)
            commit("users/SET_USER", {
                uid: decoded.user_id,
                email:decoded.email
            })
        }
        let listproducts=[]
         await db.collection("productos").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                listproducts.push(doc.data());
            })
        })
        commit("SET_PRODUCTS", listproducts)
    },
    addToOrder({commit},meal){
        commit("SET_PEDIDO",meal)
    }
    
}
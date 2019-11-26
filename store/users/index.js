import {auth} from "@/services/firebase"
import Cookie from "js-cookie"
export const state = () => ({
    user:null
}) 
export const mutations={
    SET_USER : (state, account)=>{
        state.user = account
    }
}
export const action = {
    async login({commit}, account){
        await auth.signInWithEmailAndPassword(account.email, account.password)
        const token = await auth.currentUser.getIdToken();
        Cookie.set('access_token', token);
    }
}
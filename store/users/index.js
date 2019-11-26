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
export const actions = {
    async login({commit}, account){
       
        try {
            await auth.signInWithEmailAndPassword(account.usermail, account.userpassword)
            //GET JWT from Firebase
            const token = await auth.currentUser.getIdToken();
            const {email,uid} = auth.currentUser
            //SET JWT to Cookie
            Cookie.set('access_token', token);
            //SET ther USER locally
            commit("SET_USER", {email, uid})

            this.$router.push("/admin/pedidos") 
        } catch (error) {
            throw error;
        } //lOGIN USER
        
    }
    
    
}
export default function({store, route, redirect}) {
    const user = store.state.users.user;
    const blockedRoute1= /\/pedidos\/*/g;
    const blockedRoute2= /\/productos\/*/g;

    if(!user && (route.path.match(blockedRoute1) || route.path.match(blockedRoute2))){
        redirect("/admin")
    }
}
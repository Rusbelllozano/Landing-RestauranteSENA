import cookieparser from 'cookieparser';
export default function({store, route, redirect}) {
    const parsed = cookieparser.parse(req.headers.cookie)
        const accessTokenCookie= parsed.access_token;
    const user = store.state.users.user;
    const blockedRoute1= /\/pedidos\/*/g;
    const blockedRoute2= /\/productos\/*/g;
    const blockedRoute3= /\/caja\/*/g;
    const blockedRoute4= /\/cocina\/*/g;
    if(!accessTokenCookie || !user && (route.path.match(blockedRoute1) || route.path.match(blockedRoute2)|| route.path.match(blockedRoute3)|| route.path.match(blockedRoute4))){
        redirect("/admin")
    }
}
import {CHAT_ROUTER, LOGIN_ROUTER} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRouts = [
    {
        path: LOGIN_ROUTER,
        component: Login
    }
]

export const privateRouts = [
    {
        path: CHAT_ROUTER,
        component: Chat
    }
]
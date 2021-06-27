import {CHAT_ROUTER, LOGIN_ROUTER} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRouts = [
    {
        url: LOGIN_ROUTER,
        component: Login
    }
]

export const privateRouts = [
    {
        url: CHAT_ROUTER,
        component: Chat
    }
]
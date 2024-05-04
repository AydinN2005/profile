import {routes} from "./types";
import {FaRegUser} from "react-icons/fa6";
import {CiWallet} from "react-icons/ci";
import {AiOutlineSafety} from "react-icons/ai";
import {IoLogOutOutline} from "react-icons/io5";
import {checkUser} from "../../utils/checkUser";

let links: routes[] = [
    {
        id: 1,
        title: checkUser() ? "edit profile" : "set profile",
        route: '/editProfile',
        Icon: FaRegUser,
        iconColor: 'white'
    },
    {
        id: 2,
        title: "payment",
        Icon: CiWallet,
        iconColor: 'white'
    },
    {
        id: 3,
        title: "security",
        Icon: AiOutlineSafety,
        iconColor: 'white'
    },
]

const userStatus = checkUser()
if (userStatus) {
    links.push({
        id: 4,
        title: "logout",
        Icon: IoLogOutOutline,
        iconColor: 'red'
    })
}

export {
    links
}
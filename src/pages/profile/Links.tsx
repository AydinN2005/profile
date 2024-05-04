import React, {useState} from 'react';
import {links} from "./data";
import {routes} from "./types";
import ProfileLink from "./ProfileLink";
import styles from './styles.module.css'
import {IoLogOutOutline} from "react-icons/io5";
import {IconType} from "react-icons";
import {checkUser} from "../../utils/checkUser";

function Links() {
    const logoutData: { id: number; title: string; Icon: IconType; iconColor: string } = {
        id: 4,
        title: "logout",
        Icon: IoLogOutOutline,
        iconColor: 'red'
    }
    return (
        <div className={`grid grid-cols-1 gap-6 mt-10 ${styles.linksContainer}`}>
            {
                links.map((link: routes) => (
                    <ProfileLink key={link.id} Icon={link.Icon} iconColor={link.iconColor} title={link.title}
                                 route={link.route}/>
                ))
            }
            {
                checkUser() ? <ProfileLink title={logoutData.title} Icon={logoutData.Icon}
                                           iconColor={logoutData.iconColor}/> : null
            }
        </div>
    );
}

export default Links;
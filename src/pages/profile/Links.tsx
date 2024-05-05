import React, {useState} from 'react';
import {routes} from "./types";
import ProfileLink from "./ProfileLink";
import styles from './styles.module.css'
import {IoLogOutOutline} from "react-icons/io5";
import {IconType} from "react-icons";
import {checkUser} from "../../utils/checkUser";
import {FaRegUser} from "react-icons/fa6";
import {CiWallet} from "react-icons/ci";
import {AiOutlineSafety} from "react-icons/ai";
import {useTranslation} from "react-i18next";

function Links() {
    const {t} = useTranslation()
    let links: routes[] = [
        {
            id: 1,
            title: checkUser() ? t('editProfile') : t('setProfile'),
            route: '/editProfile',
            Icon: FaRegUser,
            iconColor: 'white'
        },
        {
            id: 2,
            title: t('payment'),
            Icon: CiWallet,
            iconColor: 'white'
        },
        {
            id: 3,
            title: t('security'),
            Icon: AiOutlineSafety,
            iconColor: 'white'
        },
    ]
    const logoutData: { id: number; title: string; Icon: IconType; iconColor: string } = {
        id: 4,
        title: t('logOut'),
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
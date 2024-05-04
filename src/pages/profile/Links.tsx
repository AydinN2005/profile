import React from 'react';
import {links} from "./data";
import {routes} from "./types";
import ProfileLink from "./ProfileLink";
import styles from './styles.module.css'

function Links() {
    return (
        <div className={`grid grid-cols-1 gap-6 mt-10 ${styles.linksContainer}`}>
            {
                links.map((link: routes) => (
                    <ProfileLink key={link.id} Icon={link.Icon} iconColor={link.iconColor} title={link.title}
                                 route={link.route}/>
                ))
            }
        </div>
    );
}

export default Links;
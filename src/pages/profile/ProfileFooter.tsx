import React from 'react';
import styles from './styles.module.css'
import { FaLocationArrow } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
function ProfileFooter() {
    return (
        <div className={`flex flex-col w-full ${styles.profileFooter}`}>
            <div className={`flex items-center justify-center w-full relative`}>
                <div className={`flex items-center ${styles.profileFooterBtn}`}>
                    <FaLocationArrow size={28} color={'black'}/>
                </div>
            </div>
            <div className={'flex items-center w-full justify-end'}>
                <div className={`flex flex-col items-center ${styles.profileFooterLink}`}>
                    <FaUser size={24} color={'#4285F4'}/>
                    <span className={'text-xs font-normal'}>
                        profile
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileFooter;
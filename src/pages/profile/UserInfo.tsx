import React from 'react';
import UserImage from '../../assets/images/avatar.png'
import styles from './styles.module.css'
import {formData} from "../edit profile/types";

function UserInfo() {
    const storageData: string | null = localStorage.getItem('user_profile')
    const userData: formData = JSON.parse(typeof storageData === 'string' ? storageData : '')
    return (
        <div className={'flex flex-col items-center w-full'}>
            <img className={styles.userProfile} src={UserImage} alt=""/>
            <div className={'flex flex-col items-center'}>
                <h2 className={'text-2xl font-bold mt-6'}>
                    {userData.username}
                </h2>
                <h3 className={'text-sm font-normal mt-1'}>
                    {userData.email}
                </h3>
            </div>
        </div>
    );
}

export default UserInfo;
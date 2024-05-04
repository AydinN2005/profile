import React from 'react';
import UserImage from '../../assets/images/userImage.png'
import styles from './styles.module.css'

function UserInfo() {
    return (
        <div className={'flex flex-col items-center w-full'}>
            <img className={styles.userProfile} src={UserImage} alt=""/>
            <div className={'flex flex-col items-center'}>
                <h2 className={'text-2xl font-bold mt-6'}>
                    fateme hosseini
                </h2>
                <h3 className={'text-sm font-normal mt-1'}>
                    fateme@gmail.com
                </h3>
            </div>
        </div>
    );
}

export default UserInfo;
import React from 'react';
import styles from './styles.module.css'
import {logoutModal} from "./types";
import {useTranslation} from "react-i18next";

function LogoutModal({cancel, accept}: logoutModal) {
    const {t} = useTranslation()
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <span className={`text-xl font-normal ${styles.logoutText}`}>
                    {t('logOut')}
                </span>
            </div>
            <p className={'text-base font-medium mt-4 mb-20'}>
                {t('logoutText')}
            </p>
            <div className={'flex flex-col'}>
                <button className={`baseBtn cancelBtn`} onClick={cancel}>
                    {t('logoutCancel')}
                </button>
                <button className={`baseBtn acceptBtn`} onClick={accept}>
                    {t('logoutAccept')}
                </button>
            </div>
        </>
    );
}

export default LogoutModal;
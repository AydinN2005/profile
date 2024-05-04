import React from 'react';
import styles from './styles.module.css'
import {logoutModal} from "./types";

function LogoutModal({cancel, accept}: logoutModal) {
    return (
        <>
            <div className="flex flex-col items-center w-full">
                <span className={`text-xl font-normal ${styles.logoutText}`}>
                    log out
                </span>
            </div>
            <p className={'text-base font-medium mt-4 mb-20'}>
                are you sure you want to log out ?
            </p>
            <div className={'flex items-center justify-between'}>
                <button className={`baseBtn cancelBtn`} onClick={cancel}>
                    cancel
                </button>
                <button className={`baseBtn acceptBtn`} onClick={accept}>
                    yes, log out
                </button>
            </div>
        </>
    );
}

export default LogoutModal;
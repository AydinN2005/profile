import React from 'react';
import styles from './styles.module.css'
import {notificationType} from "./types";
import info from './icons/info.svg'
import success from './icons/success.svg'
import error from './icons/error.svg'
import warning from './icons/warning.svg'
import closeIcon from './icons/close.svg'

function Notification({type, message, active, close}: notificationType) {
    const color: string = type === 'error' ? '#EB5757' : type === 'warning' ? '#F2C94C' : type === 'success' ? '#6FCE96' : '#2196F3'
    return (
        <div
            className={`flex items-center ${styles.notifCard} ${active ? styles.notifActive : styles.notifDisable}`}
            style={{boxShadow: `0px 0px 10px 0px ${color}`}}
        >
            {type === 'info' && <img width={24} height={24} src={info} alt=""/>}
            {type === 'error' && <img width={24} height={24} src={error} alt=""/>}
            {type === 'success' && <img width={24} height={24} src={success} alt=""/>}
            {type === 'warning' && <img width={24} height={24} src={warning} alt=""/>}
            <h3 className={`text-sm font-normal ${styles.notifMessage}`}>
                {message}
            </h3>
            <img src={closeIcon} onClick={close} alt=""/>
        </div>
    );
}

export default Notification;
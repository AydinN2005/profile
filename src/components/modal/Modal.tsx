import React from 'react';
import styles from './styles.module.css'
import {IProps} from "./types";
import {useNavigate} from "react-router-dom";

function Modal({active, children}: IProps) {
    return (
        <div className={`${styles.modal} flex flex-col ${active ? styles.activeModal : styles.disableModal}`}>
            <div className={`${styles.line}`}></div>
            {children}
        </div>
    );
}

export default Modal;
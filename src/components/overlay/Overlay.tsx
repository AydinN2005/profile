import React from 'react';
import {IProps} from "./types";
import styles from './styles.module.css'

function Overlay({active, children}: IProps) {
    return (
        <div className={styles.overlay} style={active ? {zIndex: 999, opacity: 1} : {zIndex: -3, opacity: 0}}>
            {children}
        </div>
    );
}

export default Overlay;
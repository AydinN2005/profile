import React from 'react';
import {inputTypes} from "./types";
import styles from "./styles.module.css";

function SelectInput({
                         name,
                         id,
                         Icon,
                         changed,
                         value,
                         children
                     }: Omit<inputTypes<HTMLSelectElement>, 'dateChanged' | 'type' | 'placeholder'>) {
    return (
        <div className={'flex items-center'}>
            <select
                name={name}
                id={id}
                onChange={changed}
                value={value}
                className={styles.input}>
                {children}
            </select>
            <div className={styles.icon}>
                {Icon ? <Icon size={24} color={'white'}/> : null}
            </div>
        </div>
    );
}

export default SelectInput;
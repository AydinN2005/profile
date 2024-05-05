import React from 'react';
import styles from './styles.module.css'
import {inputTypes} from "./types";


function Input({type, name, id, placeholder, Icon, changed, value}: inputTypes<HTMLInputElement>) {
    const handleClick = function (): void {
        if (type === 'date') {
            const dateInput: HTMLDataElement = document.getElementById('dateInput') as HTMLInputElement
            dateInput.click()
            console.log('slm')
        }
    }
    return (
        <>
            <div className={`relative w-full ${styles.input}`}>
                <input type={type === 'date' ? 'text' : type} name={name} id={id} placeholder={placeholder}
                       style={Icon ? {paddingRight: '40px'} : {}}
                       value={value}
                       onChange={changed}
                       readOnly={type === 'date'}
                />
                {
                    type === 'date' ? <input className={styles.dateInput} type="date" name="" id="dateInput" onChange={changed}/> : null
                }
                <div className={styles.icon} onClick={handleClick}>
                    {Icon ? <Icon size={24} color={'white'}/> : null}
                </div>
            </div>
        </>
    );
}

export default Input;
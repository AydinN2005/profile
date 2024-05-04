import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {inputTypes, Value} from "./types";
import Modal from "../modal/Modal";
import Overlay from "../overlay/Overlay";
import Calendar from 'react-calendar';


function Input({type, name, id, placeholder, Icon, changed, value, dateChanged}: inputTypes<HTMLInputElement>) {
    const [showDate, setShowDate] = useState<boolean>(false);
    const [selected, onChange] = useState<Value>(new Date());
    const selectedDate = `your selected date : ${selected?.toLocaleString()}`
    const handleClick = function (): void {
        if (type === 'date') {
            setShowDate(!showDate)
        }
    }
    useEffect(() => {
        if (selected) {
            dateChanged(selected)
        }
    }, [selected]);

    return (
        <>
            <div className={`relative w-full ${styles.input}`}>
                {
                    type !== 'date' ?
                        <input type={type} name={name} id={id} placeholder={placeholder}
                               style={Icon ? {paddingRight: '40px'} : {}}
                               value={value}
                               onChange={changed}
                        />
                        : <input type={'text'} name={name} id={id} style={{paddingRight: '40px'}}
                                 value={value ? value.toLocaleString().split(',')[0] : 'mm/dd/yyyy'}/>
                }
                <div className={styles.icon} onClick={handleClick}>
                    {Icon ? <Icon size={24} color={'white'}/> : null}
                </div>
            </div>
            <Overlay active={showDate}>
                <Modal active={showDate}>
                    <div className={'flex flex-col w-full'}>
                        <Calendar onChange={onChange} value={selected}/>
                        <p className={'my-4 text-sm'}>
                            {selectedDate.split(',')[0]}
                        </p>
                        <div onClick={handleClick} className="baseBtn acceptBtn mt-4 self-end text-center">
                            done
                        </div>
                    </div>
                </Modal>
            </Overlay>
        </>
    );
}

export default Input;
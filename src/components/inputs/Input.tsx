import React, {useEffect, useState} from 'react';
import styles from './styles.module.css'
import {inputTypes} from "./types";
import Modal from "../modal/Modal";
import Overlay from "../overlay/Overlay";
import {format} from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';


function Input({type, name, id, placeholder, Icon, changed, value, dateChanged}: inputTypes<HTMLInputElement>) {
    const [showDate, setShowDate] = useState<boolean>(false);
    const [selected, setSelected] = useState<Date>();
    let footer: React.ReactNode = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
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
                                 value={value ? value : 'mm/dd/yyyy'}/>
                }
                <div className={styles.icon} onClick={handleClick}>
                    {Icon ? <Icon size={24} color={'white'}/> : null}
                </div>
            </div>
            <Overlay active={showDate}>
                <Modal active={showDate}>
                    <div className={'flex flex-col w-full'}>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                            className={'flex justify-center items-center'}
                        />
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
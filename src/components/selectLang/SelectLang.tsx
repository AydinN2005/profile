import React, {useState, useEffect} from 'react';
import styles from './styles.module.css'
import {IoIosArrowDown} from "react-icons/io";
import {changeLanguage} from "../../utils/i18n";
import i18n from "../../utils/i18n";


function SelectLang() {
    const currentLanguage = i18n.language;
    const [cHeight, setCHeight] = useState<string>('0px');
    const [showBox, setShowBox] = useState<boolean>(false);
    type langType = { id: number; title: string }
    const [selected, setSelected] = useState<string>('en');
    useEffect(() => {
        setSelected(currentLanguage)
    }, []);
    const langItems: langType[] = [
        {
            id: 1,
            title: 'en'
        },
        {
            id: 2,
            title: 'fr'
        }
    ]

    const handleSelectLang = function (lang: string): void {
        setSelected(lang)
        changeLanguage(lang)
    }
    const handleClick = () => {
        setShowBox(!showBox)
        if (showBox) {
            setCHeight('77px')
        } else {
            setCHeight('0px')
        }
    }
    return (
        <div className={`relative flex items-center ${styles.langBox}`} onClick={handleClick}>
            <span className={'text-sm font-normal'}>
                {selected}
            </span>
            <IoIosArrowDown style={showBox ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}} size={18}
                            color={'white'}
                            className={'ml-4'}/>
            <div className={`${styles.langBoxItems} grid grid-cols-1 overflow-hidden`} style={{height: cHeight}}>
                {langItems.map((item: langType) => {
                    return (
                        <span className={`${styles.langBoxItem}`} key={item.id} onClick={() => {
                            handleSelectLang(item.title)
                        }}>
                            {item.title}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default SelectLang;
import React, {useState} from 'react';
import {profileLinks} from "./types";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Overlay from "../../components/overlay/Overlay";
import styles from "../../components/modal/styles.module.css";
import LogoutModal from "./LogoutModal";
import {useTranslation} from "react-i18next";

function ProfileLink({Icon, route, iconColor, title}: profileLinks) {
    const {t} = useTranslation()
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleShow = function (): void {
        setShow(true)
    }
    const handleLogout = function (): void {
        localStorage.removeItem('user_profile')
        setShow(false)
        navigate(0)
    }
    const handleCancel = function (): void {
        setShow(false)
    }
    return (
        <>
            <div onClick={title === t('logOut') ? handleShow : () => {
            }}>
                <Link to={route ? route : '#'} className={'flex items-center'}>
                    <Icon size={24} color={iconColor}/>
                    <span className={'text-lg ml-6'} style={{color: iconColor}}>
                        {title}
                    </span>
                </Link>
            </div>
            <Overlay active={show}>
                <Modal active={show}>
                    <LogoutModal cancel={handleCancel} accept={handleLogout}/>
                </Modal>
            </Overlay>
        </>
    );
}

export default ProfileLink;
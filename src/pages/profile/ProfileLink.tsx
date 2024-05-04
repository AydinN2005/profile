import React, {useState} from 'react';
import {profileLinks} from "./types";
import {Link} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import Overlay from "../../components/overlay/Overlay";
import styles from "../../components/modal/styles.module.css";
import LogoutModal from "./LogoutModal";

function ProfileLink({Icon, route, iconColor, title}: profileLinks) {
    const [show, setShow] = useState<boolean>(false);
    const handleLogout = function (): void {
        setShow(true)
    }
    const handleCancel = function (): void {
        setShow(false)
    }
    return (
        <>
            <div onClick={title === 'logout' ? handleLogout : () => {
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
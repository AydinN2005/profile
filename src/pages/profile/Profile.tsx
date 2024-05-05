import React, {useEffect, useState} from 'react';
import UserInfo from "./UserInfo";
import Links from "./Links";
import ProfileFooter from "./ProfileFooter";
import {checkUser} from "../../utils/checkUser";
import {useTranslation} from 'react-i18next';
import SelectLang from "../../components/selectLang/SelectLang";

function Profile() {
    const {t} = useTranslation()
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        setLoggedIn(checkUser())
    }, []);

    return (
        <div className={'flex flex-col'}>
            <div className={'flex items-center justify-between w-full'}>
                <h1 className={'text-2xl font-bold'}>
                    {t('Profile')}
                </h1>
                <SelectLang />
            </div>
            {
                loggedIn ? <UserInfo/> :
                    <span className={'text-sm italic block mt-10'}>{t('notSetInformation')}</span>
            }
            <Links/>
            <div className={'fixed bottom-0 left-0 w-full'}>
                <ProfileFooter/>
            </div>
        </div>
    );
}

export default Profile;
import React, {useEffect, useState} from 'react';
import UserInfo from "./UserInfo";
import Links from "./Links";
import ProfileFooter from "./ProfileFooter";
import {checkUser} from "../../utils/checkUser";

function Profile() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        setLoggedIn(checkUser())
    }, []);

    return (
        <div className={'flex flex-col'}>
            <h1 className={'text-2xl font-bold'}>
                profile
            </h1>
            {
                loggedIn ? <UserInfo/> :
                    <span className={'text-sm italic block mt-10'}>No information has been entered yet</span>
            }
            <Links/>
            <div className={'fixed bottom-0 left-0 w-full'}>
                <ProfileFooter/>
            </div>
        </div>
    );
}

export default Profile;
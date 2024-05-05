import React from 'react';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";
import EditProfileForm from "./EditProfileForm";
import {useTranslation} from "react-i18next";
import SelectLang from "../../components/selectLang/SelectLang";

function EditProfile() {
    const {t} = useTranslation()
    return (
        <div className={'flex flex-col'}>
            <div className={'flex items-center w-full justify-between'}>
                <Link to={'/'} className={'flex items-center'}>
                    <FaArrowLeft className={'mt-1'} color={'white'} size={24}/>
                    <h1 className={'text-2xl font-bold ml-3'}>
                        {t('editProfile')}
                    </h1>
                </Link>
                <SelectLang/>
            </div>
            <EditProfileForm/>
        </div>
    );
}

export default EditProfile;
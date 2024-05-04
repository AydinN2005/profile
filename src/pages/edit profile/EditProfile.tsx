import React from 'react';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";
import EditProfileForm from "./EditProfileForm";

function EditProfile() {
    return (
        <div className={'flex flex-col'}>
            <Link to={'/'} className={'flex items-center'}>
                <FaArrowLeft className={'mt-1'} color={'white'} size={24}/>
                <h1 className={'text-2xl font-bold ml-3'}>
                    edit profile
                </h1>
            </Link>
            <EditProfileForm />
        </div>
    );
}

export default EditProfile;
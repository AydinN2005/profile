import React, {useEffect, useState} from 'react';
import Input from "../../components/inputs/Input";
import {CgCalendarDates} from "react-icons/cg";
import {MdOutlineMailOutline} from "react-icons/md";
import {formData} from "./types";
import SelectInput from "../../components/inputs/SelectInput";
import Notification from "../../components/notification/Notification";
import {useNavigate} from "react-router-dom";
import {checkUser} from "../../utils/checkUser";
import {useTranslation} from "react-i18next";

function EditProfileForm() {
    const {t} = useTranslation()
    const [notif, setNotif] = useState<{ message: string; type: string; active: boolean }>({
        message: "",
        type: '',
        active: false,
    });
    const [formData, setFormData] = useState<formData>(
        {
            username: '',
            fullName: '',
            birthday: '',
            email: '',
            gender: "other",
            phoneNumber: ''
        }
    );
    useEffect(() => {
        if (localStorage.getItem('user_profile')) {
            const storageData: string | null = localStorage.getItem('user_profile')
            const userData: formData = JSON.parse(typeof storageData === 'string' ? storageData : '')
            setFormData({
                birthday: userData.birthday,
                phoneNumber: userData.phoneNumber,
                gender: userData.gender,
                username: userData.username,
                email: userData.email,
                fullName: userData.fullName
            })
        }
    }, []);

    const navigate = useNavigate();
    const handleSubmit = function (e: React.FormEvent) {
        e.preventDefault()
        if (formData.username === '') {
            setNotif({
                active: true,
                message: t('fillUsername'),
                type: 'error'
            })
        } else if (formData.fullName === '') {
            setNotif({
                active: true,
                message: t('fillFullName'),
                type: 'error'
            })
        } else if (formData.email === '') {
            setNotif({
                active: true,
                message: t('fillEmail'),
                type: 'error'
            })
        } else if (formData.birthday === '') {
            setNotif({
                active: true,
                message: t('fillBirthday'),
                type: 'error'
            })
        } else if (formData.gender === '') {
            setNotif({
                active: true,
                message: t('fillGender'),
                type: 'error'
            })
        } else if (formData.phoneNumber === '') {
            setNotif({
                active: true,
                message: t('fillPhonenumber'),
                type: 'error'
            })
        } else {
            setNotif({
                active: true,
                message: t('updated'),
                type: 'success'
            })
            localStorage.setItem('user_profile', JSON.stringify(formData))
            navigate('/')
        }
    }
    return (
        <form action="" className={'grid grid-cols-1 gap-6 mt-10'} onSubmit={handleSubmit}>
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, username: e.target.value})
                }}
                value={formData.username}
                type={"text"}
                name={'username'}
                id={'username'}
                placeholder={t('username')}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, fullName: e.target.value})
                }}
                value={formData.fullName}
                type={"text"}
                name={'fullName'}
                id={'fullName'}
                placeholder={t('fullName')}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, birthday: e.target.value})
                }}
                value={formData.birthday}
                type={"date"}
                name={'birthDate'}
                id={'birthDate'}
                placeholder={t('birthday')}
                Icon={CgCalendarDates}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, email: e.target.value})
                }}
                value={formData.email}
                type={"email"}
                name={'email'}
                id={'email'}
                placeholder={t('email')}
                Icon={MdOutlineMailOutline}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, phoneNumber: e.target.value})
                }}
                value={formData.phoneNumber}
                type={"text"}
                name={'phone'}
                id={'phone'}
                placeholder={t('phoneNumber')}
            />
            <SelectInput
                changed={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFormData({...formData, gender: e.target.value})
                }}
                value={formData.gender}
                name={'gender'}
                id={'gender'}
            >
                <option value="other">{t('other')}</option>
                <option value="male">{t('male')}</option>
                <option value="female">{t('female')}</option>
            </SelectInput>
            <button className={'baseBtn acceptBtn'} type={'submit'}>
                {t('update')}
            </button>
            <Notification message={notif.message} type={notif.type} active={notif.active} close={() => {
                setNotif({...notif, active: false})
            }}/>
        </form>
    );
}

export default EditProfileForm;
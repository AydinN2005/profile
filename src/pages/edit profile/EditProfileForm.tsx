import React, {useEffect, useState} from 'react';
import Input from "../../components/inputs/Input";
import {CgCalendarDates} from "react-icons/cg";
import {MdOutlineMailOutline} from "react-icons/md";
import {formData} from "./types";
import SelectInput from "../../components/inputs/SelectInput";
import Notification from "../../components/notification/Notification";
import {Value} from "../../components/inputs/types";
import {useNavigate} from "react-router-dom";
import {checkUser} from "../../utils/checkUser";

function EditProfileForm() {
    const [notif, setNotif] = useState<{ message: string; type: string; active: boolean }>({
        message: "",
        type: '',
        active: false,
    });
    const [formData, setFormData] = useState<formData>(
        {
            username: '',
            fullName: '',
            birthday: null,
            email: '',
            gender: "other",
            phoneNumber: ''
        }
    );
    useEffect(() => {
        if (localStorage.getItem('user')) {
            const storageData: string | null = localStorage.getItem('user')
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
                message: 'fill username',
                type: 'error'
            })
        } else if (formData.fullName === '') {
            setNotif({
                active: true,
                message: 'fill full name',
                type: 'error'
            })
        } else if (formData.email === '') {
            setNotif({
                active: true,
                message: 'fill email',
                type: 'error'
            })
        } else if (!formData.birthday === null) {
            setNotif({
                active: true,
                message: 'fill birthday',
                type: 'error'
            })
        } else if (formData.gender === '') {
            setNotif({
                active: true,
                message: 'fill gender',
                type: 'error'
            })
        } else if (formData.phoneNumber === '') {
            setNotif({
                active: true,
                message: 'fill phone number',
                type: 'error'
            })
        } else {
            setNotif({
                active: true,
                message: 'information updated',
                type: 'success'
            })
            localStorage.setItem('user', JSON.stringify(formData))
            navigate('/')
        }
    }
    return (
        <form action="" className={'grid grid-cols-1 gap-6 mt-10'} onSubmit={handleSubmit}>
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, username: e.target.value})
                }}
                dateChanged={(data: Value) => {
                }}
                value={formData.username}
                type={"text"}
                name={'username'}
                id={'username'}
                placeholder={'username'}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, fullName: e.target.value})
                }}
                dateChanged={(data: Value) => {
                }}
                value={formData.fullName}
                type={"text"}
                name={'fullName'}
                id={'fullName'}
                placeholder={'full name'}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                }}
                dateChanged={(data: Value) => {
                    setFormData({
                        ...formData,
                        birthday: data
                    })
                }}
                value={formData.birthday?.toLocaleString().split(',')[0]}
                type={"date"}
                name={'birthDate'}
                id={'birthDate'}
                placeholder={'birthday (dd/mm/yyyy)'}
                Icon={CgCalendarDates}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, email: e.target.value})
                }}
                dateChanged={(data: Value) => {
                }}
                value={formData.email}
                type={"email"}
                name={'email'}
                id={'email'}
                placeholder={'email'}
                Icon={MdOutlineMailOutline}
            />
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, phoneNumber: e.target.value})
                }}
                dateChanged={(data: Value) => {
                }}
                value={formData.phoneNumber}
                type={"text"}
                name={'phone'}
                id={'phone'}
                placeholder={'phone number'}
            />
            <SelectInput
                changed={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFormData({...formData, gender: e.target.value})
                }}
                value={formData.gender}
                name={'gender'}
                id={'gender'}
            >
                <option value="other">other</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </SelectInput>
            <button className={'baseBtn acceptBtn'} type={'submit'}>
                update
            </button>
            <Notification message={notif.message} type={notif.type} active={notif.active} close={() => {
                setNotif({...notif, active: false})
            }}/>
        </form>
    );
}

export default EditProfileForm;
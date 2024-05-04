import React, {useState} from 'react';
import Input from "../../components/inputs/Input";
import {CgCalendarDates} from "react-icons/cg";
import {MdOutlineMailOutline} from "react-icons/md";
import {formData} from "./types";
import SelectInput from "../../components/inputs/SelectInput";

function EditProfileForm() {
    const handleSubmit = function (e: React.FormEvent) {
        e.preventDefault()
        console.log(e)
    }
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
    return (
        <form action="" className={'grid grid-cols-1 gap-6 mt-10'} onSubmit={handleSubmit}>
            <Input
                changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({...formData, username: e.target.value})
                }}
                dateChanged={(data: Date) => {
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
                dateChanged={(data: Date) => {
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
                dateChanged={(data: Date) => {
                    setFormData({
                        ...formData,
                        birthday: data.toLocaleDateString()
                    })
                }}
                value={formData.birthday}
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
                dateChanged={(data: Date) => {
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
                dateChanged={(data: Date) => {
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
                <option value="">select</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </SelectInput>
            <button className={'baseBtn acceptBtn'} type={'submit'}>
                update
            </button>
        </form>
    );
}

export default EditProfileForm;
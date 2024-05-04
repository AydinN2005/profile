import {IconType} from "react-icons";
import React from "react";

export interface inputTypes<T> {
    type: 'text' | 'email' | 'password' | 'date';
    name: string;
    id: string;
    placeholder: string;
    Icon?: IconType;
    changed: (e: React.ChangeEvent<T>, date?: Date) => void;
    value: string;
    dateChanged: (date: Date) => void;
    children?: React.ReactNode
}
import {IconType} from "react-icons";

export type routes = {
    id: number;
    title: string;
    route?: string;
    Icon: IconType;
    iconColor: string
}

export type profileLinks = Omit<routes, 'id'>
export type logoutModal = {
    cancel: () => void;
    accept: () => void;
}
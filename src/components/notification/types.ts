export type notificationType = {
    message: string;
    type: string;
    active: boolean
    close: () => void;
}
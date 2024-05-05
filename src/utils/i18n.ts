// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init<unknown>({
        resources: {
            en: {
                translation: {
                    profile: 'Profile',
                    editProfile: 'Edit Profile',
                    setProfile: 'Set Profile',
                    payment: 'Payment',
                    security: 'Security',
                    logOut: 'Logout',
                    username: 'username',
                    fullName: 'full name',
                    birthday: 'birthday (yyyy/mm/dd)',
                    email: 'email',
                    phoneNumber: 'phone number',
                    other: 'other',
                    male: 'male',
                    female: 'female',
                    update: 'update',
                    notSetInformation: 'No information has been entered yet',
                    logoutText: 'are you sure you want to log out ?',
                    logoutAccept: 'yes, log out',
                    logoutCancel: 'cancel',
                    fillUsername: 'fill username',
                    fillFullName: 'fill full name',
                    fillEmail: 'fill email',
                    fillBirthday: 'fill birthday',
                    fillGender: 'fill gender',
                    fillPhonenumber: 'fill phone number',
                    updated: 'information updated'
                },
            },
            fr: {
                translation: {
                    profile: 'Profil',
                    editProfile: 'Editer le profil',
                    setProfile: 'Définir le profil',
                    payment: 'paiement',
                    security: 'sécurité',
                    logOut: 'Se déconnecter',
                    username: "nom d'utilisateur",
                    fullName: 'nom et prénom',
                    birthday: 'anniversaire (yyyy/mm/dd)',
                    email: 'e-mail',
                    phoneNumber: 'numéro de téléphone',
                    other: 'autre',
                    male: 'mâle',
                    female: 'femelle',
                    update: 'mise à jour',
                    notSetInformation: "Aucune information n'a encore été saisie",
                    logoutText: "Êtes-vous sûr de vouloir vous déconnecter ?",
                    logoutAccept: 'oui, déconnecte-toi',
                    logoutCancel: 'Annuler',
                    fillUsername: "remplir le nom d'utilisateur",
                    fillFullName: 'remplir le nom complet',
                    fillEmail: "remplir l'e-mail",
                    fillBirthday: 'remplir anniversaire',
                    fillGender: 'remplir le genre',
                    fillPhonenumber: 'remplir le numéro de téléphone',
                    updated: 'informations mises à jour'
                },
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export function changeLanguage(lang: string) {
    i18n.changeLanguage(lang).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

export default i18n;
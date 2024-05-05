export function checkUser(): boolean {
    if (localStorage.getItem('user_profile'))
        return true
    return false
}
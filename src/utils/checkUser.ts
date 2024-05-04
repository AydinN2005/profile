export function checkUser(): boolean {
    if (localStorage.getItem('user'))
        return true
    return false
}
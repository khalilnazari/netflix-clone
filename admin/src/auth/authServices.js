
// const getTocken = () => {
//     const token = JSON.parse(localStorage.getItem('nf-auth')).accessToken; 
//     return token;
// }; 


export const checkLogin = () => {
    const authObj = localStorage.getItem('nf-auth'); 
    if(!authObj) return false; 

    const authTime = JSON.parse(authObj).timer; 
    const currentTime = new Date().getTime();

    if(currentTime > authTime) {
        localStorage.removeItem('nf-auth');
    }

    return true; 
}

export const logOut = () => {}
export const logIn = () => {}



import { authData } from "../testData/login";

export type TLoginData = {
    login: string,
    password: string,
};

const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err)); 

export const getAuthToken = (loginData: TLoginData) => {
    if (loginData.login === authData.login && loginData.password == authData.password) {
        return 'success'
    } else {
        return Promise.reject('Неверный логин или пароль')
    }
}
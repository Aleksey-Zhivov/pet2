import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { AuthUI } from "./ui/auth-ui";
import { useCustomDispatch, useCustomSelector } from "../services/store";
import { fetchAuth } from "../services/slices/authSlice";
import { TLoginData } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthForm: FC = () => {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useCustomDispatch();
    const response = useCustomSelector(store => store.auth.response)
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<TLoginData>({
        login: '',
        password: '',
    });

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const login = loginRef.current?.value;
        const password = passwordRef.current?.value;
        if (login !== '' && login && password !== '' && password) {
            setLoginData({login: login, password: password});
            dispatch(fetchAuth(loginData))
        } else {
            console.log('Введите логин и пароль');
        }
    }

    useEffect(() => {
        if (response === 'success') {
            console.log(response)
            navigate('/general')
        }
    },[response])

    return (
        <AuthUI 
            loginRef={loginRef}
            passwordRef={passwordRef}
            onSubmit={onSubmit} 
        />
    )
}
import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { AuthUI } from "./ui/auth/auth-ui";
import { useCustomDispatch, useCustomSelector } from "../services/store";
import { fetchAuth } from "../services/slices/authSlice";
import { TLoginData } from "../services/api";
import { redirect, useNavigate } from "react-router-dom";

export const AuthForm: FC = () => {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useCustomDispatch();
    const response = useCustomSelector(store => store.auth.response)
    const error = useCustomSelector((store) => store.auth.error);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<TLoginData>({
        login: '',
        password: '',
    });

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setLoginData({login: loginRef.current!.value, password: passwordRef.current!.value})
    }

    useEffect(() => {
        dispatch(fetchAuth(loginData))
        if (response === 'success') {
            navigate('/general')
        } else {
            return console.log(error);
        }
    },[loginData, response, error])

    return (
        <AuthUI 
            loginRef={loginRef}
            passwordRef={passwordRef}
            onSubmit={onSubmit} 
        />
    )
}
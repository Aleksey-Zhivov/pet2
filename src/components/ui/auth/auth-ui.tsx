import { SyntheticEvent } from "react";
import { TAuthUIProps } from "./types";
import "./auth-ui.scss";
import { Background } from "../background/background";
import { authData } from "../../../testData/login";

export const AuthUI  = (props: TAuthUIProps) => (
    <main className="auth__page">
        <section className="auth__block">
            <h2 className="auth__title">
                Вы были перенаправлены на страницу авторизации, пожалуйста, введите логин и пароль
            </h2>
            <form className="auth__form" action="" onSubmit={props.onSubmit}>
                <label className="auth__form-login" htmlFor="">Введите логин: {authData.login}</label>
                <input 
                    className="auth__form-input" 
                    type="text" 
                    placeholder="" 
                    ref={props.loginRef}/>
                <label className="auth__form-password" htmlFor="">Введите пароль: {authData.password}</label>
                <input 
                    className="auth__form-input" 
                    type="password" 
                    ref={props.passwordRef}/>
            </form>
            <button className="auth__form-submit" type="submit" onClick={(e: SyntheticEvent) => props.onSubmit(e)}>Войти</button>
        </section>
        <Background />
    </main>
)
import { SyntheticEvent } from "react";
import { TAuthUIProps } from "./types";

export const AuthUI  = (props: TAuthUIProps) => (
    <>
        <form className="auth__form" action="">
            <label className="auth__form-login" htmlFor="">Введите логин</label>
            <input type="text" placeholder="" ref={props.loginRef}/>
            <label className="auth__form-password" htmlFor="">Введите пароль</label>
            <input type="password" ref={props.passwordRef}/>
        </form>
        <button type="submit" onClick={(e: SyntheticEvent) => props.onSubmit(e)}>Войти</button>
    </>
)
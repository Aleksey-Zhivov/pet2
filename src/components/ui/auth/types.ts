import { LegacyRef, SyntheticEvent } from "react";

export type TAuthUIProps = {
    onSubmit: (e: SyntheticEvent) => void;
    loginRef: LegacyRef<HTMLInputElement>;
    passwordRef: LegacyRef<HTMLInputElement>;
}
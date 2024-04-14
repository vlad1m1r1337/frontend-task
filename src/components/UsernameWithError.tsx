import {Username} from "./Username";
import {Message} from "primereact/message";
import React from "react";
import {useAppSelector} from "../hooks";

export const UsernameWithError: React.FC = () => {
    const username_input = useAppSelector(state => state.table.input_validation.username_input);

    return (
        <div className="input_with_error">
            <Username/>
            {username_input.length > 0 && <Message severity="error" text={username_input}/>}
        </div>
    )
}
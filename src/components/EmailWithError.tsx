import {Email} from "./Email";
import {Message} from "primereact/message";
import React from "react";
import {useAppSelector} from "../hooks";

export const EmailWithError: React.FC = () => {
    const email_input = useAppSelector(state => state.table.input_validation.email_input);

    return (
        <div className="input_with_error">
            <Email/>
            {email_input.length > 0 && <Message severity="error" text={email_input}/>}
        </div>
    )
}
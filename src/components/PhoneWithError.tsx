import {Phone} from "./Phone";
import {Message} from "primereact/message";
import React from "react";
import {useAppSelector} from "../hooks";

export const PhoneWithError: React.FC = () => {
    const phone_input = useAppSelector(state => state.table.input_validation.phone_input);

    return (
        <div className="input_with_error">
            <Phone/>
            {phone_input.length > 0 && <Message severity="error" text={phone_input}/>}
        </div>
    )
}
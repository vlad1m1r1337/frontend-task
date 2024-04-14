import {Name} from "./Name";
import {Message} from "primereact/message";
import React from "react";
import {useAppSelector} from "../hooks";

export const NameWithError: React.FC = () => {
    const name_input = useAppSelector(state => state.table.input_validation.name_input);

    return (
        <div className="input_with_error">
            <Name/>
            {name_input.length > 0 && <Message severity="error" text={name_input}/>}
        </div>
    )
}
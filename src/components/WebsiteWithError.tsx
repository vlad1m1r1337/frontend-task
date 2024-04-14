import {Website} from "./Website";
import {Message} from "primereact/message";
import React from "react";
import {useAppSelector} from "../hooks";

export const WebsiteWithError: React.FC = () => {
    const website_input = useAppSelector(state => state.table.input_validation.website_input);

    return (
        <div className="input_with_error">
            <Website/>
            {website_input.length > 0 && <Message severity="error" text={website_input}/>}
        </div>
    )
}
import {useAppDispatch, useAppSelector} from "../hooks";
import {setEmail} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import {Message} from "primereact/message";
import React from "react";

export const Email: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.email);
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.table.input_validation.email_input);

    const changeHandler = (value : string) => {
        dispatch(setEmail(value));
    }
    return (
        <>
            <div className="inputs">
                <label htmlFor="email">Email: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="email"
                />
                {error.length !== 0 && <Message severity="error" text={error} />}
            </div>
        </>
    )
}
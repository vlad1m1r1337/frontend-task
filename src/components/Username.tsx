import {useAppDispatch, useAppSelector} from "../hooks";
import {setUsername} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import {Message} from "primereact/message";
import React from "react";


export const Username: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.username);
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.table.input_validation.username_input);

    const changeHandler = (value : string) => {
        dispatch(setUsername(value));
    }
    return (
        <>
            <div className="inputs">
                <label htmlFor="username">Username: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="username"
                />
                {error.length !== 0 && <Message severity="error" text={error} className="validation_error"/>}
            </div>
        </>
    )
}
import {useAppDispatch, useAppSelector} from "../hooks";
import {setPhone} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import {Message} from "primereact/message";
import React from "react";

export const Phone: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.phone);
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.table.input_validation.phone_input);

    const changeHandler = (value : string) => {
        dispatch(setPhone(value));
    }
    return (
        <>
            <div className="inputs">
                <label htmlFor="phone">Phone: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="phone"
                />
                {error.length !== 0 && <Message severity="error" text={error} />}
            </div>
        </>
    )
}
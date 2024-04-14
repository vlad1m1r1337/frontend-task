import {useAppDispatch, useAppSelector} from "../hooks";
import {setEmail} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import React from "react";

export const Email: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.email);
    const dispatch = useAppDispatch();

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
            </div>
        </>
    )
}
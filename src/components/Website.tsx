import {useAppDispatch, useAppSelector} from "../hooks";
import {setWebsite} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import {Message} from "primereact/message";
import React from "react";

export const Website: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.website);
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.table.input_validation.website_input);

    const changeHandler = (value : string) => {
        dispatch(setWebsite(value));
    }
    return (
        <>
            <div className="inputs">
                <label htmlFor="website">Website: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="website"
                />
                {error.length !== 0 && <Message severity="error" text={error} className="validation_error"/>}
            </div>
        </>
    )
}

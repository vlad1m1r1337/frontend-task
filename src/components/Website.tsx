import {useAppDispatch, useAppSelector} from "../hooks";
import {setWebsite} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import React from "react";

export const Website: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.website);
    const dispatch = useAppDispatch();

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
            </div>
        </>
    )
}

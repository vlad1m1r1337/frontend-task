import React, {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setName} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';
import '../css/common.css'

export const Name : React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const value = useAppSelector(state => state.table.addToTable.name);
    const dispatch = useAppDispatch();
    const changeHandler = (value : string) => {
        dispatch(setName(value));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <div className="inputs">
                <label  htmlFor="name">Name: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           ref={inputRef}
                           type="text"
                           name="name"
                           value={value}
                />
            </div>
        </>
    )
}

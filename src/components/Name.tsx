import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setName} from "../store/tableSlice";

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
            <label htmlFor="name">Name: </label>
            <input onChange={e => changeHandler(e.target.value)}
                   ref={inputRef}
                   type="text"
                   name="name"
                   value={value}
            />
        </>
    )
}

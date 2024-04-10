import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setEmail} from "../store/tableSlice";

export const Email: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.email);
    const dispatch = useAppDispatch();

    const changeHandler = (value : string) => {
        dispatch(setEmail(value));
    }
    return (
        <>
            <label htmlFor="email">Email: </label>
            <input onChange={e => changeHandler(e.target.value)}
                   value={value}
                   type="text"
                   name="email"
            />
        </>
    )
}
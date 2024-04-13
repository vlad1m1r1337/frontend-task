import React from "react";
import {Name} from "./Name";
import {Username} from "./Username";
import {Email} from "./Email";
import {Phone} from "./Phone";
import {Website} from "./Website";
import {useAppDispatch, useAppSelector} from "../hooks";
import {postToTable} from "../store/tableSlice";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";



export const Form : React.FC = () => {
    const dispatch = useAppDispatch();
    const addToTable = useAppSelector(state => state.table.addToTable);
    const loading = useAppSelector(state => state.table.request_status.loading);

    const addField = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(postToTable(addToTable));
    }
    return (
        <header className="header">
            <h2 className="header_name">Форма Отправки</h2>
            <form className="form_wrapper">
                <Name />
                <Username />
                <Email />
                <Phone />
                < Website />
                <Button onClick={e => addField(e)} loading={loading} type="submit">Отправить</Button>
            </form>
        </header>
    )
}
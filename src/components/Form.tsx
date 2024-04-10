import React, {useEffect, useRef} from "react";
import {TableProps} from "../types/fetchedData";
import {Name} from "./Name";
import {Username} from "./Username";
import {Email} from "./Email";
import {Phone} from "./Phone";
import {Website} from "./Website";

export const Form : React.FC = () => {
    const postData = async () => {
        const newUser = {
            name: 'John DickSon',
            username: 'johndick',
            email: 'johndick@example.com',
            phone: '1-4010-935-8478 x6430',
            website: 'googledick.com'
        };
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(newUser)
            });
            const data = await response.json();

            console.log("data", data)
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }
    const addField = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
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
                <button onClick={e => addField(e)} type="submit">Отправить</button>
            </form>
        </header>
    )
}
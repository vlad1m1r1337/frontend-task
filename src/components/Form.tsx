import React, {useEffect, useRef} from "react";

export const Form : React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
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

    return (
        <header className="header">
            <button onClick={() => postData()}>POST</button>
            <h2 className="header_name">Форма Отправки</h2>
            <form className="form_wrapper">

                <label htmlFor="name">Name: </label>
                <input ref={inputRef} type="text" name="name"/>

                <label htmlFor="text">Username: </label>
                <input type="text" name="text"/>

                <label htmlFor="email">Email: </label>
                <input type="email" name="email"/>

                <label htmlFor="number">Phone: </label>
                <input type="number" name="number"/>

                <label htmlFor="number">Website: </label>
                <input type="number" name="number"/>

                <button onClick={e => e.preventDefault()} type="submit">Отправить</button>
            </form>
        </header>
    )
}
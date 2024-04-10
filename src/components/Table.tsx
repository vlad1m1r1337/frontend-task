import '../css/Table.css'
import {useEffect, useState} from "react";
import {json} from "node:stream/consumers";
import {fetchedData} from "../types/fetchedData";

export const Table : React.FC = () => {
    const [Data, setData] = useState<fetchedData[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/users');
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const jsonData = await response.json();
            setData(jsonData);
            console.log("jsonData", jsonData);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };
    useEffect(() => {
        fetchData();
        return () => {
            // действия по очистке
        };
    }, []);

    return (
        <main className="main">
            <button onClick={() => fetchData()}>Log fetch</button>
            <div className="wrapper">
                {Data && Data.map((el: fetchedData, index: number) => (
                    <div className="cells" key={index}>
                        <p className="cells_value">{el.name}</p>
                        <p className="cells_value">{el.username}</p>
                        <p className="cells_value">{el.email}</p>
                        <p className="cells_value">{el.phone}</p>
                        <p className="cells_value">{el.website}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

import '../css/Table.css'
import {useEffect} from "react";
import {Row} from "./Row";
import {fetchedData, TableProps} from "../types/fetchedData";
import {useAppDispatch} from "../hooks";
import {fetchTable} from "../store/tableSlice";
import {useAppSelector} from "../hooks";

export const Table : React.FC = () => {
    const dispatch = useAppDispatch();
    const Data = useAppSelector(state => state.table.table);
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3001/users');
    //         if (!response.ok) {
    //             throw new Error('Ошибка запроса');
    //         }
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //         console.log("jsonData", jsonData);
    //     } catch (error) {
    //         console.error('Ошибка при получении данных:', error);
    //     }
    // };
    useEffect(() => {
        dispatch(fetchTable());
    }, []);

    return (
        <main className="main">
            <div className="wrapper">
                {Data && Data.map((el: fetchedData, index: number) => (
                    <Row index={index} key={index} el={el}/>
                ))}
            </div>
        </main>
    )
}

import '../css/Table.css'
import {useEffect} from "react";
import {Row} from "./Row";
import {fetchedData} from "../types/fetchedData";
import {useAppDispatch} from "../hooks";
import {fetchTable} from "../store/tableSlice";
import {useAppSelector} from "../hooks";

export const Table : React.FC = () => {
    const dispatch = useAppDispatch();
    const Data = useAppSelector(state => state.table.table);
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

import '../css/Table.css'
import {useEffect} from "react";
import {Row} from "./Row";
import {fetchedData} from "../types/fetchedData";
import {useAppDispatch} from "../hooks";
import {fetchTable} from "../store/tableSlice";
import {useAppSelector} from "../hooks";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const Table : React.FC = () => {
    const dispatch = useAppDispatch();
    const Data = useAppSelector(state => state.table.table);
    useEffect(() => {
        dispatch(fetchTable());
    }, []);


    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'username', header: 'Username'},
        {field: 'email', header: 'Email'},
        {field: 'phone', header: 'Phone'},
        {field: 'website', header: 'Website'}
    ];
    return (
        <main className="main">
            <div className="card">
                <DataTable value={Data} tableStyle={{minWidth: '50rem'}}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header}/>
                    ))}
                </DataTable>
            </div>
        </main>
    )
}

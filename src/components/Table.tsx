import '../css/Table.css'
import React, {useEffect} from "react";
import {useAppDispatch} from "../hooks";
import {useAppSelector} from "../hooks";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../css/Table.css";
import { Message } from 'primereact/message';
import { Table as TableType }  from "../types/types";
import {API_URL} from "../constants/constants";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {createTodo, fetchTable} from "../api/todo";
import { newTodo } from "../constants/constants";

export const Table : React.FC = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error} = useQuery({queryKey: ['postTodos'], queryFn: fetchTable})
    const { mutate: createTodoMutation} = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries(['postTodos'])
        }
    })
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'username', header: 'Username'},
        {field: 'email', header: 'Email'},
        {field: 'phone', header: 'Phone'},
        {field: 'website', header: 'Website'}
    ];

    return (
        <main className="main">
                <button onClick={async () => {
                    try {
                        await createTodoMutation(newTodo);
                    } catch (e) {
                        console.error(e);
                    }
                }}>Добавить default user</button>
                {isError && <Message severity="error" text={error as any} className="error_message"/>}
                {isLoading ? <i className="pi pi-spin pi-spinner loader" style={{fontSize: '50px'}}></i> :
                    <DataTable value={data} tableStyle={{minWidth: '50rem'}}>
                        {columns.map((col, i) => (
                            <Column key={col.field} field={col.field} header={col.header}/>
                        ))}
                    </DataTable>
                }
        </main>
    )
}

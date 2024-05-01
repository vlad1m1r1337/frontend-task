import {Table as TableType} from "../types/types";
import {API_URL} from "../constants/constants";

const headers = { 'Content-type': 'application/json' }
export const fetchTable = async (): Promise<TableType[]> => {
    return await (await fetch(API_URL)).json()
}

export const createTodo = async (user: any): Promise<TableType> => {
    const body = JSON.stringify(user)
    const method = 'POST'
    return await (await fetch(API_URL, { body, method, headers })).json()
}


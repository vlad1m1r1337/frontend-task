import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch} from "./index";
export const fetchTable = createAsyncThunk<Table[], undefined, {rejectValue: string}>(
    'table/fetchTable',
    async function (_,  {rejectWithValue}) {
        const response = await fetch('http://localhost:3001/users');

        if (!response.ok) {
            return rejectWithValue('Ошибка запроса');
        }

        const data = await response.json();
        return data;
    }
);

export const postToTable = createAsyncThunk<Table[], Table, {rejectValue: string, dispatch: AppDispatch}>(
    'table/addToTable',
    async function (table, {rejectWithValue, dispatch}) {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(table)
        });

        if (!response.ok) {
            return rejectWithValue('Ошибка запроса');
        }
        dispatch(mergeTable());
        const data = await response.json();
        return data;
    }
);

type Table = {
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}
interface InitialState {
    table: Table[];
    addToTable: Table;
}

const initialState: InitialState = {
    table: [],
    addToTable: {
        name: '',
        email: '',
        phone: '',
        username: '',
        website: '',
    },
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.addToTable.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.addToTable.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.addToTable.phone = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.addToTable.username = action.payload;
        },
        setWebsite: (state, action: PayloadAction<string>) => {
            state.addToTable.website = action.payload;
        },
        clearInputs: (state) => {
            state.addToTable = {
                name: '',
                email: '',
                phone: '',
                username: '',
                website: '',
            }
        },
        mergeTable: (state) => {
            state.table.push(state.addToTable);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTable.fulfilled , (state, action) => {
                state.table = action.payload;
            })
            .addCase(postToTable.fulfilled, (state, action) => {
                state.addToTable = {
                    name: '',
                    email: '',
                    phone: '',
                    username: '',
                    website: '',
                }
            });
    }
});

export const {
    mergeTable,
    clearInputs,
    setName,
    setEmail,
    setPhone,
    setUsername,
    setWebsite,
} = tableSlice.actions;
export default tableSlice.reducer;
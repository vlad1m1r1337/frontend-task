import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";


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

export const addToTable = createAsyncThunk<Table[], Table, {rejectValue: string}>(
    'table/addToTable',
    async function (table, {rejectWithValue}) {
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
        const data = await response.json();
        return data;
    }
);

type Table = {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}
interface InitialState {
    table: Table[];
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}

const initialState: InitialState = {
    table: [],
    name: '',
    email: '',
    phone: '',
    username: '',
    website: '',
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setWebsite: (state, action: PayloadAction<string>) => {
            state.website = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchTable.fulfilled , (state, action) => {
            state.table = action.payload;
        });

    }
});

export const {setName, setEmail, setPhone, setUsername, setWebsite} = tableSlice.actions;
export default tableSlice.reducer;
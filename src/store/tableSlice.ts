import {createSlice, PayloadAction, createAsyncThunk, AnyAction} from "@reduxjs/toolkit";
import {AppDispatch} from "./index";
import {inputs_validation} from "../utils/inputs_validation";
export const API_URL = 'http://localhost:3001/users';

export const fetchTable = createAsyncThunk<Table[], undefined, {rejectValue: string}>(
    'table/fetchTable',
    async function (_,  {rejectWithValue}) {
        const response = await fetch(API_URL);

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
        if (inputs_validation(table, dispatch) !== 0) { return ;}
        console.log("some");
        const response = await fetch(API_URL, {
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

export type Table = {
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}

type RequestStatus = {
    error: string | null;
    loading: boolean;
}

type InputValidation = {
    name_input: string;
    email_input: string;
    phone_input: string;
    username_input: string;
    website_input: string;
}

interface InitialState {
    table: Table[];
    addToTable: Table;
    request_status: RequestStatus;
    input_validation: InputValidation;
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
    request_status: {
        error: null,
        loading: false,
    },
    input_validation: {
        name_input: '',
        email_input: '',
        phone_input: '',
        username_input: '',
        website_input: '',
    }
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
        },
        set_input_name_error: (state, action: PayloadAction<string>) => {
            state.input_validation.name_input = action.payload;
        },
        set_input_username_error: (state, action: PayloadAction<string>) => {
            state.input_validation.username_input = action.payload;
        },
        set_input_email_error: (state, action: PayloadAction<string>) => {
            state.input_validation.email_input = action.payload;
        },
        set_input_phone_error: (state, action: PayloadAction<string>) => {
            state.input_validation.phone_input = action.payload;
        },
        set_input_website_error: (state, action: PayloadAction<string>) => {
            state.input_validation.website_input = action.payload;
        },
        reset_inputs_errors: (state) => {
            state.input_validation = {
                name_input: '',
                email_input: '',
                phone_input: '',
                username_input: '',
                website_input: '',
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTable.pending, state => {
                state.request_status.loading = true;
                state.request_status.error = null;
            })
            .addCase(fetchTable.fulfilled , (state, action) => {
                state.table = action.payload;
                state.request_status.loading = false;
            })
            .addCase(postToTable.pending, state => {
                state.request_status.loading = true;
                state.request_status.error = null;
            })
            .addCase(postToTable.fulfilled, (state, action) => {
                const arr = Object.values(state.input_validation);
                console.log(arr);
                if (arr.every((el) => el === '')) {
                    state.addToTable = {
                        name: '',
                        email: '',
                        phone: '',
                        username: '',
                        website: '',
                    }
                }
                state.request_status.loading = false;
            })
            .addMatcher(isError, (state, action:PayloadAction<string>) => {
                state.request_status.error = action.payload;
                state.request_status.loading = false;
            })
    }
});

export const {
    set_input_website_error,
    set_input_phone_error,
    set_input_email_error,
    set_input_username_error,
    set_input_name_error,
    reset_inputs_errors,
    mergeTable,
    clearInputs,
    setName,
    setEmail,
    setPhone,
    setUsername,
    setWebsite,
} = tableSlice.actions;
export default tableSlice.reducer;

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected');
}
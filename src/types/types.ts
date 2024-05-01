export interface types {
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export interface TableProps {
    Data: types[];
    setData: React.Dispatch<React.SetStateAction<types[]>>;
}

export interface RowProps {
    index: number;
    el: types;
}

export type Table = {
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}
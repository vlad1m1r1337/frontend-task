import {useAppDispatch, useAppSelector} from "../hooks";
import {setUsername} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';


export const Username: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.username);
    const dispatch = useAppDispatch();

    const changeHandler = (value : string) => {
        dispatch(setUsername(value));
    }
    return (
        <>
            <div>
                <label htmlFor="username">Username: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="username"
                />
            </div>
        </>
    )
}
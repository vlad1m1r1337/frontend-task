import {useAppDispatch, useAppSelector} from "../hooks";
import {setPhone} from "../store/tableSlice";
import { InputText } from 'primereact/inputtext';

export const Phone: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.phone);
    const dispatch = useAppDispatch();

    const changeHandler = (value : string) => {
        dispatch(setPhone(value));
    }
    return (
        <>
            <div>
                <label htmlFor="phone">Phone: </label>
                <InputText onChange={e => changeHandler(e.target.value)}
                           value={value}
                           type="text"
                           name="phone"
                />
            </div>
        </>
    )
}
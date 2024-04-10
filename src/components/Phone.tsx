import {useAppDispatch, useAppSelector} from "../hooks";
import {setPhone} from "../store/tableSlice";
export const Phone: React.FC = () => {
    const value = useAppSelector(state => state.table.addToTable.phone);
    const dispatch = useAppDispatch();

    const changeHandler = (value : string) => {
        dispatch(setPhone(value));
    }
    return (
        <>
            <label htmlFor="phone">Phone: </label>
            <input onChange={e => changeHandler(e.target.value)}
                   value={value}
                   type="text"
                   name="phone"
            />
        </>
    )
}
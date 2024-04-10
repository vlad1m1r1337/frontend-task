import {useAppDispatch, useAppSelector} from "../hooks";
import {setWebsite} from "../store/tableSlice";

export const Website: React.FC = () => {
    const value = useAppSelector(state => state.table.website);
    const dispatch = useAppDispatch();

    const changeHandler = (value : string) => {
        dispatch(setWebsite(value));
    }
    return (
        <>
            <label htmlFor="website">Website: </label>
            <input onChange={e => changeHandler(e.target.value)}
                   value={value}
                   type="text"
                   name="website"
            />
        </>
    )
}
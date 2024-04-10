import {RowProps} from "../types/fetchedData";

export const Row: React.FC<RowProps> = ({index, el}) => {
    return (
        <div className="cells" key={index}>
            <p className="cells_value">{el.name}</p>
            <p className="cells_value">{el.username}</p>
            <p className="cells_value">{el.email}</p>
            <p className="cells_value">{el.phone}</p>
            <p className="cells_value">{el.website}</p>
        </div>
    )
}

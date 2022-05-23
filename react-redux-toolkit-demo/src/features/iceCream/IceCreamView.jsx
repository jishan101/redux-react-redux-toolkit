import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    
    const [value, setValue] = useState(1);

    return (
        <div>
            <h2>Num of Ice Creams: {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice Creams</button>
        </div>
    );
}
 
export default IceCreamView;


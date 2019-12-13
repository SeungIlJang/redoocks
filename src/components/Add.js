import React,{useState} from "react";

import {useDispatch} from "../context/context";
import {ADD} from "../actions";

export default () => {
    const [newToDo,setNewToDo] = useState("");
   const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault();
        dispatch({type:ADD,payload:newToDo});
        setNewToDo("");
    };
    const onChange = e => {
        const {
            target:{value }
        }=e;
        setNewToDo(value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Write to do"
                   value={newToDo}
                   onChange={onChange}
            />
        </form>
    );
};

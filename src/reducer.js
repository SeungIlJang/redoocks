import uuid from "uuid/v4";
import {ADD, COMPLETE, DEL, UNCOMPLETE} from "./actions";


export const initialState = {
    toDos:[],
    completed:[]
};



const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD:
            return {
                ...state,
                toDos:[...state.toDos , {text:action.payload,id:uuid()}]
            };
        case DEL:
            return {
                ...state,
                toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
                completed: state.completed.filter(toDo => toDo.id !== action.payload)
            };
        case COMPLETE:
            const target = state.toDos.find(toDo=>toDo.id===action.payload);
            return {
                ...state,
                toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
                completed: [...state.completed,{...target}]
            };
        case UNCOMPLETE:
            const unTarget = state.completed.find(toDo=>toDo.id===action.payload);
            return {
                ...state,
                completed: state.completed.filter(toDo => toDo.id !== action.payload),
                toDos: [...state.toDos,{...unTarget}]
            };
        default:
            throw new Error();
    }
};

export default reducer;

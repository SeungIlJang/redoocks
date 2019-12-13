import React from 'react';
import {useState} from "../context/context";
import Add from "./Add";
import List from "./List";
import ToDo from "./ToDo";

export default () =>{

    const {toDos,completed} = useState();
    return (
        <>
            <h1>ToDos</h1>
            <Add/>
            <List name={"To Do"}>
                {toDos.map((toDo)=>
                    <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
                )}
            </List>
            <List name={completed.length > 0 ? "Completed":""}>
                {completed.map((toDo)=>(
                    <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={true} />
                ))}
            </List>
        </>

    );

}

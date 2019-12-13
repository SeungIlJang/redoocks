import React from 'react';
import { COMPLETE, DEL, UNCOMPLETE} from "../reducer";
import Add from "./Add";
import List from "./List";
import ToDo from "./ToDo";
import  {useState} from "../context";
// import Screen from './Screen';
// import UserContextProvider from "./context";
// import {Lang,UserContextProvider} from "./context";
// import translations from "./translations";

function App() {
    const {toDos,completed} = useState();

    return(
        <>
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
export default App;

{/*function App() {*/}

{/*  return (*/}
{/*    <Lang defaultLang="en" translations={translations}>*/}
{/*        <UserContextProvider>*/}
{/*        <Screen/>*/}
{/*        </UserContextProvider>*/}
{/*    </Lang>*/}
{/*  );*/}
{/* }*/}



{/*//Context 여러개일 경우 https://velopert.com/3606*/}

{/*return (*/}
{/*  <Provider1 test1={test1}>*/}
{/*    <Provider2 test2={text2}>*/}
{/*      ....*/}
{/*    </Provider2>*/}
{/*  </Provider1>*/}
{/*)*/}
{/*----*/}
{/*const AppProvider = ({ contexts, children }) => contexts.reduce(*/}
{/*  (prev, context) => React.createElement(context, {*/}
{/*    children: prev*/}
{/*  }),*/}
{/*  children*/}
{/*);*/}

{/*const App = () => {*/}
{/*  return (*/}
{/*    <AppProvider*/}
{/*      contexts={[SampleProvider, AnotherProvider]}*/}
{/*    >*/}
{/*      <div className="panes">*/}
{/*        <LeftPane />*/}
{/*        <RightPane />*/}
{/*      </div>*/}
{/*      <Counter />*/}
{/*    </AppProvider>*/}
{/*  );*/}
{/*};*/}

import React from 'react';
import ToDos from "./ToDos";
import ToDosProvider from "../context/context";

import Screen from '../Screen';
import UserContextProvider from "../context/userContext";
import LangProvider from "../context/langContext";
import translations from "./lang/translations";

function App() {

    return(
        <>
        <LangProvider defaultLang="en" translations={translations}>
        <UserContextProvider>
        <ToDosProvider>
                <Screen/>
                <ToDos/>
        </ToDosProvider>
        </UserContextProvider>
        </LangProvider>



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

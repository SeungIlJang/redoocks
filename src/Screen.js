import React from 'react';
import Header from "./Header";
import {useSetLang,useT} from "./context/langContext";
import {useFns} from "./context/userContext";

export default () => {
    const {logUserIn,logUserOut}  = useFns();
    const setLang =  useSetLang();
    const t = useT();
    return(
        <>
            <div>
                <Header />
                <h1>First screen</h1>
                <button onClick={logUserIn}>Log user in</button>
                <button onClick={logUserOut}>Log user out</button>
            </div>
            <h1>{t("Hello!")}</h1>
            <button onClick={()=>setLang("es")}>{t("Translate")} ES</button>
            <button onClick={()=>setLang("en")}>{t("Translate")} EN</button>
            <button onClick={()=>setLang("kr")}>{t("Translate")} KR</button>
            <button onClick={()=>setLang("")}>{t("Translate")} null</button>
            {/*<LangContext.Consumer>*/}
            {/*    {store=>store.t("Hello!")}*/}
            {/*</LangContext.Consumer>*/}

        </>
    );
}

// export default () => {
//     const setLang =  useSetLang();
//     const t = useT();
//     return(
//         <>
//             <h1>{t("Hello!")}</h1>
//             <button onClick={()=>setLang("es")}>{t("Translate")} ES</button>
//             <button onClick={()=>setLang("en")}>{t("Translate")} EN</button>
//             <button onClick={()=>setLang("kr")}>{t("Translate")} KR</button>
//             <button onClick={()=>setLang("")}>{t("Translate")} null</button>
//             {/*<LangContext.Consumer>*/}
//             {/*    {store=>store.t("Hello!")}*/}
//             {/*</LangContext.Consumer>*/}
//
//         </>
//     );
// }

// const Screen =() =>{
//     const {logUserIn,logUserOut}  = useFns();
//     return(
//         <div>
//             <Header />
//             <h1>First screen</h1>
//             <button onClick={logUserIn}>Log user in</button>
//             <button onClick={logUserOut}>Log user out</button>
//         </div>
//     )
// };

// export default Screen;


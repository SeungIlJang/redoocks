import React,{useReducer,createContext,useContext} from "react";
import reducer, {initialState} from "./reducer";

const ToDosContext = createContext();
const ToDosProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <ToDosContext.Provider value={{state,dispatch}}>{children}</ToDosContext.Provider>

};

export const useDispatch = () => {
  const {dispatch} = useContext(ToDosContext);
  return dispatch;

};

export const useState = () => {
    const{state} = useContext(ToDosContext);
    return state;
}

// export const useToDos = () => {
//     const {state:{toDos}} = useContext(ToDosContext);
//     return toDos;
// };
// export const useCompleted = () => {
//     const {state:{completed}} = useContext(ToDosContext);
//     return completed;
// };

export default ToDosProvider;


/*
import React,{useState,useContext,createContext} from "react";

//context는 네 어플리케이션의 데이터 저장소
const UserContext = React.createContext();
const LangContext = createContext();

const Lang = ({defaultLang,children,translations}) =>{
    const [lang,setLang] = useState(defaultLang);
    const hyperTranslate = (text)=>{
        if(lang===defaultLang){
            return text;
        }else{
            try {
                return translations[lang][text];
            }catch (e) {
                // console.log(e);
                return text;
            }
        }
    };
    console.log(translations);

    return <LangContext.Provider value={{setLang,t:hyperTranslate}}>
        {children}
    </LangContext.Provider>
};
export const useSetLang = () =>{
    const {setLang} = useContext(LangContext);
    return setLang;
};

export const useT = ()=>{
  const {t} = useContext(LangContext);
  return t;
};

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({
        name:"Nicolas",
        loggedIn :false
    });
    const logUserIn = () => setUser({...user,loggedIn:true});
    const logUserOut = () => setUser({...user,loggedIn:false});
    return(
    <UserContext.Provider value={{user,fn:{logUserIn,logUserOut}}}>{children}</UserContext.Provider>
)};

export const useUser = () =>{
    const {user} = useContext(UserContext);
    return  user;
};

export const useFns = ()=>{
    const {fn}  = useContext(UserContext);
    return fn;
};

export {
    UserContextProvider,
    Lang
    };
*/

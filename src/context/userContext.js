import React,{useState,useContext,createContext} from "react";

//context는 네 어플리케이션의 데이터 저장소
const UserContext = React.createContext();

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
export default UserContextProvider;

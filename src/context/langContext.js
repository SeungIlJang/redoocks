import React,{useState,useContext,createContext} from "react";
import translations from "../lang/translations.js"

//context는 네 어플리케이션의 데이터 저장소
const LangContext = createContext();

// const LangProvider = ({defaultLang,translations,children}) =>{
//     const [lang,setLang] = useState(defaultLang);
const LangProvider = ({children}) =>{
    const defaultLang = "en";
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



export default LangProvider;

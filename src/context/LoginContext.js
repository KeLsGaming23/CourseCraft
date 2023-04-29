import { createContext, useState } from "react";

export const LoginContext = createContext();
export const MyProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [redirectFromHome, setRedirectFromHome] = useState(false);
    const [isEnroll, setIsEnroll] = useState(false);
    return(
        <>
            <LoginContext.Provider value={{ 
                isLogin, setIsLogin,
                redirectFromHome, setRedirectFromHome,
                isEnroll, setIsEnroll }}>
            {props.children}
            </LoginContext.Provider>
        </>
    );
}
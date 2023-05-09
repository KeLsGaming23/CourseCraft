import { createContext, useState } from "react";

export const LoginContext = createContext();
export const MyProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [redirectFromHome, setRedirectFromHome] = useState(false);
    const [isEnroll, setIsEnroll] = useState(false);
    const [userRole, setUserRole] = useState("Not Login");
    const [user, setUser] = useState(null);

    const [loggedUser, setUserLogged] = useState({});

    return (
        <>
            <LoginContext.Provider value={{
                isLogin, setIsLogin,
                redirectFromHome, setRedirectFromHome,
                isEnroll, setIsEnroll,
                userRole, setUserRole,
                user, setUser,
                loggedUser, setUserLogged,
            }}>
                {props.children}
            </LoginContext.Provider>
        </>
    );
}
import { createContext, useState } from "react";


export const ProfileContext = createContext();
export const ProfileProvider = (props) => {

    const [editFormShow, setEditForm] = useState(false);

    return (
        <>
            <ProfileContext.Provider value={{
                editFormShow, setEditForm,
            }}>
                {props.children}
            </ProfileContext.Provider>
        </>
    );
}
import React from "react";

export const AuthContext = React.createContext(
    {
        token:'',
        isLoggedIn:false,
        LogIn:()=>{},
        LogOut: ()=>{}
    }
)
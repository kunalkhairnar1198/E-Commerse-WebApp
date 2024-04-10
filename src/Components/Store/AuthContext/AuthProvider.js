import React from 'react'
import { AuthContext } from './auth-context'

const AuthProvider = (props) => {

    const authCtxValue ={
        token:'',
        isLoggedIn:false,
        LogIn:()=>{},
        LogOut: ()=>{}
    }
  return (
    <AuthContext.Provider value={authCtxValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

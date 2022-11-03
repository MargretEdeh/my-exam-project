import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "./FirebaseConfig";


const AuthContext = createContext()
export  const AuthContextProvider = ({children})=>{
    const [user ,setUser]= useState({})
    const googleSignIn= ()=>{
        const Provider = new GoogleAuthProvider();
        signInWithPopup(auth, Provider)
    }
    const LogOut=()=>{
        signOut(auth)
    }
    
    useEffect(()=>{
const onChangeAcc = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    console.log(currentUser)

})
return()=>{
    onChangeAcc()
}
    },[])
    return(
        <AuthContext.Provider value={{googleSignIn, LogOut, user}}>
            {children}
        </AuthContext.Provider>
        
    )
}
export const UserContext = ()=>{
    return(
        useContext(AuthContext)
    )
}
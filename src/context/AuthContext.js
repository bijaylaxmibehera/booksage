import { createContext,useState } from "react";
import { loginService } from "../services/loginService";
import { signUpService } from "../services/signUpService";

export const AuthConext=createContext();

export function AuthProvider({children}){
    const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
    const [token, setToken] = useState(localStorageToken?.token);
    const [currentUser, setCurrentUser] = useState(localStorageToken?.user);


    const loginHandler=async({email,password})=>{
        try{
            const response = await loginService(email, password);
            const {
              status,
              data: { foundUser, encodedToken },
            } = response;
            if(status===200){
                localStorage.setItem(
                    "loginDetails",
                    JSON.stringify({ user: foundUser, token: encodedToken })
                  );

                  setCurrentUser(foundUser);
                  setToken(encodedToken);
            }
        }catch(err){
            console.error(err)
        }
    }

    // console.log("Authcontext- token",token)
    return (
        <>
        <AuthConext.Provider value={{loginHandler,token,currentUser}}>{children}</AuthConext.Provider>
        </>
    )
}
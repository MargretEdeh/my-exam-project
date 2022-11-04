import { createContext, useContext,useState,useEffect } from "react";

const ApiUser = createContext()

export const ApiContextProvider=({children})=>{
    const [users, setUsers]= useState([]);
  const [page, setPage]=useState(1);


  useEffect(()=>{
    fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
    .then((res)=> res.json())
    .then((res)=>{
      // console.log(res.results),
      setUsers(res.results)
      console.log(res.results)
    })
  },[])


  const PerPage= 6;
  const total= users?.length;
  const pages =10;
  const skip= page * PerPage - PerPage;
  
    return(
        <ApiUser.Provider value={{users, skip, page, setPage, PerPage,total, pages }}>
        {children}
        </ApiUser.Provider>
    )
}
export const ApiUserContext=()=>{
    return(
        useContext(ApiUser)
    )
}
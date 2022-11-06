import { createContext, useContext,useState,useEffect } from "react";

const ApiUser = createContext()

export const ApiContextProvider=({children})=>{
    const [users, setUsers]= useState([]);
  const [page, setPage]=useState(1);
  const [isLoading, setIsloading]= useState(true)


  useEffect(()=>{
    setIsloading(true)
    fetch(`https://randomuser.me/api/?page=100&results=10&seed=abc`)
    .then((res)=> res.json())
    .then((res)=>{
      // console.log(res.results),
      setUsers(res.results)
      setIsloading(false)
      console.log(res.results)
    })
  },[])


  const PerPage= 4;
  const total= users?.length;
  const pages =10;
  const skip= page * PerPage - PerPage;
  
  
    return(
        <ApiUser.Provider value={{users,  isLoading, skip, page, setPage, PerPage,total, pages }}>
        {children}
        </ApiUser.Provider>
    )
}
export const ApiUserContext=()=>{
    return(
        useContext(ApiUser)
    )
}
import React,{useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './frontend.css'
import { AiOutlinePicture} from "react-icons/ai";
import { FiSearch} from "react-icons/fi";
import { ApiUserContext } from './ApiContext';
import SkeletonCard from "./skeleton";
import Skeleton from 'react-loading-skeleton'


import { 
  AiFillStar
} from "react-icons/ai";



export default function BackEnd() {
  const {users, skip, page, setPage, PerPage, isLoading, pages}= ApiUserContext()
  const [search, setSearch] = useState("");
  const HandleSearch = (e) => {
    setSearch(e.target.value);
  };
  const thesearch = (data) => {
    return data.filter((item) =>
      item.name.first.toLowerCase().includes(search.toLowerCase() || "" )
    );
  };
  
  
  return (
    <div className='frontend'>
      <div className='up'>
      <div className="top">
          <div className="search">
            <input
              type="text"
              onChange={HandleSearch}
              className="input"
              placeholder="search"
            ></input>
            <FiSearch className="icon2" />
            <AiOutlinePicture className="icon2" />
            <AiFillStar className="icon2" />
          </div>
          <h2 className="top2">BackEnd Enthusiast </h2>
        </div>
        <div className='users'>
          {isLoading && <SkeletonCard card={4}/>
        }

            {thesearch(users)
              .slice(skip, skip + PerPage)
              .map((each) => {
                const { name, picture, location, login } = each;
                return (
                  <div className="each-user">
                    <img
                      src={picture.large || <Skeleton/>}
                      alt={name.first}
                      className="friend"  
                    />
                    <div className="details">
                      <h2 className="name">
                        Eng. {name.first} {name.last}{" "}
                      </h2>
                      <h4 className="city">{location.city}</h4>
                      <h4 className="name">{location.country} </h4>
                      <NavLink
                        key={login.uuid}
                        className="more"
                        to={login.uuid}
                      >
                        More Details{" "}
                      </NavLink>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className="paginate">
          {
            <button
              className="btn1"
              disabled={page <= 1}
              aria-disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }
          {Array.from({ length: pages }, (_, index) => index + 1).map((num) => {
            return (
              <button className="btn2" onClick={() => setPage(num)}>
                {num}{" "}
              </button>
            );
          })}
          {
            <button
              className="btn1"
              aria-disabled={page >= pages}
              disabled={page >= pages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
          </div>

       
     </div>
     <div className='outlet'>
     <Outlet/>

     </div>
    </div>
  )
}

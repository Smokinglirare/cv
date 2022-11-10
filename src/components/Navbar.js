import React, {useState, useEffect} from 'react'
import {BiTime} from "react-icons/bi"
import { SlCalender, SlHome } from "react-icons/sl"
import {CiMail} from "react-icons/ci"
import { Link, useLocation } from 'react-router-dom'
import Experience from '../pages/Experience'
import "./Navbar.css"



function Navbar() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);



  return (
    <div className="navbarContainer">
<Link className={"link" + (url === "/" || url === "/home" ?" current" : "")} to="/" ><SlHome /></Link>
<Link className={"link" + (url === "/personalLetter" ? " current" : "")} to="/personalLetter" ><CiMail /></Link>

    </div>
  )
}

export default Navbar
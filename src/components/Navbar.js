import React, {useState, useEffect} from 'react'
import {HiOutlineDocumentText, HiOutlineHome} from "react-icons/hi"
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"



function Navbar() {

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);



  return (
    <div className="navbarContainer">
<Link className={"link" + (url === "/" || url === "/home" ?" current" : "")} to="/" ><HiOutlineHome /></Link>
<Link className={"link" + (url === "/personalLetter" ? " current" : "")} to="/personalLetter" ><HiOutlineDocumentText /></Link>

    </div>
  )
}

export default Navbar
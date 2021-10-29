import React from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
  let userr=  localStorage.getItem('user')!==null&& JSON.parse(localStorage.getItem('user')).name

  const resetLocalStorage=()=>{
      localStorage.clear()
  }
    return (
      <>
      <nav className="nav">
          <div className="logOutContainer">
            <div className="leftMenu">
            <div className="circleImg"><img className="profile_img" src="/images/1.jpg" alt="" /></div>
            <div className="userName"><p>{userr}</p></div>
            </div>
            <div className="logOut"><Link className="linkLogOut" to="/" onClick={resetLocalStorage}
            >LogOut</Link></div>
         
          </div>
      </nav>
    </>
    )
}

export default Menu

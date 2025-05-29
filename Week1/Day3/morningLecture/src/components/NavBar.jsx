import React from 'react'

const NavBar = (props) => {
    const {user}= props
    const navbarStyle = {
        display: "flex",
        justifyContent: "space-between"
    }
    const ulStyle = {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      listStyle: 'None'
    };
  return (
    <>
        <div style={navbarStyle}>
            <h4 style={{backgroundColor: "red"}}>Hello {user}</h4>
            <ul style={ulStyle}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
  )
}

export default NavBar
import React from 'react'
import styles from "../css/HobbiesList.module.css"
const HobbiesList = (props) => {
    const {allHobbies, username} = props
    
  return (
    <div>
        <h1>Hello {username} </h1>
      <ul className={styles.backgrounUl}>
        {allHobbies.map((elt, i) => (
          <li key={i}> {elt} </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbiesList
import React from 'react'
import { Link } from "react-router-dom"
import Addbutton from '../assets/add.svg';

const AddButton = () => {
  return (
    <Link to="/note/new" className='floating-button'>
        <img src={Addbutton} alt="add-button" />
    </Link>
  )
}

export default AddButton
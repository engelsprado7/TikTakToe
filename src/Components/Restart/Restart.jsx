import React from 'react'
import './index.css'
import restart from '../../Assets/rotate-solid.svg'
const Restart = (props) => <button className='restart d-flex justify-content-center align-items-center' name={"btn"} onClick={props.onClick}>{props.value} <img className='img-responsive' src={restart} alt={restart}/></button>

export default Restart
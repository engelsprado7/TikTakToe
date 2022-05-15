import React from 'react'
import './index.css'

const Box = (props) => <button className='box' name={props.name} onClick={props.onClick}> {props.value} </button>

export default Box
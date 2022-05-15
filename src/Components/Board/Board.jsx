import React from 'react'
import Box from '../Box/Box'
import './index.css'


const Board = (props) => (
    <div className='board ' >
    {[ ...Array(9)].map((_, pos) => <Box key={pos} name={pos} onClick={()=>props.onClick(pos)} value={props.value[pos]}/>)}
    </div>
)


export default Board
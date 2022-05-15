import React, { Fragment, useState } from 'react'
import './index.css'
import person from './../../Assets/person-solid.svg'
import com from './../../Assets/computer-solid.svg'

const bgWhite = {
    background:"white"
}
const bgNone = {
    background:"none"
}

const Mode = ({onClick})=>{

    const [style1,setStyle1] = useState({})
    const [style2,setStyle2] = useState(bgWhite)

    const handleClick=(state)=>{


        if(state)
        {
          setStyle1(bgWhite)
          setStyle2(bgNone)
        }else{
            setStyle2(bgWhite)
            setStyle1(bgNone)
        }

        onClick(state)
    }

    return (
        <Fragment>
              <div className='mode'>
                <h1>Mode</h1>
                <button  className='btn btn-mode' style={style2} onClick={e => handleClick(false)}><img src={person} alt={person}/> VS <img src={person} alt={person}/></button>
                <button  className='btn btn-mode' style={style1} onClick={e => handleClick(true)}><img src={person} alt={person}/> VS <img src={com} alt={com}/></button>
              </div>
        </Fragment>
    )
}

export default Mode
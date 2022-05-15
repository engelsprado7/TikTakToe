import React, { Fragment, useState } from 'react'
import Board from '../Board/Board'

import Message from '../Message/Message'
import Restart from '../Restart/Restart'
import './index.css'
import useOnClick from '../../CustomHooks/onClick'
import History from '../History/History'


const TikTakToe = ({mode}) => {

    const [board,message, history,restart, onClick] = useOnClick(null, mode)

    return (<Fragment >
        <section className='container-game d-flex justify-content-center align-items-center'>
           <div className=''>
                <Message value={message}/>
                <Board onClick={onClick} value={board} /> 
                <Restart onClick={restart} value={'Restart'} />
            </div>
            <div className='history'>
              <History history={history}/>
            </div>
        </section>
           
          </Fragment>)
}

export default TikTakToe
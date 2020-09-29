import React from 'react'
import Board from '../board'
import Buttons from '../buttons'
import Button from '../button'
import { GAME } from '../../constants'
import './index.css'

const Game = () => {
    return (
        <div className={GAME}>
            <Board />
            <Buttons>
                <Button>Join</Button>
                <Button>Create</Button>
            </Buttons>
        </div>
    )
}

export default React.memo(Game)

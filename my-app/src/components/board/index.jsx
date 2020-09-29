import React from 'react'
import { BOARD } from '../../constants'
import Row from '../row'
import './index.css'
import { useSelector } from 'react-redux'

const Board = () => {
    const board = useSelector((state) => state.board)
    const rows = []

    for (const row in board) {
        rows.push(<Row index={+row} key={row} />)
    }

    return <div className={BOARD}>{rows}</div>
}

export default React.memo(Board)

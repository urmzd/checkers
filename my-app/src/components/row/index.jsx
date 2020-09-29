import React from 'react'
import PropTypes from 'prop-types'
import Square from '../square'
import { ROW } from '../../constants'
import './index.css'
import { useSelector } from 'react-redux'

const Row = (props) => {
    const row = useSelector((state) => state.board[props.index])
    const squares = []

    for (const column in row) {
        squares.push(<Square x={+column} y={props.index} key={column} />)
    }

    return (
        <div key={props.index} className={ROW}>
            {squares}
        </div>
    )
}

Row.propTypes = {
    index: PropTypes.number,
}

export default React.memo(Row)

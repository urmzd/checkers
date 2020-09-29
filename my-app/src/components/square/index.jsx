import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Piece from '../piece'
import { SQUARE, COLORS, ACTIVE } from '../../constants'
import { select } from '../../features/destination'
import './index.css'

const Square = (props) => {
    const { active, color, piece } = useSelector(
        (state) => state.board[props.y][props.x]
    )

    const dispatch = useDispatch()

    const choose = (x, y) => {
        if (!piece) {
            dispatch(select({ x, y }))
        }
    }

    return (
        <div
            className={`${SQUARE} ${
                active ? ACTIVE : `${color ? COLORS.COLOR1 : COLORS.COLOR2}`
            }`}
            onClick={() => choose(props.x, props.y)}
        >
            {piece && <Piece x={props.x} y={props.y} />}
        </div>
    )
}

Square.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}

export default React.memo(Square)

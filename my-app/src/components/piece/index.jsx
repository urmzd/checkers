import React from 'react'
import PropTypes from 'prop-types'
import King from '../king'
import { PIECE, TEAMS, ACTIVE } from '../../constants'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { select } from '../../features/source'

const Piece = (props) => {
    const { active, team, king } = useSelector(
        (state) => state.board[props.y][props.x].piece
    )

    const dispatch = useDispatch()

    const choose = (x, y) => {
        dispatch(select({ x, y }))
    }

    return (
        <div
            className={`${PIECE} ${
                active ? ACTIVE : `${team ? TEAMS.TEAM1 : TEAMS.TEAM2}`
            }`}
            onClick={() => choose(props.x, props.y)}
        >
            {king && <King />}
        </div>
    )
}

Piece.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
}

export default React.memo(Piece)

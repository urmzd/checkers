import React from 'react'
import PropTypes from 'prop-types'
import { BUTTONS } from '../../constants'
import './index.css'

const Buttons = (props) => {
    return <div className={BUTTONS}>{props.children}</div>
}

Buttons.propTypes = {
    children: PropTypes.node,
}

export default React.memo(Buttons)

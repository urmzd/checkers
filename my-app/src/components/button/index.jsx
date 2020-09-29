import React from 'react'
import PropTypes from 'prop-types'
import { BUTTON_TYPE } from '../../constants'
import './index.css'

const Button = (props) => {
    return <button className={BUTTON_TYPE}>{props.children}</button>
}

Button.propTypes = {
    children: PropTypes.string,
}

export default React.memo(Button)

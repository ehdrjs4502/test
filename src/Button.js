import React from "react";
import PropTypes from 'prop-types';
import styled from './Button.module.css';

function Button({text, changeValue}) {
    return (
        <button className={styled.btn} onClick={changeValue}>{text}</button>

    )

    Button.propTypes = {
        text: PropTypes.string.isRequired
    }
}
export default Button;
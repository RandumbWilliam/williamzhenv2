import React from 'react';
import { Btn } from './StyledButton';

const Button = ({ children, fill, disabled, ...buttonProps }) => {
    return (
        <Btn {...buttonProps}>{children}</Btn>
    )
}

export default Button;
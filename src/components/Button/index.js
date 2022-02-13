import React from 'react';
import { Btn } from './StyledButton';

const Button = ({ children, fill, disabled, ...buttonProps }) => {
    return (
        // <Btn fill={fill} disabled={disabled} {...buttonProps}>
        //     <BtnText fill={fill} disabled={disabled}>{children}</BtnText>
        // </Btn>
        <Btn {...buttonProps}>{children}</Btn>
    )
}

export default Button;
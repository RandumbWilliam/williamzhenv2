import styled from 'styled-components';

export const BtnText = styled.span`
    ${props =>
        props.disabled ?
            `color: #ABABAB`
            :
            props.fill ?
                `color: #fff;
                `
                :
                `background-image: linear-gradient(to right, #2f8ae1, #1861a6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                `
    }
`

export const Btn = styled.button`
    display: inline-block;
    overflow: hidden;
    width: 100%;
    position: relative;
    font-weight: bold;
    line-height: 1;
    z-index: 1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;
    cursor: ${props => props.disabled ? `default` : `pointer`};

    &:focus {
        outline: 0;
        outline-color: transparent;
        outline-style: none;
    }

    ${props =>
        props.disabled ?
            `border: none;
            padding: 1.0rem 1.8rem;
            background: #EEEEEE;
            `
            :
            props.fill ?
                `border: none;
                padding: 1.0rem 1.8rem;
                background-size: 200% auto;
                background-image: linear-gradient(to right, #2f8ae1 0%, #1861a6 51%, #2f8ae1 100%);
                
                &:hover {
                    background-position: right center;
                }
                `
                :
                `padding: 0.9rem 1.6rem;
                border: double 2px transparent;
                background-image: linear-gradient(white, white), linear-gradient(to right, #2f8ae1, #1861a6);
                background-origin: border-box;
                background-clip: padding-box, border-box;
                
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 0;
                    height: 100%;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: -1;
                    z-index: -10;
                    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
                    background-image: linear-gradient(to right, #2f8ae1, #1861a6);
                }

                &:hover {
                    &:after {
                        width: 101%;
                    }
                }

                &:hover ${BtnText} {
                    -webkit-text-fill-color: #fff;
                    text-decoration: none;
                }
                `
    }

    font-size: 1.2rem;
    border-width: 0.2rem;
    border-radius: 0.8rem;
`
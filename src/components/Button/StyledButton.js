import styled from 'styled-components';
import { device } from '../../globalStyles';
import { DEFAULT_FONT_SIZE, PRIMARY_COLOR, SECONDARY_COLOR, SM_FONT_SIZE, WHITE_COLOR, XS_FONT_SIZE } from '../Common/StyleElement';

export const Btn = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, ${PRIMARY_COLOR} 0, ${SECONDARY_COLOR} 100%);
  border: 0;
  border-radius: 10px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: ${WHITE_COLOR};
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, ${WHITE_COLOR} 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: ${PRIMARY_COLOR} 0 3px 7px inset;
    transform: translateY(2px);
  }

  @media ${device.xs} {
        height: 36px;
        font-size: ${XS_FONT_SIZE};
    }

  @media ${device.sm} {
        height: 38px;
        font-size: ${XS_FONT_SIZE};
    }

  @media ${device.md} {
        height: 42px;
        font-size: ${SM_FONT_SIZE};
    }

    @media ${device.lg} {
        height: 48px;
        font-size: ${DEFAULT_FONT_SIZE};
    }
`
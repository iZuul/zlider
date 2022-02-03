/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from "react";
import { css, jsx } from "@emotion/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

import IconButton from "../../button/icon-button";

interface ISlideArrowStyle {
  direction: 'left' | 'right',
  bgColor?: string // if you're want to be add interface you can install 'csstype'
  spacing?: number | string,
  fontSize?: number
}

interface SlideArrowProps extends ISlideArrowStyle {
  handleClick: () => void
}

const baseStyle = ({ direction, bgColor, spacing }: ISlideArrowStyle) => css({
  position: 'absolute',
  top: '50%',
  transform: `${direction && 'translateY(-50%)'}`,
  left: `${direction === 'left' ? `${spacing ? spacing : 3 * 10}px` : 'unset'}`,
  right: `${direction === 'right' ? `${spacing ? spacing : 3 * 10}px` : 'unset'}`,
  backgroundColor: `${bgColor ? bgColor : 'white'}`,
  boxShadow: '1px 2px 5px .5px #aaa',
  transition: '0.3s',

  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'white',
    transform: `${direction && `translateY(-55%)`}`,
    left: `${direction === 'left' ? `${spacing ? spacing : 3 * 10 - 5}px` : 'unset'}`,
    right: `${direction === 'right' ? `${spacing ? spacing : 3 * 10 - 5}px` : 'unset'}`,
  }
})

const SlideArrow: FC<SlideArrowProps> = ({ direction, bgColor, spacing, fontSize, handleClick }) => {
  return (
    <IconButton css={baseStyle({ direction, bgColor, spacing, fontSize })} onClick={handleClick}>
      {direction === "left" ? <MdChevronLeft /> : <MdChevronRight />}
    </IconButton>
  );
}

export default SlideArrow;
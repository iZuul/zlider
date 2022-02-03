/** @jsxRuntime classic */
/** @jsx jsx */

import { DOMAttributes, FC } from "react";
import { css, jsx, SerializedStyles } from "@emotion/react";

interface IIconButtonStyle {
  fontSize?: number
}

interface IconButtonProps extends DOMAttributes<HTMLButtonElement>, IIconButtonStyle {
  css?: SerializedStyles
}

const baseStyle = ({ fontSize }: IIconButtonStyle) => css({
  borderRadius: '50%',
  width: `${fontSize || 1 * 2 * 1}rem`,
  height: `${fontSize || 1 * 2 * 1}rem`,
  backgroundColor: 'white',
  border: 0,
  fontSize: `${fontSize || 1 * 1}rem`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: "pointer"
})
 
const IconButton: FC<IconButtonProps> = ({ children, css, fontSize, ...rest }) => {
  return <button css={[baseStyle({ fontSize }), css]} {...rest}>{children}</button>;
}
 
export default IconButton;
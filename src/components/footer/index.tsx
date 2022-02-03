/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from "react";
import { css, jsx } from "@emotion/react";

interface FooterProps {}

const baseStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  
  'small': {
    'a': {
      margin: '0 .5rem'
    },
  },

  '.author': {
    margin: '1rem 0'
  }
})

const Footer: FC<FooterProps> = () => {
  return (
    <footer css={baseStyle}>
      <small>Image API : 
        <a href="https://picsum.photos" target="_blank" rel="noreferrer">https://picsum.photos</a>
      </small>
      <small>Other Lib : 
        <a href="https://emotion.sh" target="_blank" rel="noreferrer">@emotion</a>,
        <a href="https://react-icons.github.io/react-icons" target="_blank" rel="noreferrer">react-icons</a>
      </small>

      <small className="author">
        by <a href="https://zulfadhiaulhaq.vercel.app" target="_blank" rel="noreferrer">Muhammad Zulfa Dhiaulhaq</a>
      </small>
    </footer>
  );
}
 
export default Footer;
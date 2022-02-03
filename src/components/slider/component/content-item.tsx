/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from "react";
import { css, jsx, SerializedStyles } from "@emotion/react";

interface ISlideContentItemStyle {
  img_link?: string
}

export interface SlideContentItemProps {
  content?: any,
  component?: FC,
  customCss?: SerializedStyles
}

const baseStyle = ({ img_link }: ISlideContentItemStyle) => css({
  minHeight: 200,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  margin: '0 .5rem',
  position: 'relative',
  background: `${img_link ? `url(${img_link})` : 'salmon'}`,
  backgroundSize: 'cover',

  '.content': {
    '.content__title': {
      padding: '.5rem 1rem',
      backgroundColor: 'white',
      borderRadius: 25
    }
  }
})

const SlideContentItem: FC<SlideContentItemProps> = ({ content, customCss, children, ...rest }) => {
  const img_link = content?.img_link

  return (
    <div css={[baseStyle({ img_link }), customCss]} {...rest}>
      <div className="content">
        <div className="content__title">{content?.title}</div> 
      </div>
    </div>
  );
}
 
export default SlideContentItem;
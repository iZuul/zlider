/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from "react";
import { css, jsx, keyframes } from "@emotion/react";

interface ISlideContentStyle {
  translateX?: number,
  width?: number,
  loading?: boolean
}

interface SlideContentProps extends ISlideContentStyle {}

const loadingKeyframes = keyframes`
  0% {
    transform: translateX(-110%)
  }
  100% {
    transform: translateX(110%)
  }
`

const baseStyle = ({ translateX, width }: ISlideContentStyle) => css({
  display: "flex",
  height: '100%',
  width: `${width}px`,
  transition: 'transform ease-out 0.5s',
  transform: `translateX(-${translateX}px)`,
})

const loadingStyle = css({
  minHeight: 200,
  backgroundColor: '#ccc',
  borderRadius: 10,
  margin: '0 .5rem',
  position: 'relative',
  overflow: 'hidden',
  
  '.effect-wrapper': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    animation: `${loadingKeyframes} 1.5s infinite`,

    '.effect': {
      width: '50%',
      height: '100%',
      opacity: 0.2,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      transform: 'skewX(-20deg)',
      boxShadow: '0 0 20px 20px rgba(255, 255, 255, 0.05)'
    }
  },
})

const SlideContent: FC<SlideContentProps> = ({ translateX, width, loading, children }) => {
  return loading ? (
    <div css={loadingStyle}>
      <div className="effect-wrapper">
        <div className="effect" />
      </div>
    </div>
  ) : <div css={baseStyle({ translateX, width })}>{children}</div>
}
 
export default SlideContent;
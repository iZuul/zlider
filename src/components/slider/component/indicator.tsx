/** @jsxRuntime classic */
/** @jsx jsx */

import { FC } from 'react'
import { css, jsx } from '@emotion/react'

const width_item = 15

export enum IndicatorTypeEnum {
  CIRCLE = 'circle',
  RECT = 'rect'
} 

export type IndicatorType = 'circle' | 'rect'

interface ISlideIndicatorStyle {
  type?: IndicatorType | string,
  color?: string,
}

export interface SlideIndicatorProps extends ISlideIndicatorStyle {
  contents?: Array<any>,
  currentSlide?: number
}

const switchType = (type?: IndicatorType | string) => {
  const base = {
    borderRadius: '4px',
    height: width_item / 5
  }

  switch(type) {
    case IndicatorTypeEnum.CIRCLE: {
      return {
        borderRadius: '50%',
        height: width_item
      }
    }
    case IndicatorTypeEnum.RECT: return base
    default: return base
  }
}

const indicatorActiveStyle = (active: boolean, type?: IndicatorType | string) => css({
  opacity: active ? 1 : .3,
  scale: `${type === IndicatorTypeEnum.CIRCLE ? active ? .7 : .5 : 'unset'}`
})

const baseStyle = ({ type, color }: ISlideIndicatorStyle) => {
  const { borderRadius, height } = switchType(type)

  const backgroundColor = color || 'black'

  return css({
    display: 'flex',
    position: 'absolute',
    bottom: 15,
    height: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    
    '> div': {
      transition: 'all .3s ease-in',
      borderRadius,
      backgroundColor,
      height,
      width: width_item,
    }
  })
}

const SlideIndicator: FC<SlideIndicatorProps> = ({ contents, type, color, currentSlide }) => {
  return (
    <div css={baseStyle({ type, color })}>
      {contents && contents.length ? (
        contents?.map((item, index) => {
          const active = index === currentSlide
          return (
            <div key={`slide-indicator-${index}`} css={indicatorActiveStyle(active, type)} />
          )
        })
      ) : null}
    </div>
  );
}

export default SlideIndicator;
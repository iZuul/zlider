/** @jsxRuntime classic */
/** @jsxFrag Fragment */
/** @jsx jsx */

import { FC, Fragment, useEffect, useRef } from "react";
import { css, jsx } from "@emotion/react";

import SliderContent from "./content";
import SliderContentItem from "./content-item";
import SlideIndicator, { SlideIndicatorProps } from "./indicator";
import SliderArrow from "./arrow";

import { useWindowSize } from "../../../hooks/window-size-hooks";
import { useContext } from "react";
import SlideContext from "../../../contexts/slider-context";

export interface SlideWrapperProps {
  contents: Array<any>
  ContentComponent?: FC,
  slideShow?: boolean,
  timeout?: number,
  indicator?: boolean,
  navigation?: boolean,
  loading?: boolean
  indicatorProps?: SlideIndicatorProps | string
}

const baseStyle = css({
  position: 'relative',
  minHeight: 150,
  maxHeight: 250,
  width: '100%',
  overflow: 'hidden'
})

const SlideWrapper: FC<SlideWrapperProps> = ({
  contents,
  indicator,
  indicatorProps,
  slideShow = false,
  timeout = 3000,
  navigation = true,
  loading = false,
  ContentComponent
}) => {
  const windowSize = useWindowSize()
  const {
    parentWidth,
    setParentWidth,
    transform,
    setTransform,
    nextSlide,
    prevSlide,
  } = useContext(SlideContext)
  
  const sliderRef = useRef<HTMLDivElement>(null)

  const { translateX, currentSlide } = transform

  /**
   * Action Called
   */
  useEffect(() => {
    if (sliderRef.current) {
      let sliderContentWidth = sliderRef.current.offsetWidth
      setParentWidth(sliderContentWidth)
    }
  }, [windowSize.width, sliderRef, setParentWidth])

  useEffect(() => {
    if(slideShow) {
      setTimeout(() => {
        nextSlide()
      }, timeout);
    }
  }, [slideShow, timeout, nextSlide])

  useEffect(() => {
    if(loading) {
      return setTransform(prev => ({
        ...prev,
        currentSlide: 0,
        translateX: 0,
      }))
    }
  }, [loading, setTransform])

  return (
    <div css={baseStyle} ref={sliderRef}>
      {loading ? (
        <SliderContent loading={true} translateX={translateX} width={parentWidth * contents.length} />
      ) : (
        <Fragment>
          <SliderContent translateX={translateX} width={parentWidth * contents.length}>
            {
              contents.map((content, index) => (
                <SliderContentItem content={content} key={index} component={ContentComponent} />
              ))
            }
          </SliderContent>
          {indicator ? <SlideIndicator contents={contents} currentSlide={currentSlide} {...indicatorProps} /> : null }
          {navigation ? (
            <Fragment>
              <SliderArrow direction="left" handleClick={prevSlide} />
              <SliderArrow direction="right" handleClick={nextSlide} />
            </Fragment>
          ): null }
        </Fragment>
      )}
    </div>
  );
}

export default SlideWrapper;
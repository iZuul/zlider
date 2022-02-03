/** @jsxRuntime classic */
/** @jsx jsx */

import { ChangeEvent, FC, useState } from "react";
import { css, jsx } from "@emotion/react";
import { IndicatorType, IndicatorTypeEnum } from "../../components/slider/component/indicator";

interface SlideOptonsProps {
  indicator: boolean,
  type: IndicatorType | string
  color: string,
  slide_show: boolean,
  timeout: number,
  loading: boolean,
  navigation: boolean
  setState: (callback: any) => void
}

const baseStyle = css({
  marginBottom: "1rem",

  '.wrapper': {
    padding: ".5rem 0",
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',

    '.indicator__type': {
      display: 'flex',
      gap: 5
    },

    '.indicator___colorpicker': {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    },


    '.slide-config__timeout': {
      display: 'flex',
      alignItems: 'center',
      gap: 5,

      'input[name=timeout]': {
        width: 100
      }
    }
  }
})

const SlideOptions: FC<SlideOptonsProps> = ({
  indicator,
  type: indicatorType,
  color,
  slide_show,
  timeout,
  loading,
  navigation,
  setState
}) => {
  const [typingTimout, setTypingTimeout] = useState<any>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target

    let field_value: any

    if (type === 'checkbox') field_value = checked
    if (type === 'text') field_value = value
    if (type === 'radio') field_value = value
    if (type === 'color') field_value = value

    if (name === 'timeout') {
      setState((prev: any) => ({ ...prev, loading: true }))
      setState((prev: any) => ({ ...prev, timeout: value }))

      if (typingTimout) clearTimeout(typingTimout)

      setTypingTimeout(setTimeout(() => {
        setState((prev: any) => ({
          ...prev,
          loading: false,
        }))
      }, 3000))
      return
    }

    setState((prev: any) => ({
      ...prev,
      [name]: field_value,
    }))
  }

  return (
    <div css={baseStyle}>
      <div>Indicator Setting</div>
      <div className="wrapper">
        <div>
          <input type="checkbox" name="indicator" id="indicator" checked={indicator} onChange={(e) => handleChange(e)} />
          <label htmlFor="indicator">Indicator</label>
        </div>
        <div className="indicator__type">
          <input type="radio" name="type" id="cirlce" value={IndicatorTypeEnum.CIRCLE} checked={indicatorType === IndicatorTypeEnum.CIRCLE} onChange={(e) => handleChange(e)} disabled={!indicator} />
          <label htmlFor="cirlce">Circle</label>
          <input type="radio" name="type" id="rect" value={IndicatorTypeEnum.RECT} checked={indicatorType === IndicatorTypeEnum.RECT} onChange={(e) => handleChange(e)} disabled={!indicator} />
          <label htmlFor="rect">Rectangle</label>
        </div>
        <div className="indicator___colorpicker">
          <input type="color" id="colorpicker" name="color" value={color} onChange={(e) => handleChange(e)} disabled={!indicator} />
          <label htmlFor="color">Color Indicator</label>
        </div>
      </div>
      <hr />
      <div>Slide Setting</div>
      <div className="wrapper">
        <div>
          <input type="checkbox" name="navigation" id="navigation" checked={navigation} onChange={(e) => handleChange(e)} />
          <label htmlFor="navigation">Navigation</label>
        </div>
        <div>
          <input type="checkbox" name="slide_show" id="slide_show" checked={slide_show} onChange={(e) => handleChange(e)} />
          <label htmlFor="slide_show">Slide Show</label>
        </div>
        <div className="slide-config__timeout">
          <input type="number" name="timeout" id="timeout" value={timeout} onChange={(e) => handleChange(e)} />
          <label htmlFor="timeout">Timeout</label>
        </div>
        <div className="slide-config__loading">
          <input type="checkbox" name="loading" id="loading" checked={loading} onChange={(e) => handleChange(e)} />
          <label htmlFor="loading">Loading</label>
        </div>
      </div>
    </div>
  );
}

export default SlideOptions;
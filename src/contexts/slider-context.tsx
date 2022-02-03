import { Dispatch, useCallback, useState } from "react"
import { createContext, FC } from "react"

interface SlideContextProps {
  contents: Array<any>,
  transform: {
    currentSlide: number,
    translateX: number
  },
  setTransform: Dispatch<React.SetStateAction<{
    currentSlide: number;
    translateX: number;
  }>>,
  parentWidth: number,
  setParentWidth: Dispatch<React.SetStateAction<number>>,
  nextSlide: () => void,
  prevSlide: () => void
}

const SlideContext = createContext<SlideContextProps>({
  contents: [],
  parentWidth: 0,
  setParentWidth: () => ({}),
  transform: {
    currentSlide: 0,
    translateX: 0
  },
  setTransform: () => ({}),
  nextSlide: () => {},
  prevSlide: () => {}
})

interface SlideContextProviderProps {
  contents: Array<any>
}

export const SlideContextProvider: FC<SlideContextProviderProps> =  ({ contents, children }) => {
  const [parentWidth, setParentWidth] = useState(0)
  const [transform, setTransform] = useState({
    currentSlide: 0,
    translateX: 0
  })

  const { currentSlide } = transform

  /**
   * Slide Function
   */
   const nextSlide = useCallback(() => {
     console.log('clicked')
    if (currentSlide === contents?.length - 1) {
      return setTransform(prev => ({
        ...prev,
        currentSlide: 0,
        translateX: 0
      }))
    }

    setTransform(prev => ({
      ...prev,
      currentSlide: currentSlide + 1,
      translateX: (currentSlide + 1) * parentWidth
    }))
  }, [currentSlide, contents?.length, parentWidth])

  const prevSlide = useCallback(() => {
    if (currentSlide === 0 && contents?.length) {
      return setTransform(prev => ({
        ...prev,
        currentSlide: contents.length - 1,
        translateX: (contents.length - 1) * parentWidth
      }))
    }

    setTransform(prev => ({
      ...prev,
      currentSlide: currentSlide - 1,
      translateX: (currentSlide - 1) * parentWidth
    }))
  }, [currentSlide, contents?.length, parentWidth])


  /**
   * Return Value
   */
  const value = {
    contents,
    transform,
    setTransform,
    parentWidth,
    setParentWidth,
    nextSlide,
    prevSlide
  }
  
  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  )
}

export default SlideContext
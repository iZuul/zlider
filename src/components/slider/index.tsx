import { FC } from "react";

import SlideWrapper, { SlideWrapperProps } from "./component/wrapper";

import { SlideContextProvider } from "../../contexts/slider-context";

interface SlideProps extends SlideWrapperProps {}
 
const Slide: FC<SlideProps> = ({ ...rest }) => {
  return (
    <SlideContextProvider contents={rest.contents}>
      <SlideWrapper {...rest} />
    </SlideContextProvider>
  );
}
 
export default Slide;
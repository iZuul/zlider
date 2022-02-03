/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import { useState } from 'react';
import Footer from './components/footer';

import Slider from './components/slider';
import SliderOptions from './modules/options';

const contents_img = [
  {
    id: "1",
    title: "Slide 1",
    img_link: "https://picsum.photos/1024/200?blur=10"
  },
  {
    id: "2",
    title: "Slide 2",
    img_link: "https://picsum.photos/1024/200"
  },
  {
    id: "3",
    title: "Slide 3",
    img_link: "https://picsum.photos/1024/200?grayscale"
  }
]

const contents = contents_img.map(({ id, title }) => ({ id, title }))

const baseWrapper = css({
  padding: '1rem',

  'header': {
    textAlign: 'center'
  },

  'section': {
    'margin': '1rem 0',

    '> .main__subtitle': {
      fontWeight: 'bold',
      fontSize: '1rem'
    }
  },
})

function App() {
  const [state, setState] = useState({
    indicator: true,
    type: 'circle',
    color: '#000',
    slide_show: false,
    timeout: 3000,
    navigation: true,
    loading: false
  })

  const { indicator, type, color, slide_show, navigation, timeout, loading } = state
  
  return (
    <div css={baseWrapper}>
      <header>
        <h1>Zlider</h1>
      </header>
      <main>
        <section>
          <div className="main__subtitle">Playground</div>
          <SliderOptions {...state} setState={setState} />
          <Slider
            loading={loading}
            navigation={navigation}
            indicator={indicator}
            slideShow={slide_show}
            timeout={timeout}
            contents={contents}
            indicatorProps={{
              type,
              color
            }}
          />
        </section>
        <section>
          <div className="main__subtitle">Image Slider</div>
          <Slider
            navigation={true}
            indicator={true}
            slideShow={true}
            contents={contents_img}
          />
        </section> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

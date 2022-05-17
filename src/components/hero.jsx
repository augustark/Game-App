import React from 'react'
import styled from 'styled-components'
import heroBG from '../assets/hero-bg.png'
import heroPoster from '../assets/hero-poster.png'
import heroPreview from '../assets/hero-preview.png'

import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

function Hero() {
  return (
    <HeroContainer>
      <Container>
        <Controller>
          <IoChevronBack/>
          <IoChevronForward/>
        </Controller>
        <ImageContainer>
          <img src={heroBG} alt='' style={{ width: '100%', maxHeight: '980px', objectPosition: 'top'}}/>
        </ImageContainer>
        <SlideInfo>
          <ImageContainer>
            <img src={heroPoster} alt=''/>
          </ImageContainer>
          <InfoText>
            <h1>Daredevil</h1>
            <p>Massa consectetur et in eros, egestas lobortis faucibus vitae. Pellentesque adipiscing neque nibh commodo rhoncus nec congue nascetur. Consectetur nec egestas nibh elementum rhoncus ornare semper nisl. Odio ultrices leo sed pharetra, nullam non vitae ac pretium. </p>
          </InfoText>
          <ImageContainer>
            <img src={heroPreview} alt='' className='preview'/>
          </ImageContainer>
        </SlideInfo>
      </Container>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #000;
`
const Container = styled.div`
  position: relative;
  max-height: 1000px;
  height: 900px;
`

const SlideInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  padding: 1em;
  gap: 2em;
  color: #FFF;
  max-width: 1400px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`

const InfoText = styled.div`
  align-self: center;
  h1 {
    margin: 0;
    font-size: 3.125rem;
  }
  p {
    line-height: 150%;
  }
`

const Controller = styled.div`
  color: #888585;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  bottom: 50%;
  z-index: 1;
  margin: 0 5rem;

  svg {
    width: 50px;
    height: 50px;

    &:hover {
      color: #FFF;
    }
  }
`
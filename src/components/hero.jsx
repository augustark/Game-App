import React, { useState } from 'react'
import styled from 'styled-components'

import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import Slide from './slide'

function Hero({ slides }) {
  const [current, setCurrent] = useState(0)

  console.log(slides)
  
  const nextSlide = () => setCurrent(current === slides.length -1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1)

  if (!Array.isArray(slides) || slides.length <= 0) return null

  return (
    <HeroContainer>
      <Container>
        <Controller>
          <IoChevronBack onClick={prevSlide}/>
          <IoChevronForward onClick={nextSlide}/>
        </Controller>
        {slides.map((game, index) => current === index && (<AnimateSlide key={game.id} {...game} current={current === index}/>))}
      </Container>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: radial-gradient(circle, rgba(85,85,85,1) 0%, rgba(20,20,20,1) 100%);
  position: relative;
`
const Container = styled.div`
  max-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const AnimateSlide = styled(Slide)`
  opacity: ${props => props.current ? 1 : 0};
  transition-duration: ${props => props.current ? '1s' : '1s ease'};
  transform: scale(${props => props.current ? 1 : 0.92});
`
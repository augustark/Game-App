import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import poster from '../assets/hero-poster.png'

function GameCard() {
  return (
    <Link to={`/games/:id`}>
      <Card>
        <ImageContainer>
          <img src={poster} alt=''/>
        </ImageContainer>
        <h3>Daredevil</h3>
        <span>Netflix</span>
      </Card>
    </Link>
  )
}

export default GameCard

const Card = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    margin: 0;
  }
`

const ImageContainer = styled.div`
  max-width: 260px;
  max-height: 390px;

  img {
    width: 100%;
    height: 100%;
  }
`
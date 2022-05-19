import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import poster from '../assets/hero-poster.png'
import Loading from './loading'

import { useGetCompanyQuery } from '../features/gameApi/gameApi'

function GameCard({ item }) {
  // const companyIds = item.involved_companies.map((company) => `id = ${company}`).join(' | ')
  // const { data, isFetching } = useGetCompanyQuery(companyIds)

  // if (isFetching) return <Loading/>

  return (
    <StyledLink to={`/games/${item.id}`}>
      <Card>
        <ImageContainer>
          <img src={item.cover.url.replace('t_thumb', 't_1080p')} alt=''/>
        </ImageContainer>
        <h3>{item.name}</h3>
        <span>{item.genres[0].name}</span>
      </Card>
    </StyledLink>
  )
}

export default GameCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 150ms ease;

  & h3 {
    margin: 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 250ms ease;
  }
`

const ImageContainer = styled.div`
  max-width: 600px;
  max-height: 390px;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
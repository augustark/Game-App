import React from 'react'
import styled from 'styled-components'

import newsImage from '../assets/florian-olivo.jpg'

function NewsCard({ item }) {
  return (
    <Anchor href={item.url} target='_blank' rel='noreferrer'>
      <Card img={item?.image?.contentUrl || newsImage}>
        <Source>Source: {item.provider[0].name}</Source>
        <Headline>{item.name}</Headline>
        <Description>{item.description}</Description>
      </Card>
    </Anchor>
  )
}

export default NewsCard

const Anchor = styled.a`
  text-decoration: none;
  color: #FFF;
`

const Card = styled.div`
  background-color: #333;
  background-blend-mode: multiply;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 600px;
  height: 390px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2em;

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(255,255,255,0.25);
  }
`

const Headline = styled.h4`
  margin: 0;
`

const Source = styled.span`
  justify-self: flex-start;
  align-self: flex-end;
  flex: 1;
`

const Description = styled.p`
  line-height: 125%; 
`
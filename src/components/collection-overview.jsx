import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function CollectionOverview({ title, link, data, element }) {
  return (
    <Overview>
      <Header>
        <Title>{title}</Title>
        <More to={`/${link}`}>View more</More>
      </Header>
      <Preview>
        {data.map((item) => (
          React.cloneElement(element, { item })
        ))}
      </Preview>
    </Overview>
  )
}

export default CollectionOverview

const Overview = styled.div`
  padding: 1em;
`

const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1em;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1``
const More = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;

  cursor: pointer;
  position: relative;
  
  &:hover {
    transition: 150ms ease-in;
    &::after {
      content: '';
      position: absolute;
      bottom: -20%;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background: #000;
    }
  }
`
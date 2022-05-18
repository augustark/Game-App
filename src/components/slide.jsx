import React from 'react'
import styled from 'styled-components'
// import ReactPlayer from 'react-player/youtube'

function Slide({ screenshots, cover, name, storyline, summary, videos }) {
  return (
    <>
      <Image>
        <img src={screenshots[0].url.replace('t_thumb', 't_1080p')} alt=''/>
      </Image>
      <SlideInfo>
        <div>
          <img 
            src={cover.url.replace('t_thumb', 't_cover_big')} alt=''/>
        </div>
        <InfoText>
          <h1>{name}</h1>
          <p>{ summary.length <= 375 ? summary : storyline > 375 ? summary : storyline }</p>
        </InfoText>
        <VideoContainer>
          {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${videos[0].video_id}`} controls width='510px' height='286px'/> */}
        </VideoContainer>
      </SlideInfo>
    </>
  )
}

export default Slide

const SlideInfo = styled.div`
  position: absolute;
  bottom: 5%;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 2em;
  color: #FFF;
  max-width: 1400px;
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

const VideoContainer = styled.div`
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(255,255,255,0.25);
  }
`

const Image = styled.div`
  width: 100vw;
  height: 100vh;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
`
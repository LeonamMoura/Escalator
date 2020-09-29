import React from 'react'
import styled from 'styled-components'
import HeaderBg from '../../components/assets/header-bg.png'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: #f2f2f2;

  header {
    max-width: 100vw;
    height: 35vh;

    background: url(${HeaderBg});
    color: #f2f2f2;

    font-weight: 700;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      text-align: center;
    }

    button {
      cursor: pointer;
      width: 10%;
      height: 40px;

      border: none;

      background: #f2f2f2;

      :hover {
        transition: 0.3s;
        background: #1d1e1d;
        color: #f2f2f2;
      }
    }
  }

  h1 {
    color: #1d1e1d;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  div {
    cursor: pointer;
    margin: 8px;

    :hover {
      transition: 0.2s;
      transform: scale(0.9);
    }

    :active {
      filter: invert(50%);
    }
  }

  .nature {
    flex: 0 1 30%;
    background-color: red;
    height: 300px;
  }

  .daily {
    flex: 1 1 60%;
    height: 300px;
    background: blue;
  }

  .together {
    flex: 1 1 100%;
    height: 300px;
    background-color: yellow;
  }

  .analysis {
    flex: 1 1 60%;
    height: 300px;
    background: green;
  }

  .pictures {
    flex: 1 1 30%;
    height: 300px;
    background: black;
  }
`

export const HomePage = () => {
  return (
    <Container>
      <header>
        <p>Logo</p>
        <div>
          <h1>We have ideas to</h1>
          <h1>growth you business</h1>
        </div>

        <button>See Now</button>
      </header>

      <Flex>
        <div className='nature' />
        <div className='daily' />
        <div className='together' />
        <div className='analysis' />
        <div className='pictures' />
      </Flex>
    </Container>
  )
}

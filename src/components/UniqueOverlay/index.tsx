import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Query</a>
          </li>
          <li>
            <a href="#">There's a bigger plan <br></br> behind all of this</a>
          </li>
          <li>
            <a href="https://twitter.com/Zagoguic">by MecBonjourno</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay

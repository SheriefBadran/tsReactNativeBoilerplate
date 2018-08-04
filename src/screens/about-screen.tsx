import * as React from 'react'
import styled from 'styled-components/native'

const WelcomeText = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 10px;
`
const InstructionsText = styled.Text`
  text-align: center;
  margin-bottom: 5px;
  color: #333333;
`

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`

export const About = () => (
  <Container>
    <WelcomeText>
      About this boilerplate.
    </WelcomeText>
    <InstructionsText>
      This boilerplate is set up with Typescript, ts-config-beanloop, styled components and Apollo GraphQL
    </InstructionsText>
  </Container>
)
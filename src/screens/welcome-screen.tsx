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
  background-color: #f5fcff;
`

export const Welcome = () => (
  <Container>
    <WelcomeText>Welcome to React Native!</WelcomeText>
    <InstructionsText>To get started, edit App.js</InstructionsText>
    <InstructionsText>
      'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu'
    </InstructionsText>
  </Container>
)

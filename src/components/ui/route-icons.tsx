import * as React from 'react'
import {Icon} from 'react-native-elements'
// import styled from 'styled-components/native'

// export const TabBarIconImage = styled.Image`
//   width: 38;
//   height: 38;
// `

export const HomeIcon = ({focused}) =>
  focused
    ? <Icon name='home' color='black' />
    : <Icon  name='home' color='grey' />

export const AboutIcon = ({focused}) =>
  focused
    ? <Icon  name='description' color='black' />
    : <Icon  name='description' color='grey' />

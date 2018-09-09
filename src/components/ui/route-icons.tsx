import * as React from 'react'
import {Icon} from 'react-native-elements'

export const HomeIcon = ({focused}) =>
  focused
    ? <Icon name='home' color='black' />
    : <Icon  name='home' color='grey' />

export const AboutIcon = ({focused}) =>
  focused
    ? <Icon  name='description' color='black' />
    : <Icon  name='description' color='grey' />

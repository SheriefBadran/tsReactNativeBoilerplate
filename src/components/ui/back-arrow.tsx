import * as React from 'react'
import {Platform} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const backArrow = ({onPress}) =>
  Platform.OS === 'android' ? (
    <Icon
      name="arrow-back"
      style={{marginLeft: 16}}
      size={30}
      onPress={onPress}
    />
  ) : (
    undefined
  )

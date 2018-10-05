import * as React from 'react'
import {Button, View} from 'react-native'
import {Routes} from '../entities'

export const SignedOut = ({navigation}) => (
  <View style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingVertical: 20,
  }}>
    <Button
      color='#03A9F4'
      title='SIGN IN'
      onPress={() => navigation.navigate(Routes.SignedIn)}
    />
</View>
)

import * as React from 'react'
import {Button, View} from 'react-native'

// export const SignedOut = ({navigation}) =>
//   <View style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     paddingVertical: 20,
//   }}>
//     <Button
//       style={{
//         backgroundColor: '#03A9F4'
//       }}
//       title='SIGN IN'
//       onPress={() => navigation.navigate('SignedIn')}
//     />
//   </View>

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
      onPress={() => navigation.navigate('SignedIn')}
    />
</View>
)

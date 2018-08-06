import {
  Platform,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

export const menuLeft = ({navigation}) =>
  Platform.OS === 'android'
    ? <Icon name='menu' style={{marginLeft: 16}} size={30} onPress={() => navigation.navigate('DrawerOpen')} />
    : undefined
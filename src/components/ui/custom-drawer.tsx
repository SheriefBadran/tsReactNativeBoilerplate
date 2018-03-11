import * as React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {
  DrawerItems,
  SafeAreaView,
} from 'react-navigation'
import styled from 'styled-components/native'
import {PaddedBox} from './layout'

const YellowContainer = styled.View`
  height: 60;
  background-color: #FEEC55;
  margin-bottom: 16px;
`

const DividerLine = styled.View`
  border-bottom-color: #000000;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`
/**
 * Future proof menu buttons with diffrent Touchable:s for diffrent os:es
 */

export const CustomeDrawer = (props) =>
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <YellowContainer />
      <DrawerItems {...props} />
      <PaddedBox vertical={16}>
        <DividerLine />
      </PaddedBox>
    </SafeAreaView>
  </ScrollView>
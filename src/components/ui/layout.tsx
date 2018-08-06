import {Platform} from 'react-native'
import styled from 'styled-components/native'

export const theme = {
  titleFontFamily: Platform.OS === 'android' ? 'Roboto' : 'Georgia',
  fontFamily: 'Arial'
}
const fontSize = Platform.OS === 'android' ? 20 : 16

export const headerStyle = {
  backgroundColor: '#FFFFFF',
}

export const headerTitleStyle = {
  fontFamily: theme.fontFamily,
  fontSize,
  fontWeight: '400',
  lineHeight: 27,
  color: '#4D4D4D',
}

export type PaddedBoxProps = {
  horizontal?: number
  vertical?: number
  top?: number
  left?: number
  right?: number
  bottom?: number
  style?: any
}

export const PaddedBox: React.StatelessComponent<PaddedBoxProps> = styled.View`
  ${({horizontal = 0}: PaddedBoxProps) => `padding-horizontal: ${horizontal}px;`}
  ${({vertical = 0}: PaddedBoxProps) => `paddingVertical: ${vertical}px;`}
  ${({top = 0}: PaddedBoxProps): any => top ? `padding-top: ${top}px;` : undefined}
  ${({left = 0}: PaddedBoxProps): any => left ? `padding-left: ${left}px;` : undefined}
  ${({right = 0}: PaddedBoxProps): any => right ? `padding-right: ${right}px;` : undefined}
  ${({bottom = 0}: PaddedBoxProps): any => bottom ? `padding-bottom: ${bottom}px;` : undefined}
` as any

export const capitalizeString = (text: string) =>
  typeof text === 'string'
  ? `${text[0].toUpperCase()}${text.substring(1)}`
  : ''
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React, {FC} from 'react'

interface IButton {
  onPress: () => void
  title: string
  color?: [string, string]
}

const Button: FC<IButton> = ({onPress, title , color=['yellow', '#FBBF24']}) => {
  return (
    <TouchableHighlight style={styles.forButton} onPress={onPress} underlayColor={color[1]}>
      <Text style={styles.forText} >{title}</Text>
    </TouchableHighlight>

)
}

const styles = StyleSheet.create({
  forButton: {
    backgroundColor: 'orange',
    width: '80%',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },
  forText: {
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',

  }
})
export default Button

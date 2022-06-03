import React, {FC} from 'react';
import {ScrollView, Text, View, StyleSheet} from "react-native";


interface ILayout {
  isScrollView?: boolean
}
const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
      <View style={styles.forLayout}>{isScrollView ? <ScrollView>{children}</ScrollView>: children}</View>
  )
}
const styles = StyleSheet.create({
  forLayout: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default Layout;

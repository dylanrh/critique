import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      {/* <View>
        <Text style={styles.headerText}>Critique</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // width: '100%',
    // height: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
  },
  icon: {
    position: 'absolute',
    color: 'orange',
    left: -50,
  },
});

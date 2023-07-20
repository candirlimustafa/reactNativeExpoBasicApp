import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './section.style'
import {COLORS, SIZES} from '../../../constants'
import { isLoading } from 'expo-font'

const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CV</Text>
      </View>

      <View style={styles.cardsContainer}>
        
      <Image
        source={require('C:/Users/mstfc/Desktop/REACT1/projects/reactNativeExpo/assets/cv3.png')}
        style={{ width: 300, height: 400 }}
      />
        
      </View>
    </View>
  )
}

export default Popularjobs
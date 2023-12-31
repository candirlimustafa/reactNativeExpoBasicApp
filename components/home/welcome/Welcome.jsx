import React, { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
} from 'react-native'
import { useRouter } from 'expo-router'


import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Hakkımda", "Eğitimim", "Tecrübelerim", "Link"];

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setAcvtiveJobType] = useState("Hakkımda");

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}> Hello, I am Mustafa</Text>
      <Text style={styles.welcomeMessage}> Welcome, What's up</Text>
    </View>
    
    <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='What are you looking for?' 
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { } }>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

        <View style={styles.tabsContainer}>
          <FlatList 
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() =>{
                setAcvtiveJobType(item);
                router.push('/search/${item}')
              }}
              >
                <Text style= {styles.tabText(activeJobType, item)}>{item} </Text>
              </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small}}
        horizontal


        />
          </View>


  </View>
  )
        }
  


export default Welcome
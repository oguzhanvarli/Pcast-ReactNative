import {  SafeAreaView, Image, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseService } from '../../network/services/baseService'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import styles from './browse.style'
import { Feather } from '@expo/vector-icons';
import Scroll from '../../components/Scroll/Scroll'
import { FlatList } from 'react-native-web'



export default function Browse({ navigation }) {
  const [podcastList, setPodcastList] = useState([])
  const [mainData, setMainData] = useState([])

  useEffect(() => {
    getPodcasts();
  }, [])

  
  const getPodcasts = async () => {
    const data = await baseService.get('/search')
    setPodcastList(data)
    setMainData(data)
  }
  const onSearch = (text) => {
    const filteredList = mainData.filter(podcast => {
      const searchText = text.toLowerCase();
      const title = podcast.title.toLowerCase();
      return title.indexOf(searchText) > -1;
    })
    setPodcastList(filteredList);
  }
  const onSelect = (item) => {
    navigation.navigate('Podcast', { item })
  }
  const renderPodcast = ({ item }) => <PodcastCard item={item} onSelect={() => onSelect(item)} />
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View><Image style={styles.logo} source={require('../../img/logo.png')} />
            <Text style={styles.title}>Browse</Text>
            <View style={styles.searchContainer}>
              <TextInput style={styles.search} placeholder='Ara..' onChangeText={(text) => onSearch(text)} />
              <Feather name="search" size={22} color="white" style={styles.searchIcon} />
            </View>
            <Scroll style={{ height: 60 }} />
            <Text style={styles.browseText}>Podcast(2)</Text>
          </View>}
        data={podcastList} renderItem={renderPodcast}
        keyExtractor={(item) => item.title} />
    </SafeAreaView>
  )
}


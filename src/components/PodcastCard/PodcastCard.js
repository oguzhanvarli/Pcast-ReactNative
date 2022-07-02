import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './PodcastCard.style'
import { Feather } from '@expo/vector-icons';

export default function PodcastCard({ item, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.group}>
        <Text style={styles.podcastInfo}>23.05.2019</Text>
        <Feather name="clock" size={17} color="grey" style={styles.podcastIcon} />
        <Text style={styles.podcastInfo}>24:15:05</Text>
      </View>
          <Text style={styles.authorInfo}>{item.author}</Text>
          <Image style={styles.authorImage} source={require('../../img/avatar.png')} />
        <TouchableOpacity title='' onPress={() => onSelect()} style={styles.playContainer}>
          <Image style={styles.playButton} source={require("../../img/Play.png")} />
        </TouchableOpacity>
    </View>
  )
}


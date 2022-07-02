import { ImageBackground, SafeAreaView, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import styles from './Podcast.style'
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import * as MediaLibrary from 'expo-media-library';
const podcastObj = new Audio.Sound();

export default function Podcast(prop) {
    const podcast = prop.route.params.item
    const [myButton, setMyButton] = useState("pausecircle")
    const [likeButton, setLikeButton] = useState('grey')
    const [dislikeButton, setDislikeButton] = useState('grey')
    const [positionMillis, setPositionMillis] = useState(0)
    const [durationMillis, setDurationMillis] = useState(0)
    const [likeCount, setLikeCount] = useState(podcast.likes)
    const [dislikeCount, setDisikeCount] = useState(podcast.dislikes)

    useEffect(() => {
        startPodcast();
        return () => {
            podcastObj._loaded = false;
        }
    }, [])

    const goBack = () => {
        podcastObj.setStatusAsync({ shouldPlay: false })
        prop.navigation.goBack();
    }
    const startPodcast = async () => {
        await podcastObj.loadAsync({ uri: podcast.audio_url }, { shouldPlay: true })
        podcastObj.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    }
    const stopResumePodcast = async () => {
        if (myButton === "pausecircle") {
            setMyButton("playcircleo")
            await podcastObj.setStatusAsync({ shouldPlay: false })
        }
        else {
            setMyButton('pausecircle')
            await podcastObj.playAsync();
        }
    }
    const handleLike = () => {
        if (likeButton === 'grey') {
            setLikeButton('green')
            dislikeButton === 'red' ? setDislikeButton('grey'): null
            setLikeCount(podcast.likes + 1)
        }
        else{
            setLikeButton('grey')
            setLikeCount(podcast.likes)
        }
    }
    const handleDislike = () => {
        if (dislikeButton === 'grey') {
            setDislikeButton('red')
            likeButton === 'green' ? setLikeButton('grey'): null
            setDisikeCount(podcast.dislikes + 1)
        }
        else{
            setDislikeButton('grey')
            setDisikeCount(podcast.dislikes)
        }
    }
    const onPlaybackStatusUpdate = (playbackStatus) => {
      if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
        
        const playbackDuration = playbackStatus.durationMillis
        const playbackPosition = playbackStatus.positionMillis
        setPositionMillis(playbackPosition)
        setDurationMillis(playbackDuration)
      }
    }
    const getMillis = () => {
      if (durationMillis !== null && positionMillis !== null) {
        return positionMillis/durationMillis
      }else{
        return 0
      }
    }
    const millisToMinutesAndSeconds = (milis) => {
        var minutes = Math.floor(milis / 60000);
      var seconds = ((milis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    const wrapBack = async() => {
        await podcastObj.setStatusAsync({shouldPlay: true, positionMillis: positionMillis - 10000})
        myButton === 'playcircleo' ? setMyButton('pausecircle') : null
    }
    const wrapForward = async() => {
      await podcastObj.setStatusAsync({shouldPlay: true, positionMillis: positionMillis + 10000})
      myButton === 'playcircleo' ? setMyButton('pausecircle') : null
  } 
    

    return (
        <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../img/podcastBack.png')} style={styles.image}>
          <Image source={require('../../img/Author1.png')} style={styles.author1} />
          <Image source={require('../../img/Author2.png')} style={styles.author2} />
          <View style={styles.topIcons}>
            <AntDesign name="arrowleft" size={30} color="white" onPress={() => goBack()} />
            <Feather name="menu" size={30} color="white" />
          </View>
          <View style={styles.header}>
            <View style={styles.player}>
              <FontAwesome name="rotate-left" size={24} color="white" style={styles.playerCicle} onPress={() => wrapBack()} />
              <AntDesign style={styles.stopBotton} name={myButton} size={50} color="red" onPress={() => stopResumePodcast()} />
              <FontAwesome name="rotate-right" size={24} color="white" style={styles.playerCicle} onPress={() => wrapForward()}/>
            </View>
            <View style={styles.gora}>
              <Text style={styles.goraTitle}>{podcast.title}</Text>
              <Text style={styles.goraAuthor}>{podcast.author}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bottom}>
          <Slider
            style={styles.timeLine}
            minimumValue={0}
            maximumValue={1}
            value={getMillis()}
            minimumTrackTintColor="#3369FF"
            maximumTrackTintColor="white"
            thumbTintColor='#3369FF'
          />
          <View style={styles.info}>
            <AntDesign name="like2" size={24} color={likeButton} style={styles.likeButton} onPress={() => handleLike()} />
            <Text style={styles.likeValue}>{likeCount}</Text>
            <Text style={styles.time}>{millisToMinutesAndSeconds(positionMillis)}</Text>
            <Text style={styles.dislikeValue}>{dislikeCount}</Text>
            <AntDesign name="dislike2" size={24} color={dislikeButton} style={styles.dislikeButton} onPress={() => handleDislike()} />
            <View style={styles.seperator} />
          </View>
          <View style={styles.bottomButtons}>
            <MaterialCommunityIcons name="waveform" size={24} color="grey" style={styles.episodeButton} />
            <Text style={styles.episode}>Episode</Text>
            <Feather name="download" size={20} color="gray" style={styles.downloadButton} />
            <Text style={styles.downloadMb}>{podcast.file_size}mb</Text>
            <Entypo name="dots-three-vertical" size={20} color="white" style={styles.secondMenu} />
          </View>
          <Text style={styles.description}>{podcast.description}</Text>
  
        </View>
      </SafeAreaView >
    )
}
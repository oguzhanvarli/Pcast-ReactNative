import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import styles from './Scroll.style'
import { Entypo,Fontisto,Feather,Ionicons  } from '@expo/vector-icons';

export default function Scroll() {

    return (
        <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <TouchableOpacity style={styles.button}>
                <Entypo name="folder-music" size={20} color="grey" />
                <Text style={styles.text}>Categories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Fontisto name="world-o" size={24} color="grey" />
                <Text style={styles.text}>Topics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Feather name="smile" size={20} color="grey" />
                <Text style={styles.text}>Authors</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Feather name="mic" size={20} color="grey" />
                <Text style={styles.text}>Podcast</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Feather name="box" size={20} color="grey" />
                <Text style={styles.text}>Episodes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Ionicons name="chatbox" size={20} color="grey" />
                <Text style={styles.text}>Other</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

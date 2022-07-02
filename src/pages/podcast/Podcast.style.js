import { StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container : {
        flex:1
    },
    image : {
        margin:0,
        padding:0,
        position: 'relative',
        width: windowWidth,
        height: 374,
        top:0,
        left: 0,
        backgroundColor: 'rgba(0,0,0, 0.85)',
        flex: 3
    },
    author1:{
        position:'absolute',
        width: 126,
        height:220,
        left: -21,
        top:150
    },
    author2:{
        position:'absolute',
        width: 102,
        height:220,
        left: 282,
        top:150
    },
    topIcons: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        left: 32,
        top: 64.29,
        width: 309,
        height: 17.41
    },
    player: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        justifyContent: 'center',
        width: 151,
        height: 51,
        left: 109.44,
        top: 254,
    },
    playerCicle: {
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30
    },
    gora: {
        position: 'absolute',
        width: 236,
        height: 96,
        left: 109.44,
        top: 130,
    },
    goraAuthor: {
        position: 'absolute',
        top: 70,
        width: 167,
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 23.8,
        textAlign: 'center',
        color: '#898F97',
    },
    goraTitle:{
        position: 'absolute',
        width:167,
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: '125%',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    bottom:{
        position: 'relative',
        width: windowWidth,
        left: 0,
        top: -20,
        backgroundColor:'#09121C',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex:4
    },
    stopBotton:{
        shadowColor : 'red',
    },
    timeLine:{
        position: 'absolute',
        width: windowWidth * 4 / 5,
        height : 40,
        left:windowWidth / 10,
        top: 24,
        alignItems:'center',
        justifyContent: 'center'
        
    },
    info:{
        position: 'absolute',
        top : 72,
        left : windowWidth /8 ,
    },
    likeButton:{
        position: 'absolute',
        paddingLeft: 5,
        paddingTop: 2.5,
        borderRadius: 20,
        width: 35,
        height: 35,
        backgroundColor: '#19232F'
    },
    likeValue:{
        position: 'absolute',
        color: 'white',
        left : 40,
        top : 5
    },
    dislikeValue:{
        position: 'absolute',
        color: 'white',
        left : windowWidth *5.2/8,
        top : 5,
    },
    time:{
        position:'absolute',
        color: 'white',
        left : 145,
        top:5,
        fontSize: 15,
        fontWeight: '500'
    },
    dislikeButton:{
        position: 'absolute',
        left : windowWidth *5.5/8,
        paddingLeft: 5,
        paddingTop: 5,
        borderRadius: 20,
        width: 35,
        height: 35,
        backgroundColor: '#19232F'
    },
    seperator:{
        width:windowWidth *3.8/5 ,
        top: 20,
        borderBottomColor: '#898F97',
        borderBottomWidth: StyleSheet.hairlineWidth,
        left : 0,
        marginTop: 50,
    },
    bottomButtons:{
        position: 'absolute',
        top : 190,
        left : windowWidth /8 ,
    },
    episode:{
        position: 'absolute',
        color: 'white',
        left : 43,
        top : 5,
    },
    episodeButton:{
        paddingLeft: 6,
        paddingTop: 4,
        borderRadius: 20,
        width: 35,
        height: 35,
        backgroundColor: '#19232F'
    },
    downloadButton:{
        position: 'absolute',
        paddingLeft: 8,
        paddingTop: 4,
        borderRadius: 20,
        width: 35,
        height: 35,
        backgroundColor: '#19232F',
        left : 120
    },
    downloadMb:{
        position: 'absolute',
        color: 'white',
        left : 163,
        top : 5,
    },
    secondMenu:{
        position: 'absolute',
        left : windowWidth *5.8/8,
        top : 5,
    },
    description:{
        position: 'absolute',
        color: '#898F97',
        top : 280,
        left : windowWidth /8 ,
    }


})
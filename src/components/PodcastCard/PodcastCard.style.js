import { StyleSheet,Dimensions } from "react-native"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        width: windowWidth * 4 / 5,
        height: 180,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        marginTop: 20,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        borderBottomLeftRadius: 24,
        marginLeft: windowWidth / 10,
    },
    title: {
        marginTop: 25,
        textAlign: 'start',
        marginLeft: 30,
        width: 236,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    group: {
        position: 'absolute',
        width: 145,
        height: 44,
        left: 32,
        top: 120,
        flexDirection : 'row'
    },
    podcastInfo: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#898F97',
    },
    podcastIcon:{
        marginTop: 3,
        marginEnd: 8,
        marginLeft: 8

    },
    authorContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 50
    },
    authorImage: {
        position: 'absolute',
        top: 140,
        left: 30,
        width: 20,
        height: 20
    },
    authorInfo: {
        position: 'absolute',
        left : 60,
        top: 140,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#FFFFFF',
    },
    playContainer:{
        position: 'absolute',
        
    },
    playButton: {
        opacity: 0.9,
        left: 200,
        top: 80,
        width: 120,
        height: 120,
        filter: 'drop-shadow(0px 5px 80px rgba(255, 51, 75, 0.6))'
    },

})
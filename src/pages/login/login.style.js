import { StyleSheet } from "react-native"
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    mainImage: {
        width: windowWidth,
        height: windowHeight,
        left: -1,
        top: 0,
        backgroundColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #09131D 100%), url(.jpg)',
    },
    mainPage: {
        width: 342,
        height: windowHeight * 9 / 10,
        left: 1,
        backgroundColor: 'linear-gradient(180deg, rgba(9, 18, 28, 0) 0%, #09121C 46.01%, rgba(9, 18, 28, 0) 107.11%)',
        backgroundColor: 'black',
        borderBottomRightRadius: 24,
    },
    logo: {
        width: 156.88,
        height: 72,
        marginTop: 51,
        marginLeft: 33
    },
    loginText: {
        position: 'absolute',
        width: 195,
        height: 60,
        left: 33,
        top: 171,
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 30,
        color: '#FFFFFF',
    },
    inputEmail: {
        position: 'absolute',
        width: 276,
        height: 58,
        left: 33,
        top: 303,
        paddingLeft: 50,
        backgroundColor: '#09121C',
        //border: '1px solid rgba(255, 255, 255, 0.15)',
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        color:'white'
    },
    emailIcon:{
        position: 'absolute',
        width: 10,
        height: 10,
        left: 33,
        top: 323,
        paddingLeft: 20,
        color:'grey'
    },
    inputPassword: {
        position: 'absolute',
        width: 276,
        height: 58,
        left: 33,
        top: 387,
        backgroundColor: '#09121C',
        //border: '1px solid rgba(255, 255, 255, 0.15)',
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingLeft: 50,
        color:'white'
    },
    passIcon:{
        position: 'absolute',
        width: 10,
        height: 10,
        left: 33,
        top: 405,
        paddingLeft: 20,
        color:'grey'
    },
    error1:{
        position: 'absolute',
        top: 275,
        left: 30,
        paddingLeft: 20,
        fontSize : 18,
        color:'red',
    },
    error2:{
        position: 'absolute',
        top: 363,
        left: 30,
        paddingLeft: 20,
        fontSize : 18,
        color:'red',
    },

})
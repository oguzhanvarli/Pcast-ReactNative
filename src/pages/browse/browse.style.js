import { StyleSheet,Dimensions } from "react-native"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex:1,
        //width: windowWidth,
        // height: windowHeight,
        backgroundColor: '#09121C',
    },
    logo: {
        width: 90,
        height: 42,
        left: 33,
        top: 53,
    },
    title: {
        position: 'absolute',
        //fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 56,
        color: '#FFFFFF',
        width: 309,
        height: 62,
        left: 33,
        top: 130,
    },
    searchContainer:{
        flexDirection:'row',
        marginLeft: 30,
        marginTop: 184,
    },
    search: {
        width: 312,
        height: 48,
        backgroundColor: '#010304',
        opacity: 0.5,
        borderRadius: 16,
        paddingLeft: 20,
        color: 'white',
        fontSize : 14

    },
    searchIcon:{
        marginLeft : -40,
        marginTop: 10
    },
    browseText:{
        marginTop : 30,
        marginLeft: 45,
        fontSize: 16,
        color: 'grey'
    }
})
import { StyleSheet } from "react-native";

export const home = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        paddingHorizontal: 10,
        paddingTop: 50
    },
    title: {
        fontWeight: '900',
        fontSize: 30,
    },
    subtitle: {
        fontSize: 20
    },
    item:{
        padding:20,
        backgroundColor:"#3dfabc",
        marginBottom:10,
        marginTop:20
    }
})
export default home;
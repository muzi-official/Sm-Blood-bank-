import React, { useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    StatusBar,
    Image,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';


const SupportScreen = ({navigation}) => {

    const { colors } = useTheme();

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='red' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>SM Blood Bank</Text>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/mainlogo.png')}
                    style={styles.main_logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_form}>Comunity Support</Text>
                <Text style={styles.text_footer}>How Can We Help You !</Text>


                <Text style={styles.form_text}>Enter Your Subject</Text>
                <TextInput
                    placeholder="Subject"
                    style={styles.subject}
                />



<Text style={styles.form_text}>Enter Your Message</Text>
                <TextInput
                    keyboardType={'email-address'}
                    placeholder="Message"
                    style={styles.message}
                />




                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.textbtn}>Send</Text>
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={30}
                    />
                </TouchableOpacity>

        </View>


        <View style={styles.nav}>
<View style={styles.navbar}>
<View style={styles.btn}>
<TouchableOpacity       
 onPress={() => navigation.navigate("HomeScreen")}>
                <MaterialIcons 
                    name="home"
                    color="#fff"
                    size={30}
                />
        </TouchableOpacity>
        </View>
        <View style={styles.btn}>
<TouchableOpacity       
 onPress={() => navigation.navigate("BloodDonorsScreen")}>
                <MaterialIcons 
                    name="add"
                    color="#fff"
                    size={35}
                />
        </TouchableOpacity>
        </View>
        <View style={styles.btn}>
<TouchableOpacity       
 onPress={() => navigation.navigate("SupportScreen")}>
                <MaterialIcons 
                    name="contacts"
                    color="#fff"
                    size={30}
                />
        </TouchableOpacity>
        </View>
        <View style={styles.btn}>
<TouchableOpacity       
 onPress={() => navigation.navigate("SettingsScreen")}>
                <MaterialIcons 
                    name="settings"
                    color="#fff"
                    size={30}
                />
        </TouchableOpacity>
        </View>
        <View style={styles.btn}>
        <TouchableOpacity
onPress={() => navigation.navigate("SplashScreen")}>

<Image    style={styles.logout}
    source={require('../assets/logout.png')}
   />
        </TouchableOpacity>
        </View>
</View>
        </View>

        </View>


    );
};

export default SupportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBECF0',
    },


    header: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    footer: {
        flex: 13,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    bottom: {
        flex: 13,
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    text_header: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 30
    },

    main_logo: {
        height: 50,
        width: 60,
        display: 'flex',
        flexDirection: 'row'
    },

    text_footer: {
        color: '#05375a',
        fontSize: 14
    },

    text_form: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },

    form_text: {
        color: 'black',
        marginTop: 20,


    },
    subject: {
        height: 60,
        backgroundColor: '#D3D3D3',
        marginTop: 5,
        paddingLeft: 10,
        color: 'black',
        borderRadius: 10,
    },

    message:{
        height: 180,
        backgroundColor: '#D3D3D3',
        marginTop: 5,
        paddingLeft: 10,
        color: 'black',
        borderRadius: 10,
    },

    
    submitBtn: {
        marginTop: 20,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'red',
    },

    textbtn: {
        color: 'white',
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },

    
nav: {
    paddingTop: 10,
    backgroundColor: 'red',
    flex: 1,
    width: '100%',
  },
  
  navbar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  
    btn: {
  marginRight: 4,
  width: 40,
  height: 40,
    },
  
    logout: {
      color: '#fff',
      backgroundColor: '#fff',
      borderRadius : 20,
      width: 30,
      height: 30,
    },
    

});

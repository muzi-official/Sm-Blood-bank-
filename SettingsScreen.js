import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SettingsScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='red' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/userimg.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={[styles.content, {
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Your Name</Text>
 <Text style={[styles.title, {
                color: colors.text
            }]}>Your Email</Text><View>
                   
            </View>
        </Animatable.View>


        
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

export default SettingsScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#DEDEDE',
    
  },
  header: {
      flex: 4,
      borderBottomLeftRadius: 30,
      borderColor: 'rgba(0,0,0,0.5)',
      borderBottomRightRadius: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
  },
  content: {
      flex: 8,
      backgroundColor: '#DEDEDE',
      borderTopLeftRadius: 30,
      borderColor: 'rgba(0,0,0,0.5)',
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
    borderRadius: 50,
    height: 120,
    width: 120,
  },

  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',},
      
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


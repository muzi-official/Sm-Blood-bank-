import React from 'react';
import { View, Text, Button, StyleSheet , StatusBar , Image , TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sdata from '../config/sdata';



const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
                  <StatusBar backgroundColor='red' barStyle="light-content"/>

      



      <View style={styles.header}>
</View>



<View style={styles.content}>
<View style={styles.card}>
    <Text>item details</Text>

</View>
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

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  header: {
    height: 200,
    width: '100%',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'red',
    
  },
  content:{
    height: 300,
    width: '100%',
    flex: 12, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  card: {
    backgroundColor: '#fff',
    width: '90%',
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 10,
    height: 400,
    marginBottom: 15,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
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

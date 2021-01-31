import React ,{useState} from 'react';
import { View,  Image , Text, FlatList ,TouchableOpacity , StyleSheet, StatusBar  , TextInput} from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import sdata from '../config/sdata';
import { Searchbar } from 'react-native-paper';

const HomeScreen = ({navigation}) => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  const theme = useTheme();
  
    return (

      <View style={styles.container}>
          <StatusBar backgroundColor='red' barStyle="light-content"/>

<View style={styles.header}>

<Searchbar
style={styles.search}
      placeholder="Find Blood Donors..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />


<Image  
source={require('../assets/userimg.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
</View>


<View style={styles.content}>

<FlatList
style={styles.list}
data={sdata}
renderItem={(sdata)=>{
  return (
    <View style={styles.card}>
          <Text style={{marginTop: 10, marginLeft: 10,}}>{sdata.item.name}</Text>
          <Text style={{marginTop: 10, marginLeft: 10,}}>{sdata.item.email}</Text>
          <Text style={{marginTop: 10, marginLeft: 10,}}>{sdata.item.blood}</Text>

    <TouchableOpacity       
style={styles.detailBtn}
 onPress={() => navigation.navigate("DetailsScreen")}>
                <Text style={{color: '#fff'}}>All Details</Text>
        </TouchableOpacity>
</View>
  )
}}
keyExtractor={item => item.id}
    />

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    flex: 2, 
    backgroundColor: 'red',
  },
  
  
  search: {
    borderRadius: 50,
    marginTop: 10,
    height: 40,
    width: '80%',
  },

  logo: {
    marginTop: 10,
borderRadius: 50,
    height: 40,
    width: 40,
  },
  content:{
    backgroundColor: '#F5F5F5',
    width: '100%',
    flex: 11,
    alignItems: 'center', 
    justifyContent: 'center',
  },

  list: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    padding: 20,
  },

card: {
  backgroundColor: '#fff',
  width: '100%',
  borderRadius: 10,
  height: 150,
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
  detailBtn: {
    margin: 10,
    marginLeft: 180,
    backgroundColor: 'red',
     height: 40,
      alignItems: 'center', 
      justifyContent: 'center',
      width: 120, 
      borderRadius: 10, 
      color: 'white',
  },
  
});

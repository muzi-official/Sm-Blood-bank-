import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    ScrollView,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


const BloodDonorsScreen = ({ navigation }) => {
    const { colors } = useTheme();


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [gender, setGender] = useState("");
    const [bloodgrp, setBloodgrp] = useState("");
    const [country, setCountry] = useState("");
    const [dateofBirth, setdateofBirth] = useState("");
    const [number, setnumber] = useState("");
    const [city, setcity] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('BloodDonors').add({
            name: mame,
            email: email,
            gender: gender,
            bloodgrp: bloodgrp,
            country: country,
            dateofBirth: dateofBirth,
            number: number,
            city: city
        })

        setname("");
        setemail("");
        setgender("");
        setBloodgrp("");
        setCountry("");
        setdateofBirth("");
        setnumber("");
        setcity("");
        history.push('/')
    }


    // Select Date Picker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='red' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Blood Donors</Text>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/mainlogo.png')}
                    style={styles.main_logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_form}>Your Credentials</Text>
                <Text style={styles.text_footer}>Please Fill The Following Fields </Text>

                <ScrollView>

                    <Text style={styles.form_text}>Enter Your Name</Text>
                    <TextInput
                        placeholder="Enter Name"
                        style={styles.TextInput}
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />

                    <Text style={styles.form_text}>Enter Your Email</Text>
                    <TextInput
                        keyboardType={'email-address'}
                        placeholder="Enter Email"
                        style={styles.TextInput}
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <Text style={styles.form_text}>Select Your Gender</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Male', value: 'male' },
                            { label: 'FeMale', value: 'female' },
                            { label: 'Other', value: 'other' },
                        ]}
                        defaultValue={gender}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}

                        onChangegender={(gender) => setGender(gender)({
                            gender: item.value

                        })}
                    />


                    <Text style={styles.form_text}>Select Your Blood Group</Text>
                    <DropDownPicker
                        items={[
                            { label: 'O-', value: 'o-' },
                            { label: 'O+', value: 'o+' },
                            { label: 'A-', value: 'a-' },
                            { label: 'A+', value: 'a+' },
                            { label: 'B-', value: 'b-' },
                            { label: 'B+', value: 'b+' },
                            { label: 'AB-', value: 'ab-' },
                            { label: 'AB+', value: 'ab+' },
                        ]}
                        defaultValue={bloodgrp}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}

                        onChangebloodgrp={(bloodgrp) => setBloodgrp(bloodgrp)({
                            bloodgrp: item.value
                        })}
                    />

                    <Text style={styles.form_text}>Select Your Country</Text>
                    <DropDownPicker
                        items={[
                            { label: 'PAKISTAN', value: 'pak', icon: () => <Icon name="flag" size={18} color="#900" />, },
                            { label: 'INDIA', value: 'ind', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'SRILNKA', value: 'srilanka', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'BANGLADESH', value: 'bangladesh', icon: () => <Icon name="flag" size={18} color="#900" />, },
                            { label: 'AMERICA', value: 'america', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'United States', value: 'united', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'Australia', value: 'aus', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'China', value: 'china', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'Japan', value: 'japan', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            { label: 'Afghanistan', value: 'Afghanistan', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        ]}
                        defaultValue={country}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}

                        onChangecountry={(country) => setCountry(country)({
                            country: item.value
                        })}
                    />

                    <TouchableOpacity style={styles.DOB} onPress={showDatePicker} >
                        <Text style={styles.date_text}>
                            Select Your Date of Birth
                            </Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        style={styles.datePicker}
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        value={dateofBirth}
                        onChange={(e) => setdateofBirth(e.target.value)}
                    />

                    <Text style={styles.form_text}>Enter Your Phone Number</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        placeholder="Enter Phone Number"
                        style={styles.TextInput}
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                    />

                    <Text style={styles.form_text}>Enter Your City</Text>
                    <TextInput
                        placeholder="Enter Your City"
                        style={styles.TextInput}
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                    />
                </ScrollView>

<View  style={styles.vbtn}>
                <TouchableOpacity style={styles.submitBtn}
                onPress={handleSubmit} value="SUBMIT">
                    <Text style={styles.textbtn}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submitBtn}
                onPress={() => navigation.navigate("HomeScreen")}>
                 <Text style={styles.textbtn}>Cancil</Text>
                </TouchableOpacity>
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

export default BloodDonorsScreen;

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

    TextInput: {
        backgroundColor: '#D3D3D3',
        marginTop: 5,
        padding: 5,
        paddingLeft: 10,
        color: 'black',
        borderRadius: 5,
    },

vbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

    datePicker: {
        padding: 10,
        backgroundColor: '#fafafa',
    },

    date_text: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 15,
    },


    DOB: {
        borderRightWidth: 50,
        borderLeftWidth: 50,
        borderColor: 'grey',
        marginTop: 20,
        height: 40,
        paddingLeft: 10,
        color: 'black',
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#fafafa',
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
        borderRadius: 20,
        width: 30,
        height: 30,
    },


});

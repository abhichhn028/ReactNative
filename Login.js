import React from 'react'
import { View, ScrollView, ImageBackground, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'native-base'

function Login({ navigation }) {
    return (
        // Container Start
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator={false}>

            <ImageBackground source={require('./assets/Car.jpeg')}
                style={{ height: Dimensions.get('window').height / 2.5 }}
            >
                <View style={styles.brandView}>
                    <Ionicons name="location-sharp" size={100} color="white" />
                    <Text style={styles.brandViewText}>Vision Go</Text>
                </View>
            </ImageBackground>
            {/* Bottom View */}
            <View style={styles.bottomView}>
                {/* Welcome You */}
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 34}}>LOGIN</Text>
                    {/* Form Inputs View */}
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.labels}>Enter Your Name</Text>
                        <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.labels}>Enter Your Password</Text>
                        <TextInput style={styles.inputStyle} autoCapitalize="none" autoCorrect />
                    </View>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{color:'#ffffff'}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        // Container End
    )
}

export default Login;


const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandViewText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    labels: {
        fontSize: 18,
        color: '#7d7d7d',
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 5,
        fontSize: 10
    },
    buttonStyle:{
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'blue'
    },
    textBody:{
        textAlign:'center'
    }
})
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

export const SearchInput = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textBackground}>
            <TextInput 
                placeholder="Buscar pokemon"
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Icon 
                name='search-outline'
                color='grey'
                size={30}
            />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground:{
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    textInput:{
        flex: 1,
        fontSize: 18,
        
    },
})

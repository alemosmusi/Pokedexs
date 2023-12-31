import ImageColors from 'react-native-image-colors'
import { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonIterfaces';
import { FadeInImage } from './FadeInImage'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {

    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const navigation = useNavigation()

    useEffect(() => {


        const uri = pokemon.picture
        ImageColors.getColors(uri,{
            fallback: '#888787'
        })
            .then(colors => {
                if (!isMounted.current) return
                (colors.platform === 'android')
                    ? setBgColor(colors.dominant || 'grey')
                    :(colors.platform === 'ios') 
                    ?setBgColor( colors.background || 'grey')
                    : setBgColor( colors.dominant || 'grey')
        })

        // const fetchColors = async () => {
        //     const result = await ImageColors.getColors(pokemon.picture, {
        //       fallback: '#a6a6a6',
        //       pixelSpacing: 5,
        //       key: pokemon.id
              
        //     })
      
        //     switch (result.platform) {
        //       case 'android':
        //         setBgColor(result.dominant)
        //         break
        //       case 'web':
        //         setBgColor(result.dominant)
        //         break
        //       case 'ios':
        //         setBgColor(result.background)
        //         break
        //       default:
        //         throw new Error('Unexpected platform')
        //     }
      
        //   }
      
        //   fetchColors()

        return()=>{
            isMounted.current = false
        }

        
        
    }, [])
    



  return (
    <TouchableOpacity
        activeOpacity={0.9}
        onPress={
            // @ts-ignore
            ()=> navigation.navigate('PokemonScreen', {
                simplePokemon : pokemon,
                color: bgColor
            })
        }
    >
        <View style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
        }}>
            {/* Nombre del pokemon y id */}
            <View>
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
            </View>

            <View style={styles.pokebolaContainer}>
                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                />

            </View>


            <FadeInImage 
                uri={pokemon.picture}
                style={styles.pokemonImage}
            />

        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
    },
    pokemonImage:{
        width:120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    },
    pokebolaContainer:{
        
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
})

import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { styles as globalStyles } from '../theme/appTheme'
import { PokemonCard } from '../components/PokemonCard'
import { Loading } from '../components/Loading'

const sreenWidht = Dimensions.get('window').width

export const SearchScreen = () => {


  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList}=usePokemonSearch()


  if(isFetching){
    return (
      <Loading />
    )
  }


  return (
    <View style={{
      flex:1,
      marginHorizontal: 20
    }}>
        <SearchInput 
          style={{
            position:'absolute',
            zIndex: 999,
            width: sreenWidht - 40,
            top: (Platform.OS === 'ios')? top : top +30
          }}
        />



        <FlatList 
        
          data={simplePokemonList}
          keyExtractor={(pokemon)=>pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}

          // Header
          ListHeaderComponent={(
            <Text style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              paddingBottom: 10,
              marginTop: (Platform.OS === 'ios')? top + 60 : top + 80
              }}>Pokedex</Text>
          )}


          renderItem={({item,index})=> (
            <PokemonCard
              pokemon={item}
            />
          )}

        />
    </View>
  )
}


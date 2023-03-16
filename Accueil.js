import { ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import Screen_2 from './Screen_2';

export default function Accueil({navigation}) {

    const onPressHandler = () => {
      navigation.navigate(Screen_2)
    }

    return (
    <ImageBackground resizeMode='cover' source={require('./assets/assets/fd_acceuil.png')}>
      <View style={styles.body}>
        
            <Text style={styles.text}>Screen 1</Text>
            <Pressable onPress={onPressHandler}
        style={({pressed})=>({backgroundColor: pressed? "#ddd": "#0f0"})}>
                <Text>Go to Screen 2</Text>
            </Pressable>
            
      </View>
    </ImageBackground>
      
    );
  }
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize:40,
      fontWeight:"bold",
      margin:10,
      
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },

  });
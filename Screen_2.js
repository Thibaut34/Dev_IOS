import { Pressable, StyleSheet, Text, View} from 'react-native';
import Accueil from './Accueil';
export default function Screen_2({navigation}) {
    const onPressHandler = () => {
      navigation.navigate(Accueil)
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Screen 2</Text>
        <Pressable onPress={onPressHandler}
        style={({pressed})=>({backgroundColor: pressed? "#ddd": "#0f0"})}>
          <Text>Go to Screen 1</Text>
        </Pressable>
      </View>
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
      margin:10
    },
    
  });
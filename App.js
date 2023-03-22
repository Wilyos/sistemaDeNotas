import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import {styles} from './assets/styles/Style'
import Form from './components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#58F545',width:'100%'}}>
        <Text style={styles.titulo}>Sistema de Notas</Text>
      </View>
      <Form></Form>
    </View>
  );
}


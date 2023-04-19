import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import {styles} from './assets/styles/Style'
import Form from './components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'green',width:'100%'}}>
        <Text style={styles.titulo}>Sistema de Notas</Text>
      </View>
      <Form></Form>
    </View>
  );
}


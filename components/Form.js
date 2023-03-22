import {Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import {styles} from '../assets/styles/Style'


function Form(){
    return(
        <View style={styles.boxform}>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Identificación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nombres:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Asignación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 1(30%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 2(35%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View><View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 3(35%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Definitiva:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Observación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables]}>
                    <Text>Calcular/Guardar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables]}>
                    <Text>Limpiar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables]}>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      
    )
}

export default  Form
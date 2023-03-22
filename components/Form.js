import { useState } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {TextInput } from 'react-native-web';
import {styles} from '../assets/styles/Style'


function Form(){
//definimos el objeto para introducir datos y las variables
    const estudiantes = []

    const [id,setid]= useState('')
    const [names,setNames]= useState('')
    const [course,setCourse]= useState('')
    const [firstN,setFirstN]= useState('')
    const [secondN,setSecondN]= useState('')
    const [thirdN,setThirdN]= useState('')
    const [finalN,setFinalN]= useState('')
    const [observ,setObserv]= useState('')
    
    let Guardar =()=>{
      let notaFinal = 0
      let nota1 = parseFloat(firstN)
      let nota2 = parseFloat(secondN)
      let nota3 = parseFloat(thirdN)

      if(id != '' && names != '' && course != '' && firstN != '' && secondN != '' && thirdN !=''){
        if(nota1 && nota2 && nota3 < 5){

          notaFinal = (nota1 * 0.3)+(nota2*0.35)+(nota3*0.35)
          setFinalN(notaFinal)

          if(notaFinal < 2){
            setObserv("Reprueba")
          }
          if (notaFinal < 3) {
            setObserv("Habilita")
          } 
          else {
            setObserv("Aprueba")
          } 
        }
        else{
          alert("las notas deben ir entre 0 y 5")
        }

      }
      else{
        alert("Todos los datos deben ser ingresados")
      }

    }


    return(
        <View style={styles.boxform}>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Identificación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={id=>setid(id)} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nombres:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={names=>setNames(names)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Asignación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={course=>setCourse(course)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 1(30%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={firstN=>setFirstN(firstN)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 2(35%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={secondN=>setSecondN(secondN)} />
            </View>
        </View><View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 3(35%):</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} onChangeText={thirdN=>setThirdN(thirdN)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Definitiva:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={finalN} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Observación:</Text>
            </View>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={observ} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables]} onPress={()=>Guardar()}>
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
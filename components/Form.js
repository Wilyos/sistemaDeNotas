import { useState } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {TextInput } from 'react-native-web';
import {styles} from '../assets/styles/Style'


let estudiante=[{id:'0',names:'name',course:'curso',firstNote:0,secondNote:0,thirdNote:0,finalNote:0,observation:'observation'}]
function Form(){
//definimos el objeto para introducir datos y las variables
    

    const [id,setid]= useState("")
    const [names,setNames]= useState("")
    const [course,setCourse]= useState("")
    const [firstN,setFirstN]= useState("")
    const [secondN,setSecondN]= useState("")
    const [thirdN,setThirdN]= useState("")
    const [finalN,setFinalN]= useState("")
    const [observ,setObserv]= useState("")
    let promedio2
    let observacion1
    
    let calcular =()=>{
      let notaFinal = 0
      let nota1 = parseFloat(firstN)
      let nota2 = parseFloat(secondN)
      let nota3 = parseFloat(thirdN)

      if(id != '' && names != '' && course != '' && firstN != '' && secondN != '' && thirdN !=''){
        if(nota1 && nota2 && nota3 <= 5){

          notaFinal = (nota1 * 0.3)+(nota2*0.35)+(nota3*0.35)
          setFinalN(notaFinal)
          promedio2 = notaFinal

          if(notaFinal < 2){
            setObserv("Reprueba")
            observacion1 ="Reprueba"
          }
          if (notaFinal < 3) {
            setObserv("Habilita")
            observacion1="Habilita"
          } 
          else {
            setObserv("Aprueba")
            observacion1="Aprueba"
          } 
          
        }
        else{
          alert("las notas deben ir entre 0 y 5")
        }

      }
      else{
        alert("Todos los datos deben ser ingresados")
      }
      guardar()
    }
    let guardar =()=>{
      estudiante.push({id,names,course,firstN:parseFloat(firstN),secondN:parseFloat(secondN),thirdN:parseFloat(thirdN),finalNote:promedio2,observation:observacion1})
      

      console.log(estudiante)
    }
    let buscar = ()=>{
      console.log(id)
      console.log(estudiante)
      let buscarEs = estudiante.find(estu=> estu.id == id)
      console.log(buscarEs)
      if(buscarEs != undefined){
        setNames(buscarEs.names)
        setCourse(buscarEs.course)
        setFirstN(buscarEs.firstNote)
        setSecondN(buscarEs.secondNote)
        setThirdN(buscarEs.thirdNote)
        setFinalN(buscarEs.finalNote)
        setObserv(buscarEs.observation)
      }
      else{
        alert("No se encuentran los datos")
      }
    }
     let limpiar = ()=>{
      setid('')
      setNames('')
      setCourse('')
      setFirstN('')
      setSecondN('')
      setThirdN('')
      setFinalN('')
      setObserv('')
     }

    return(
      <View style={styles.boxform}>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Identificación:</Text>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={id} onChangeText={id=>setid(id)} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nombres:</Text>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={names} onChangeText={names=>setNames(names)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Asignación:</Text>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={course} onChangeText={course=>setCourse(course)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 1(30%):</Text>
            </View>
        </View>
        <View style={styles.fila}>
        
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={firstN || ''} onChangeText={firstN=>setFirstN(firstN)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 2(35%):</Text>
            </View>
        </View>
       <View style={styles.fila}>
        
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={secondN || ''} onChangeText={secondN=>setSecondN(secondN)} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Nota momento 3(35%): </Text>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={thirdN || ''} onChangeText={thirdN=>setThirdN(thirdN)}/>
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Definitiva:</Text>
            </View>
        </View>
        <View style={styles.fila}>
          
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={finalN} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
              <Text>Observación:</Text>
            </View>
        </View>
        <View style={styles.fila}>
          
            <View style={styles.boxitems}>
              <TextInput placeholder=''style={styles.textinput} value={observ} />
            </View>
        </View>
        <View style={styles.fila}>
            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables,{backgroundColor:'green'}]} onPress={()=>calcular()}>
                    <Text>Calcular/Guardar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables,{backgroundColor:'lightblue'}]}onPress={()=>limpiar()} >
                    <Text>Limpiar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxitems}>
                <TouchableOpacity style={[styles.Touchables,{backgroundColor:'red'}]} onPress={buscar} >
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      
    )
}

export default  Form
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    boxform:{
      backgroundColor:'lightgreen',
      flex:4,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
    },
    boxitems:{
      justifyContent:'flex-start',
      marginRight:60,
      marginTop:5,
  
    },
    titulo:{
      textAlign: 'center',
      color: 'Black',
      fontWeight:'bold',
      fontSize:'40px'
    },
  
    fila:{
      flexDirection: 'row',
      marginTop:5,
      alignItems:'center'
    },
    text:{
      fontStyle: 'italic',
      fontSize:'20px',
      marginLeft:'10px',
      
    },
    textinput:{
      color:'black',
      border:2,
      borderradius:40,
      borderWidth:2,
      bordercolor:'#3AFA97',
      marginRight:10,
      marginTop:10,
      backgroundColor:'white'
    },
    Touchables:{
        padding:10,
        borderRadius:10,
        width:120,
        alignItems:'center',
        marginStart:10
      },
  });

  export {styles} 
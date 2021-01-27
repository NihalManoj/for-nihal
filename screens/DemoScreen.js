import React,{Component}from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    export default class WelcomeScreen extends Component
    {
        render(){
            
        return(<View style={{flex:1,backgroundColor:"#021710"}}>
        <ScrollView>
     <Card style={{padding: 10,marginTop:10,backgroundColor:"#021710",color:"#82152b"}}
     isDark>
          <CardImage style={{fontSize:20,color:"red"/*,width:200,marginLeft:50*/ }}
           
           title ={"raise an issue"}
            source={{ uri:products[0].image }}
          />
           
   
 
</Card>

</ScrollView>
</View>
     
    );
  }
}

const styles = StyleSheet.create({
    home: {
      width: width,    
    },
   
    paragraph: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 20
    },
    header: {
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2
      },
      
      shadowRadius: 8,
      shadowOpacity: 0.2,
      elevation: 4,
      zIndex: 2,
    },
   
  });
        
    

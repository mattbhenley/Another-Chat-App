import React from 'react';
import { 
    Stylesheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

class Main extends React.Component {
    static navigationOptions = {
        title: 'Chatter',
    };

   state = {
       name: ' ',
   } ;

   onPress = () => 
   this.props.navigation.navigate('Chat, { name: this.state.name }');

   onChangeText = name => this.setState({ name });

   render() {
       return (
           <View>
               <Text style={Stylesheet.title}>Enter your name:</Text>
               <TextInput 
               style={styles.nameInput}
               placeholder="John Smith"
               onChangeText={this.onChangeText}
               value={this.state.name}
               />
               <TouchableOpacity onPress={this.onPress}>
               <Text style={styles.buttonText}>Next</Text>
               </TouchableOpacity>
               </View>
       );
   }
}


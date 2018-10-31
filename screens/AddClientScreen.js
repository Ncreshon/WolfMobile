import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Picker,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { CheckBox, Header, ListItem, List, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import { MonoText } from '../components/StyledText';


export default class AddClientScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Name: '',
      Start: 0,
      checked: false

    }
   
  }
 
  makeNumber(number) {
    return  Number(number);
  }

  static navigationOptions = {
    header: null,
    title: "WE lead the pack"
  };




  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Header
          backgroundColor={'#2b59c3'}
          centerComponent={{ text: 'WE Lead The Pack', style: { color: '#a1a6b4' } }}
          rightComponent={{ icon: 'home', color: '#a1a6b4', onPress: () => navigate('Home', { name: 'Jane' }) }}
        />
        <ScrollView >

<FormLabel>Name</FormLabel>
<FormInput onChangeText={(text) => {this.setState({Name: text})}}/>
<FormLabel>Start Weight</FormLabel>
<FormInput onChangeText={(text) => {this.setState({Start: text})}}/>
<CheckBox
  title='Male'
  checked={this.state.checked}
/>
<CheckBox
  title='Female'
  checked={this.state.checked}
/>
<Button
                  raised
                icon={{name: 'add'}}
                title='Add Client'
                backgroundColor='#2b59c3' 
                onPress={() => {
                  console.log(this.state.Start)
                    var  today = new Date();
                    var date = today.getDate();
                    var month = today.getMonth() + 1
                    var year = today.getFullYear()
                    var todayDate = `${month}/${date}/${year}`;
                    fetch('https://backend-sxmyaulsvu.now.sh/addClient', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.state.Name, 
                            weights: [{pounds: this.makeNumber(this.state.Start), date: todayDate}],
                            start: this.makeNumber(this.state.Start),
                          pic:''})
                      }).then(response => {
                        return response.json()
                      }).then(responseJson => {
                        navigate('Home', { name: 'Jane' })
                          console.log(responseJson);
                      }).catch(err => {console.log("ERROR", err)})
        
                }} />

        </ScrollView>
     
      </View>
    );
  }
}

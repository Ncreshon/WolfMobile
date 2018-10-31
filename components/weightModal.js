import React, {Component} from 'react';
import {TextInput, Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import {Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class WeightModal extends Component {
   
  state = {
    modalVisible: false,
    weight: ''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  makeNumber(number) {
    return  Number(number);
  }

  update(input){
    this.setState({weight: input})
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View style={{padding: 10}}>

<FormLabel>Weight</FormLabel>
<FormInput onChangeText={(text) => this.setState({weight:text})} />
              <Button
                  rounded
                icon={{name: 'add'}}
                title='Update Weight'
                textInputRef={this.state.weight}
                backgroundColor='#2b59c3' 
                onPress={() => {
                    var  today = new Date();
                    var date = today.getDate();
                    var month = today.getMonth() + 1
                    var year = today.getFullYear()
                    var todayDate = `${month}/${date}/${year}`;
                    fetch('https://backend-rypchwcsmo.now.sh/updateWeight', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: this.props.name, 
                            pounds: this.makeNumber(this.state.weight),
                            date: todayDate})
                      }).then(response => {
                        return response.json()
                      }).then(responseJson => {
                          console.log(responseJson);
                  this.setModalVisible(!this.state.modalVisible);
                          this.setState({weight: ''})
                      }).catch(err => {console.log("ERROR", err)})
        
                }} />

             
      
                
           
            </View>

            <View style={{padding: 10}}>
            <Button
                  rounded
                icon={{name: 'clear'}}
                title='Cancel'
                textInputRef={this.state.weight}
                backgroundColor='#2b59c3' 
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }} />
            </View>


          </View>
        </Modal>
        <Button
                  rounded
                icon={{name: 'add'}}
                title='Update Weight'
                textInputRef={this.state.weight}
                backgroundColor='#2b59c3' 
                onPress={() => {
                  this.setModalVisible(true);
                }} />
          
       
      </View>
    );
  }
}

export default WeightModal


import React from 'react';
import {
  
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
import {Button, Card, Header, ListItem, List } from 'react-native-elements'

import { MonoText } from '../components/StyledText';
import WeightModal from '../components/weightModal';
import LossChart from '../components/LineChart';

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props)
   
  }
  getAmountLost(){
    if(this.props.navigation.state.params.client.weights.length > 1){
      return this.props.navigation.state.params.client.start - this.props.navigation.state.params.client.weights[this.props.navigation.state.params.client.weights.length - 1].pounds;

    } else {
      return 0;
    }
  }


  static navigationOptions = {
    header: null,
    title: "WE lead the pack"
  };




  render() {
    const { navigate } = this.props.navigation;
    return (
      // <View style={{backgroundColor: '#a1a6b4'}} >
      <ScrollView style={{backgroundColor: '#000000'}}  >
      
        <Header
          backgroundColor={'#2b59c3'}
          centerComponent={{ text: this.props.navigation.state.params.client.name, style: { color: 'white', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#a1a6b4', onPress: () => navigate('Home', { name: 'Jane' }) }}
        />
            <View style={{   flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
            <Text style={{fontSize: 24, color:'#a1a6b4'}}> Total Pounds Lost: {this.getAmountLost()}</Text>

            </View>


            <List containerStyle={{marginBottom: 20}}>
  {
  this.props.navigation.state.params.client.weights.map((l,i) => (
      <ListItem
        roundAvatar
        leftIcon={{name: 'directions-run', color: '#485665'}}
        key={i}
        title={`Weight: ${l.pounds}`}
        subtitle={`Date: ${l.date}`}
        hideChevron={true}
      />
    ))
  }
</List>

      

          <View style={{alignItems: 'center', paddingBottom: 10, paddingTop: 8, backgroundColor: '#000000'}}>
            {/* {this._maybeRenderDevelopmentModeWarning()} */}
          
        <WeightModal name={this.props.navigation.state.params.client.name}></WeightModal>
          </View>
        </ScrollView>
     
      // </View>
    );
  }
}

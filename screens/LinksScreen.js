import React from 'react';
import {ScrollView, StyleSheet, Text,View, Linking} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button, Icon } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Wolf',
    headerStyle: {backgroundColor: '#485665'},
    headerTintColor: '#a1a6b4',
    headerTitleStyle: {fontFamily: 'Roboto'}
    
  };

  render() {
    const { navigate } = this.props.navigation;
    
      
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
       <View style={{padding: 10, }}>
        <Button
        rounded
              title="Add New Client"
              underlayColor='#000000'
              icon={{name: 'person-add'}}
              backgroundColor="#2b59c3"
              color="#a1a6b4"
              accessibilityLabel="Add New Client "
              onPress={() =>{ navigate('Add')}}
        />
        </View>
        <View style={{padding: 10}}>
              <Button
              rounded
              icon={{name: 'open-in-new'}}
              onPress={() =>{Linking.openURL('https://wolferafitness.com')}}
              title="Wolf Era Fitness"
              backgroundColor="#2b59c3"
              color="#a1a6b4"
              accessibilityLabel="Wolf Era Fitness"
            />  
 
        </View>

        <View style={{padding: 10}}>
            <Button
            rounded
              icon={{name: 'open-in-new'}}
            onPress={() =>{Linking.openURL('https://wolferaathletics.com')}}
            title="Wolf Era Athletics"
            backgroundColor="#2b59c3"
            color="#a1a6b4"
            accessibilityLabel="Wolf Era Athletics"
          />
          </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000000'
 
  },
});

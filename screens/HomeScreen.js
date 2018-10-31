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
import { Header, ListItem, List } from 'react-native-elements'

import { MonoText } from '../components/StyledText';
import WeightModal from '../components/weightModal';
import LossChart from '../components/LineChart';


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     client: '',
     clientIndex: 0,
     clients: [{name: 'Select Client', weights: [0]}]
     
    }
  }
 
  componentDidMount() {
    fetch('https://backend-rypchwcsmo.now.sh/getClients')
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({clients: responseJson})
                console.log('Component Mounted');
              })
              .catch((error) => {
                console.error(error);
              });
  }

  refresh (){
    fetch('https://backend-rypchwcsmo.now.sh/getClients')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({clients: responseJson})
      console.log('Component Mounted');
    })
    .catch((error) => {
      console.error(error);
    });
  }

 

 

  static navigationOptions = {
    header: null,
    title: "WE lead the pack"
  };

  render() {
    const { navigate } = this.props.navigation;

    renderRow = ({ item }) => {
    
      function clientTouch(){
        navigate('Profile', { client: item })
      }
      return (
        <TouchableOpacity onPress={clientTouch}>
        <ListItem
          roundAvatar
          title={item.name}
          subtitle={`Current Weight: ${item.weights[item.weights.length > 1 ?  item.weights.length - 1 : 0].pounds}`}
          leftIcon={{name: 'directions-run', color: '#485665'}}
          chevronColor={'#2b59c3'}
        />
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#2b59c3'}
          leftComponent={{ icon: 'menu', color: '#a1a6b4', onPress: () => navigate('Link', { name: 'Jane' }) }}
          centerComponent={{ text: 'WE Lead The Pack', style: { color: '#a1a6b4' } }}
          rightComponent={{ icon: 'refresh', color: '#a1a6b4', onPress: () => this.refresh() }}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

            <List>
              <FlatList
                data={this.state.clients}
                renderItem={renderRow}
                keyExtractor={item => item.name}
                
              />
            </List>
          </View>

          <View style={styles.getStartedContainer}>
       
          </View>

        </ScrollView>
     
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#a1a6b4',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
 
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

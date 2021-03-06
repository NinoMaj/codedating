import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Auth',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{ marginTop: 10 }}>
        <Button
          title="Go To Main Screen"
          large
          icon={{ name: 'input' }}
          backgroundColor="#00BCD4"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

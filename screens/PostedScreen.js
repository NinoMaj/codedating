import React from 'react';
import { View, Text } from 'react-native';

export default class PostedScreen extends React.Component {
  static navigationOptions = {
    title: 'Posted',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Text>Posted Screen</Text>
      </View>
    );
  }
}

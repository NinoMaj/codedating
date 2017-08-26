import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import { AppLoading } from 'expo';

import Swipe from '../components/Swipe';
import { fetchProjects } from '../actions';

class SwipeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderCard(project) {
    return (
      <Card title={project.title}>
        <View style={{ height: 300 }}>
          <Text>{project.title}</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{project.description}</Text>
          <Text>{project.postedBy}</Text>
          <Text>{project.createdDate}</Text>
          <Text>{project.techRequired}</Text>
          <Text>{project.skillsRequired}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Projects">
        <Button
          title="Go To Applied"
          large
          icon={{ name: 'checkmark' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('Applied')}
        />
      </Card>
    );
  }

  render() {
    if (!this.props.projects) {
      return <AppLoading />;
    }
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          keyProp="id"
          data={this.props.projects.data}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={() => {console.log('Swiped right')}}
          // onSwipeRight={project => this.props.likeProjectJob(project)} 
        />
      </View>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    projects,
  };
}

// export default connect(mapStateToProps, { likeJob })(SwipeScreen);
export default connect(mapStateToProps, { fetchProjects })(SwipeScreen);

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/EmployeeListStyles";
import PropTypes from "prop-types";
import ListItem from "../components/ListItem";
export default class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderListItem = item => {
    return <ListItem age={item} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => this.renderListItem(item)}
        />
      </View>
    );
  }
}
EmployeeList.propTypes = {};
EmployeeList.defaultProps = {};

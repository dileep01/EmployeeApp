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
  componentDidMount() {
    this.props.getEmployeeList();
  }
  renderListItem = item => {
    return (
      <ListItem
        age={item.age}
        name={item.name}
        gender={item.gender}
        email={item.email}
        phoneNo={item.phoneNo}
      />
    );
  };
  render() {
    const { employeeList } = this.props;
    return (
      <View style={styles.container}>
        {employeeList && (
          <FlatList
            contentContainerStyle={styles.list}
            data={employeeList.user}
            keyExtractor={(item, index) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        )}
      </View>
    );
  }
}
EmployeeList.propTypes = {
  employeeList: PropTypes.object,
  getEmployeeList: PropTypes.func
};
EmployeeList.defaultProps = {};

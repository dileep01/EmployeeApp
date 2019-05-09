import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
const ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {props.name}</Text>
      <Text style={styles.title}>Gender: {props.gender}</Text>
      <Text style={styles.title}>Age: {props.age}</Text>
      <Text style={styles.title}>Email: {props.email}</Text>
      <Text style={styles.title}>Phone No:{props.phoneNo}</Text>
    </View>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.string,
  email: PropTypes.string,
  phoneNo: PropTypes.string
};
ListItem.defaultProps = {};

import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles/ListItemStyles";
import PropTypes from "prop-types";
//const { name, gender, age, email, phoneNo } = this.props;
const ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.title}>{props.gender}</Text>
      <Text style={styles.title}>{props.age}</Text>
      <Text style={styles.title}>{props.email}</Text>
      <Text style={styles.title}>{props.phoneNo}</Text>
    </View>
  );
};
export default ListItem;
// export default class ListItem extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text />
//         <Text />
//         <Text />
//         <Text />
//         <Text />
//       </View>
//     );
//   }
// }
ListItem.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  phoneNo: PropTypes.number
};
ListItem.defaultProps = {
  name: "Name",
  gender: "Male",
  age: 25,
  email: "test@gmail.com",
  phoneNo: 1234567890
};

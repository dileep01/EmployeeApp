import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : "",
      focused: false
    };
    this.inputRef = React.createRef();
  }

  onChange(val) {
    if (this.props.onChangeText) {
      this.props.onChangeText(val);
    }
    this.setState({ value: val });
  }
  clearInput = () => {
    this.inputRef.current.clear();
  };
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <View>
        <TextInput
          ref={this.inputRef}
          style={this.props.style}
          value={this.props.value ? this.props.value : this.state.value}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize={this.props.autoCapitalize}
          placeholderTextColor={this.props.placeholderTextColor}
          underlineColorAndroid={this.props.underlineColorAndroid}
          keyboardType={this.props.keyboardType}
          multiline={this.props.multiline}
          maxLength={this.props.maxLength}
          autoFocus={this.props.autoFocus}
          editable={this.props.editable}
          onChangeText={val => this.onChange(val)}
        />
      </View>
    );
  }
}

export default Input;
Input.propTypes = {
  style: PropTypes.any,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  editable: PropTypes.bool
};
Input.defaultProps = {
  style: {
    height: 50,
    borderRadius: 3,
    width: "100%",
    borderWidth: 1,
    borderColor: "#000"
  },
  placeholder: "enter text",
  autoCapitalize: "none",
  underlineColorAndroid: "transparent",
  placeholderTextColor: "#939CA6",
  keyboardType: "default",
  multiline: false,
  secureTextEntry: false,
  autoFocus: false,
  editable: true
};

import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../styles/ButtonStyles";
import PropTypes from "prop-types";
export default class Button extends Component {
  onPress = () => {
    this.props.onPress && this.props.onPress();
  };
  renderContent = () => {
    const { labelStyle, label, renderRow } = this.props;
    if (renderRow) {
      return renderRow;
    }
    return <Text style={labelStyle || styles.label}>{label}</Text>;
  };
  render() {
    // Extract Touchable props
    let touchableProps = {
      testID: this.props.testID,
      accessibilityLabel: this.props.accessibilityLabel,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut
    };
    const {
      disable,
      activeOpacity,
      buttonStyle,
      isLoading,
      buttonColor,
      loaderSize,
      loaderColor,
      disableColor
    } = this.props;
    const backgroundColor = disable ? disableColor : buttonColor;

    return (
      <View>
        <TouchableOpacity
          {...touchableProps}
          activeOpacity={activeOpacity}
          disabled={isLoading ? isLoading : disable}
          onPress={this.onPress}
          style={[buttonStyle || styles.container, { color: backgroundColor }]}
        >
          {!isLoading ? (
            this.renderContent()
          ) : (
            <ActivityIndicator size={loaderSize} color={loaderColor} />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
Button.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  buttonColor: PropTypes.string,
  renderRow: PropTypes.node,
  loaderColor: PropTypes.string,
  disableColor: PropTypes.string,
  loaderSize: PropTypes.string,
  activeOpacity: PropTypes.number,
  disable: PropTypes.bool,
  onPress: PropTypes.func,
  delayLongPress: PropTypes.number,
  delayPressIn: PropTypes.number,
  delayPressOut: PropTypes.number,
  onLongPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
  isLoading: PropTypes.bool,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string
};
Button.defaultProps = {
  label: "Submit",
  activeOpacity: 0.8,
  disable: false,
  isLoading: false,
  buttonColor: "blue",
  loaderColor: "white",
  loaderSize: "small"
};

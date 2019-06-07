import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  start: PropTypes.arrayOf(PropTypes.number),
  end: PropTypes.arrayOf(PropTypes.number),
  style: View.propTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

const defaultProps = {
  colors: ["#C8B287", "#B4985F"],
  start: [0, 0],
  end: [0, 0],
  style: null,
  children: null
};

const LinearGradient = props => {
  console.log(props);
  const { start, end, colors, style, children, ...otherProps } = props;
  const vec = [end[0] - start[0], -(end[1] - start[1])];
  const angleRad = Math.atan(vec[1] / vec[0]);
  const angleDeg = Math.round((angleRad * 180) / Math.PI) + 180;
  const realLocations = colors.map((color, i) => (1 / (colors.length - 1)) * i);
  const colorStrings = colors
    .map((color, i) => `${color} ${Math.round(realLocations[i] * 100)}%`)
    .join(", ");
  return (
    <View
      {...otherProps}
      style={[
        {
          background: `linear-gradient(to right bottom, ${colorStrings})`
        },
        style
      ]}
    >
      {children}
    </View>
  );
};

LinearGradient.propTypes = propTypes;
LinearGradient.defaultProps = defaultProps;

export default LinearGradient;
// module.exports = LinearGradient;

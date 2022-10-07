import React, { startTransition } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBASA",
  grey: "#a9a9a9",
};

function Reviews() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0 );
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };
  const handleMouseOver = value => {
    setHoverValue(value)
  };
  const handleMouseLeave = value => {
    setHoverValue(undefined)
  };
  return (
    <div style={styles.container}>
      <h2>User Reviews</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return <FaStar 
           key={index}
           size = {24} 
           style = {{
            marginRight: 10,
            cursor: "pointer"
           }}
          color = {(hoverValue || currentValue )> index ? colors.orange : colors.grey}
          onClick = {()=>handleClick(index + 1)}
          />;
        })}
      </div>
    </div>
  );
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}
export default Reviews;

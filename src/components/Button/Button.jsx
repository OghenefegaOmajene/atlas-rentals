// GlassmorphicButton.jsx
import React from 'react';
import './Button.css';

const Button = ({ title, Icon, width, height, ...props }) => {
  return (
    <button style={{width: width, height: height}} className="glassmorphic-btn" {...props}>
      <span>{title}</span>
      {Icon && <Icon className="icon" />}
    </button>
  );
};

export default Button;

// import React from 'react'
// import './Button.css'
// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button
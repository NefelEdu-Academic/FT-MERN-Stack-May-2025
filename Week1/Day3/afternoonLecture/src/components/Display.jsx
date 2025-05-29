import React from 'react'

const Display = (props) => {
    const {text, count}= props
  return (
    <div>
      <p>
        Displaying input text: {text} {count}
      </p>
    </div>
  );
}

export default Display
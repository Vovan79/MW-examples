import React from 'react';

function MediaPlayerSection(props) {
  const { fileDropped } = props;
  const visible = fileDropped === true ? 'block' : 'none';

  return (
    <div style={{display: `${visible}`}}>
      Media Player
    </div>
  )
}

export default MediaPlayerSection;
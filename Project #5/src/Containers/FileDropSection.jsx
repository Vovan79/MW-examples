import React from 'react';
import FileDrop from 'react-file-drop';

function FileDropContainer(props) {
  const { handleDrop } = props;
  return (
    <div className="file-drop-container" id="file-drop-container">
      <FileDrop onDrop={handleDrop}>
        Drag and Drop your video on the mat
      </FileDrop>
    </div>
  );
}

export default FileDropContainer;
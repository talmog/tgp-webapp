import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import JoditEditor from 'jodit-react';
import tgpApi from 'api/tgpApi';

const JoditEditorWrapper = ({
  initialText = '',
  onChangeCallback = () => {},
}) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(initialText);
  }, [initialText]);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    enableDragAndDropFileToEditor: true,
    filebrowser: {
      ajax: {
        url: tgpApi.uploadedImages.url,
      },
      uploader: {
        url: tgpApi.uploadImage.url,
      },
    },
    uploader: {
      url: tgpApi.uploadImage.url,
      format: 'json',
      pathVariableName: 'path',
    },
  };

  const onBlur = value => {
    setContent(value);
    // console.log(value);
    onChangeCallback(value);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => onBlur(newContent.target.innerHTML)} // preferred to use only this option to update the content for performance reasons
    />
  );
};

JoditEditorWrapper.propTypes = {
  initialText: PropTypes.string,
  onChangeCallback: PropTypes.func,
};

export default JoditEditorWrapper;

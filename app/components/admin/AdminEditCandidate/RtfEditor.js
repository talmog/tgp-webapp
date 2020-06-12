/**
 *
 * RtfEditor
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';

function RtfEditor({ initialText = '', onChangeCallback = () => {} }) {
  const [initialValue, setInitialValue] = useState(false);

  useEffect(() => {
    const initHtml = RichTextEditor.createValueFromString(initialText, 'html');
    setInitialValue(initHtml);
  }, [initialText]);

  const onChange = value => {
    setInitialValue(value);
    onChangeCallback(value);
  };

  return (
    <>
      {initialValue && (
        <RichTextEditor value={initialValue} onChange={onChange} />
      )}
    </>
  );
}

RtfEditor.propTypes = {
  initialText: PropTypes.string,
  onChangeCallback: PropTypes.func,
};

export default RtfEditor;

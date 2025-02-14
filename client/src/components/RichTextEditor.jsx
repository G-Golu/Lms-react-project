

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({input, setInput}) => {
    const handleChange = (Content) => {
        setInput({...input, description: Content});
    }
  
  return <ReactQuill theme="snow" value={input.description} onChange={handleChange} />;
}

export default RichTextEditor;
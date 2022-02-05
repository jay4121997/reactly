import React, { useEffect } from 'react';
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import classes from './TextEditor.module.css'

const TextEditor = () => {
    useEffect(() => {
        var quill = new Quill('#editor-container', {
            theme: 'snow'  // or 'bubble'
        });
    },[])
    
  return <div id='editor-container' className={classes.editor_container}></div>;
};

export default TextEditor;

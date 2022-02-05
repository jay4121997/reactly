import React, { useState } from 'react';
import { $CombinedState } from 'redux';
import TextEditor from '../../components/TextEditor/TextEditor';


const ComponentUpload = () => {
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const addTagHandler = (e) => {
        if (e.keyCode === 13) {
            
            setTags((prevState) => [...prevState, e.target.value])
        }
    }
    console.log(tags);
    return <div>
        <form>
            {/* custom Input */}
            <label htmlFor="title">Title</label><br />
            <input type="text" name='title' onChange={(e) => setTitle(e.target.value)} /> 
            <br />
            <label htmlFor="">Description</label>
            <TextEditor />
            <br />
            <label htmlFor="tags">Tags</label>
            <br />
            
            {tags && tags.map((t) =>console.log(t))}
            <input type="text" name='tags' id='tags' onKeyDown={(e) => addTagHandler(e)} />
            
            <br />
            <label htmlFor=""></label>
      </form>
  </div>;
};

export default ComponentUpload;

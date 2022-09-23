import {useState} from 'react';
import axios from 'axios';
import useUser from '../hooks/useUser';

const AddCommentForm = ({articleName, onArticleUpdated}) => {
    const [name,setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const {user} =  useUser();

    const addComment = async () => {
        const token = user && await user.getIdTokens();
        const headers = token ? {authtoken: token} : {};
        const response =await axios.post(`/api/articles/${articleName}/comments`, {postedBy:name, text:commentText}, {headers});
        const updatedArticle = response.data;

        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }

    return (
        <div id='add-comment-form'>
            <h3>Add a comment</h3>
            <label>
                Name:
                <input value={name} onChange={e => setName(e.target.value)} type='text' />
            </label>
            <label>
                Comment:
                <textarea value={commentText} onChange={e => setCommentText(e.target.value)} rows='4' cols='50' />
            </label>
            <button onClick={addComment}>Add comment</button>
        </div>
    )
};

export default AddCommentForm;
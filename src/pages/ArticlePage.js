import {useParams} from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import {useState, useEffect} from 'react';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {

    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});
    const { articleId } = useParams();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`)
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        loadArticleInfo();
    },[])

    const article = articles.find(article => article.name === articleId);
    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    };

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <h3>{article.subtitle}</h3>

            <div className='upvotes-section'>
                <button onClick={addUpvote}>Upvote</button>
                <p>This article has {articleInfo.upvotes} upvote(s)</p>
            </div>

            {article.content.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
            ))}

            <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
            <CommentsList comments = {articleInfo.comments} />
        </>
    )
}

export default ArticlePage;
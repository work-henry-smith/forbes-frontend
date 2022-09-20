import {useParams} from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import {useState, useEffect} from 'react';
import axios from 'axios';

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

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <h3>{article.subtitle}</h3>
            <p>This article has {articleInfo.upvotes} upvote(s)</p>
            {article.content.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </>
    )
}

export default ArticlePage;
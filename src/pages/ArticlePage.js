import {useParams} from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const {articleId} = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
            <h1>{article.title}</h1>
            <h3>{article.subtitle}</h3>
            {article.content.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </>
    )
}

export default ArticlePage;
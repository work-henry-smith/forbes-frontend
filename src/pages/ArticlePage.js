import {useParams} from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const {articleId} = useParams();
    const article = articles.find(article => article.name === articleId);

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
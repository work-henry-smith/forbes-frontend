import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
    return (
        <>
            <h1> Danh sách bài viết</h1>
            <ArticlesList articles={articles} />
        </>
    )
}

export default ArticlesListPage;
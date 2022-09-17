import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';


function App() {
  return (
    <div className="App">
      <h1>This is a website for sharing free economic news and more</h1>
      <div id='page-body'>
        <AboutPage />
        <ArticlePage />
        <ArticlesListPage />
        <HomePage />
      </div>
    </div>
  );
}

export default App;

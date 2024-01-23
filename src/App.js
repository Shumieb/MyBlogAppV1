import './App.css';
import BlogList from './Components/BlogList';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import NewArticlesPanel from './Components/NewArticlesPanel';
import PopularArticlesPanel from './Components/PopularArticlesPanel';
import SearchBlogs from './Components/SearchBlogs';
import UpcomingArticlesPanel from './Components/UpcomingArticlesPanel';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <h1>My Blog Site App</h1>
        <div>
          <div>
            <SearchBlogs />
            <BlogList />
          </div>
          <div>
            <UpcomingArticlesPanel />
            <NewArticlesPanel />
            <PopularArticlesPanel />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

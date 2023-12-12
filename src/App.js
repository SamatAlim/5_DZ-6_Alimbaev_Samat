import './App.css';
import CreatePostPage from './pages/createPage/CreatePage';
import PostPage from './pages/postPage/PostPage';

function App() {
  return (
    <div className="App">
      <div>
        <CreatePostPage/>
      </div>
      <div>
        <PostPage/>
      </div>

    </div>
  );
}

export default App;

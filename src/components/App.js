import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function App() {
  return (
    <div className="App">
      <BooksList categories={categories} />
      <BooksForm categories={categories} />
    </div>
  );
}

export default App;

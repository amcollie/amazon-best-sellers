import BookList from './components/BookList'
import books from './books'
import './index.css'

function App() {
  return (
    <>
      <BookList books={books} />
    </>
  )
}
export default App

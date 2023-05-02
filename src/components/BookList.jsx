import Book from './Book'

function BookList({ books }) {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </section>
    </>
  )
}

export default BookList

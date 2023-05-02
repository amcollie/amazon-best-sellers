const Book = ({ img, title, author, id }) => {
  return (
    <article className='book'>
      <span className='rank'>#{id}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book

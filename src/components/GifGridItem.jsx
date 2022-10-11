
const GifGridItem = ({id, title, image}) => {
  return (
    <div className="card" >
      <p>{title}</p>
      <img src={image} alt={title} />
    </div>
  )
}

export default GifGridItem
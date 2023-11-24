
const Movie = (props) => {
  return (
    <div className="movie">

        <img src={props.img} alt=""/>
        <p className="title">Title :{props.title}</p>
        <p>Year: {props.Year}</p>

        </div>
  )
}

export default Movie
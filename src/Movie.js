const Movie = ({ Year, Poster, Type, Title }) => {
    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://www.coremedical.co.za/wp-content/uploads/2020/08/no-image.jpg'} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    )
}

export default Movie;
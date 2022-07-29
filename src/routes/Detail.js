import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    console.log(id);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setLoading(false);
        setMovieDetail(json.data.movie);
    }

    console.log(movieDetail);

    useEffect(() => {
        getMovie();    
    },[]);
    return (
        <div>
            {loading ? <h2>Loading...</h2> : 
            <div>
                <img src={movieDetail.medium_cover_image}></img>
                <h2>{movieDetail.title}</h2>
                <h3>출시년도 : {movieDetail.year}</h3>
                <span>장르 : </span>{movieDetail.genres.map((g) => (
                    <button>{g} </button>
                ))}
    
                <p>평점 : {movieDetail.rating}점</p>
                <p>런타임 : {movieDetail.runtime}분</p>
                <button><Link to={"/"}>Home</Link></button>
            </div>
          
            }
        </div>
    )
}

export default Detail;
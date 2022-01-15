import React from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {
        state = [{ 
            movies: getMovies() 
        }];

    //    getAllMovies = () => {
    //     console.log("movies")
    //   };
    
    render() { 

        

        return (

        <React.Fragment>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.movies.map(movie => (
                        <tr key={movie._id}>   
                            <th scope="row">{movie.genre.name}</th>
                            <td>{movie.genre}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button className="btn btn-danger btn-sm">Delete
                                </button>
                            </td>
                        </tr>
                            
                        ))};
                            
                    </tbody>
            </table> 
        </React.Fragment>
        
        );
    }
}
 
export default Movies;
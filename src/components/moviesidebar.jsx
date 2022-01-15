import React, { Component } from 'react';

class MovieSideBar extends Component {

    render() { 
        return (
        <React.Fragment>
                    
        </React.Fragment>
        );
    }
    
    

}


// state = {
//     movies: getMovies()
// };

// handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({movies});
// };
    

// render() { 

//     if( this.state.movies.length === 0 )
//      return <p>There are no movies in the database</p>;

//     return (<div>
        
//            <h4>Showing {this.state.movies.length} movies in the database.</h4>
// <br/>
//   <table className="table table-hover">
// <thead>
// <tr>
//   <th scope="col">#</th>
//   <th scope="col">Title</th>
//   <th scope="col">Genre</th>
//   <th scope="col">Stock</th>
//   <th scope="col">Rate</th>
//   <th scope="col"></th>
// </tr>
// </thead>
// <tbody>
//   { this.state.movies.map(movie => (
//   <tr key={movie._id}>
//     <th scope="row">{  }</th>
//     <td >{movie.title}</td>
//     <td >{movie.genre.name}</td>
//     <td >{movie.numberInStock}</td>
//     <td>{movie.dailyRentalRate}</td>
//     <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
// </tr>))}

// </tbody>
// </table>
//         </div>
//     );
// }
// }
 
export default MovieSideBar;
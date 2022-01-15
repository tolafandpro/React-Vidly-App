import React from 'react';

class NavBar extends React.Component {
              
        render() { 
          return (
          <React.Fragment>
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a href='oyetoladavid.com' className="navbar-brand">Navbar</a>
              <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                <form className="d-flex">
                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                 <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
         </nav>
         <br/>

      </React.Fragment>
          );
        }    
    }
 
export default NavBar;
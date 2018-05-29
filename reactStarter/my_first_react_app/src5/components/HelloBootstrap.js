import React from "react";

const HelloBootstrap = () => (

  <div className="container">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <a className="navbar-brand" href="#">Navbar</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">Link</a>
         </li>
         <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
             <a className="dropdown-item" href="#">Another action</a>
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled" href="#">Disabled</a>
         </li>
       </ul>
       <form className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
     </div>
   </nav>
    


    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="" role="button">Learn more</a>
        </p>
        
    </div>


    <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src="..." alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    
    
  </div>
);

export default HelloBootstrap;
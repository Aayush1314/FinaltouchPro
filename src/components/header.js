import React from "react"
import '../style/header.css'

class Navbar extends React.Component {

  clicked = (e) => {
    this.props.onClick(e.target.innerText)
  }

  rclicked = (event) => {
    this.props.rclicked(event.target.innerText)
  }
  aclicked = (event) => {
    this.props.aclicked(event.target.innerText)
  }
  render() {
    return (
      <div>

        <div class="jumbotron style-j bgc">
          <div className="text-center">
            <h1>Final Touch Productions</h1>
          </div>

        </div>
        <nav class="navbar navbar-expand-lg navbar-light bgc">
          
            <div className="  d-flex justify-content-center">
          <a class="navbar-brand" onClick={this.aclicked} href="#">About</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="navbar-brand" href="#">Contact<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" onClick={this.rclicked} href="#">Reviews</a>
              </li>
              <li class="nav-item dropdown">
                <a class="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" onClick={this.clicked} href="#">Wedding</a>
                  <a class="dropdown-item" onClick={this.clicked} href="#">Food</a>
                  <a class="dropdown-item" onClick={this.clicked} href="#">Travel</a>
                </div>
              </li>
            </ul>
          </div>
          </div>
          
        </nav>
      </div>
    )
  }
}

  export default Navbar
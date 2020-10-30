import React from "react"
import Navbar from "./header"
import View from "./imageview"
import Travel from "./Travel"
import Food from "./Food"
import Review from "./review"
import About from "./about"

class App extends React.Component{

  state = { images : [], review: null, about:1 }
  gallery={
  Travel: Travel,
  Food: Food,
  }

  clicked = (itemClicked) => {
    this.setState({images:this.gallery[itemClicked],review:0,about:0})
  }
  
  rclicked = (reviewclicked) =>{
    this.setState({review:1,images:[],about:0 })
  }

  aclicked = (reviewclicked) =>{
    this.setState({review:0,images:[],about:1 })
  }

  render(){
    if (this.state.review){
      console.log("RRRR")
      return(
        <div >
          <Navbar onClick={this.clicked} rclicked={this.rclicked} aclicked={this.aclicked}></Navbar>
          <Review ></Review>
          </div>
      )  
    }
    if(this.state.about){
      console.log(this.state.images)
      return(
        <div >
          <Navbar onClick={this.clicked} rclicked={this.rclicked} aclicked={this.aclicked}></Navbar>
          <About></About>
        </div>  
      )  
    }
    console.log(1)
    return(
      <div >
          <Navbar onClick={this.clicked} rclicked={this.rclicked} aclicked={this.aclicked}></Navbar>
          <View images={this.state.images}></View>
      </div>
    )
}
}

export default App;
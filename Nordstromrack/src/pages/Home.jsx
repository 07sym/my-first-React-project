import React from "react"
import ImageSlideShow from "../ImageSlideShow"
import Body from "../Body"
import Head from "../Head"
import Menu from "../Menu"


function Home(){
    return(
        <div>
          <Menu/>
          <Head/>
          <ImageSlideShow/>
          <Body/>
          
        </div>
    )
}
export default Home
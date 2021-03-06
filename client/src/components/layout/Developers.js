import React, { Component } from "react";
import "../layout/css/About.css"


class Developers extends Component{
    render(){
        return(
            <>
                <div className=" p-4 border border-bottom border-dark">
                  <h3 className=" about center" >Developers</h3>
                  <hr class="my-4"/>
                </div>
                <div className="flex space-x-4 p-4">
                  <div className="flex-1 container border rounded bg-light p-2 md:inline-flex">
                      <img  className="float-right border border-dark rounded p-2 ml-4"/>
                      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                          <blockquote>
                              <p style={{fontFamily:"monospace",fontWeight:"bold",fontSize:"20px"}}>
                                "Programming isn't about what you know; it's about what you can figure out.”
                              </p>
                          </blockquote>
                          <figcaption class="font-medium">
                              <div className="text-cyan-600" style={{fontFamily:"monospace",fontWeight:"bold",fontSize:"20px"}}>
                                  Tanmay Chakraborty
                              </div>
                              <div class="text-gray-500">
                                  Full Stack Developer, Dhanbad
                              </div>
                              <div class="text-gray-500">
                                  <span className="text-cyan-500">E-Mail : </span>tanmaychakrabortydhn@gmail.com
                              </div>
                          </figcaption>
                      </div>
                  </div>
                  <hr style={{width:"70%",textAlign:"left",marginLeft:"auto",marginTop:"20px"}} />
                  <div className="flex-1 container border rounded bg-light p-2 md:inline-flex">
                      <img  className="float-left border border-dark rounded p-2 mr-4"/>
                      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                          <blockquote>
                              <p style={{fontFamily:"monospace",fontWeight:"bold",fontSize:"20px"}}>
                                "The only way to learn a new programming language is by writing programs in it."
                              </p>
                          </blockquote>
                          <figcaption class="font-medium">
                              <div className="text-cyan-600" style={{fontFamily:"monospace",fontWeight:"bold",fontSize:"20px"}}>
                                      Sayan Talukdar
                              </div>
                              <div class="text-gray-500">
                                  Full Stack Developer, Durgapur
                              </div>
                              <div class="text-gray-500">
                                  <span className="text-cyan-500">E-Mail : </span>sayantalukdar30@gmail.com 
                              </div>
                          </figcaption>
                      </div>
                  </div>    
                </div>
            </>
        )
    }
}
export default Developers;
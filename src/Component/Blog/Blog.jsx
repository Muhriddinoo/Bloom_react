import React from "react";
import house from "../../images/1.png";
import house1 from "../../images/2.png";
import house2 from "../../images/3.png";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog-inner">
            <div className="blog-img">
              <div className="one">
                <img src={house} alt="" />
                <h3>- 01 -</h3>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
              </div>
              <div className="one">
                <img src={house1} alt="" />
                <h3>- 01 -</h3>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
              </div>
              <div className="one">
                <img src={house2} alt="" />
                <h3>- 01 -</h3>
                <h3>Mirror Maze</h3>
                <p>residential complex with mirror walls</p>
              </div>
            </div>
            <div className="blog-text">
              <button className="btn2">
                <i className="icon bx bx-left-arrow-alt"></i>
              </button>
              <button className="btn1">
                <i class="icon bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

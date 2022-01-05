import { useState } from "react";
import "./works.scss";
export default function Works() {
    const [currentSlide, setcurrentSlide] = useState(0);
    const data=[
        {
            id:1,
            icon:"./assets/mobile.png",
            title:"Web Development",
            desc:"Created a portfolio website using React Js",
            img:"https://img.freepik.com/free-vector/16-pages-minimalist-black-portfolio-design_123371-155.jpg?size=626&ext=jpg",
            underline:"Projects",
        },
        {
            id:2,
            icon:"./assets/computer.png",
            title:"Competitive Programming",
            desc:"Aquired Knowledge in Competitive Programming",
            img:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
            underline:"Skills",
        },
        {
            id:3,
            title:"Team Work",
            icon:"./assets/team.png",
            desc:"Worked as an Workshop team member of Technex'21,Annual Technomanagement Fest IIT BHU ",
            img:"https://www.knowafest.com/files/uploads/technex%2021%20poster-2021040103.jpg",
            underline:"Team Wroks",
        }
    ]
    const handleClick=(way)=>{
        way==="left"?setcurrentSlide(currentSlide>0?currentSlide-1 : 2) :
        setcurrentSlide(currentSlide<data.length-1 ?  currentSlide+1 : 0)
    }
  return (
    <div className="works" id="works">

    <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>{d.underline}</span>
              </div>
            </div>
            <div className="right">
                <img src="https://navsurf.com/wp-content/uploads/2017/09/Web-Application-Frameworks.png" alt="" />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=>handleClick()}/>
    </div>
  );
}

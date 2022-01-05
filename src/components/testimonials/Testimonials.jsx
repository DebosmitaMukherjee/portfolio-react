import "./testmonials.scss";

export default function Testimonials() {
  const data = [
    {
        id: 1,
        name: "Technex'21",
        title: "Annual Technomanagement Fest IIT BHU",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_techfest.jpg",
        icon: "assets/linkedin.png",
        desc: "Worked as an Workshop team memner of Technex'21.",
        
      },
    {
      id: 2,
      name: "Google Kickstart",
      title: "Google Coding Competitions",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200908225219/What-is-Google-Kick-Start-Important-Dates-Eligibility-Contest-Details.png",
      icon: "assets/cirtificate.png",
      desc: "Secured best rank of 1910 in Google Kickstart 2021,and got a Cirtificate for that.",
      featured:true,
    },
    
    {
        id:3,
        name:"Induction Mentor",
        title:"Worked as an Induction Mentor for 2021 batch at IIT BHU",
        img:"https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
        icon:"assets/team.png",
        desc:"Played an important role to guide freshers in their academic problems"
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">
             {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

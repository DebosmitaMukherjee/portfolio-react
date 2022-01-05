import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  cpPortfolio,
  webPortfolio,
  porPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "competitive",
      title: "Competitive Programming",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "por",
      title: "Position of Responsibility",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "competitive":
        setData(cpPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "por":
        setData(porPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <img
            src={d.img}
            alt=""
            />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}

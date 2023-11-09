import { useState } from "react";
// import mustang from "../../../../images/mustang.jpg";
// import veg from "@../../../../mages/veg.jpg";
// import tiger from "../../../../images/tiger.jpg";
// import tree from "../../../../images/tree.jpg";
const Works = () => {
  const [loadMore, setLoadMote] = useState(false);
  const projectData = [
    {
      id: 0,
      imagePath:
        "https://images.pexels.com/photos/3536276/pexels-photo-3536276.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 1,
      imagePath:
        "https://images.pexels.com/photos/4208113/pexels-photo-4208113.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 2,
      imagePath:
        "https://images.pexels.com/photos/18038879/pexels-photo-18038879/free-photo-of-luxury-shelby-mustang-standing-on-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
    {
      id: 3,
      imagePath: "splendor bike",
      techStack: "HTMl CSS JavaScript React",
      title: "Project 1",
      dec: "Server hosting",
    },
  ];
  return (
    <div className="workssection" id="works">
      {" "}
      <p className="aboutHeader ">Works</p>
      <div className="grid-layout lg:mt-[50px]">
        {loadMore
          ? projectData.map((item, index) => {
              return (
                <div key={index} className="project-box">
                  <div className="overflow-hidden">
                    <img
                      className="project_image"
                      src={item.imagePath}
                      alt="..."
                    />
                  </div>
                  {/* <p className="tech-stack-text">{item.techStack || "-"}</p> */}
                  {/* <div className="project-content">
                    <p className="project-title">{item.title || "-"}</p>
                    <p className="project-sub-text">{item.dec || "-"}</p>
                    <a className="live-btn">{`Live <~>`}</a>
                  </div> */}
                </div>
              );
            })
          : projectData.map((item, index) => {
              if (index <= 2) {
                return (
                  <div key={index} className="project-box">
                    <div className="overflow-hidden">
                      <img
                        className="project_image"
                        src={item.imagePath}
                        alt="..."
                      />
                    </div>
                    {/* <p className="tech-stack-text">{item.techStack || "-"}</p>
                    <div className="project-content">
                      <p className="project-title">{item.title || "-"}</p>
                      <p className="project-sub-text">{item.dec || "-"}</p>
                      <a className="live-btn">{`Live <~>`}</a>
                    </div> */}
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
};

export default Works;

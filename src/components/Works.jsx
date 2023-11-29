import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Works = () => {
  const [loadMore, setLoadMote] = useState(false);

  const projectData = [
    {
      id: 0,
      imagePath:
        "https://images.pexels.com/photos/3536276/pexels-photo-3536276.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: "Next js, Node js, Mongo DB",
      title: "Supper car dealership",
      isDisabled: true,
      github: "",
    },
    {
      id: 1,
      imagePath:
        "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=600",
      techStack: "Next js, socket.io, d3, Node js",
      title: "Real time data transfer",
      isDisabled: true,
      github: "",
    },
    {
      id: 2,
      imagePath:
        "https://images.pexels.com/photos/14936124/pexels-photo-14936124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      techStack: "Next js, Node js",
      title: "You’re using it right now",
      isDisabled: false,
      github: "https://github.com/leoraptor/sharanweb",
    },
  ];
  const [observerVisible, setObserverVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setObserverVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`workssection ${observerVisible ? "fadeScroll" : "obfade"}`}
      id="works"
      ref={myRef}
    >
      <p className="aboutHeader ">Works</p>
      <div className="grid-layout mt-[40px]  lg:mt-[50px]">
        {loadMore
          ? projectData.map((item, index) => {
              return (
                <div key={index} className="project-box">
                  <div className="overflow-hidden relative">
                    <img
                      className="project_image"
                      src={item.imagePath}
                      alt="..."
                    />
                  </div>
                  <div className="project-content">
                    <p className="project-title">{item.title || "-"}</p>
                    <p className="project-sub-text">{item.dec || "-"}</p>
                    <a
                      aria-label="Live <~>"
                      className="live-btn"
                    >{`Live <~>`}</a>
                  </div>
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
                    <p className="tech-stack-text">{item.techStack || "-"}</p>
                    <div className="project-content">
                      <p className="project-title">{item.title || "-"}</p>
                      {/* <p className="project-sub-text">{item.dec || "-"}</p> */}
                      <div className="flex justify-between items-center w-full gap-[25px]">
                        <button
                          className={`live-btn ${
                            index === 2 ? "cursor-not-allowed" : ""
                          }`}
                          onClick={() => {
                            if (item.isDisabled) {
                              toast(
                                "Whoops! Sorry got busy at work, I will Update this sooner!"
                              );
                            }
                          }}
                        >
                          Go live
                        </button>
                        <button
                          className="live-btn"
                          onClick={() => {
                            if (item.isDisabled) {
                              toast(
                                "Whoops! Sorry got busy at work, I will Update this sooner!"
                              );
                            } else {
                              window.open(item.github, "_blank");
                            }
                          }}
                        >
                          github
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Works;

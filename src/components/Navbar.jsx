import { useState, useEffect } from "react";
//icon
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ShortTextRoundedIcon from "@mui/icons-material/ShortTextRounded";

//icon
import Drawer from "@mui/material/Drawer";
//
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState(false);
  // let windowWidth = window.innerWidth;

  let navLineStyle = {
    "--nav": false ? "1s" : "7.2s",
  };

  useEffect(() => {
    // if (windowWidth > 768) {
    //   setMenu(false);
    // } else {
    //   setTimeout(() => {
    //     setOpen(true);
    //   }, 5000);
    // }

    if (localStorage.getItem("isLoaded")) {
      setIsLoaded(true);
      navLineStyle = {
        "--nav": false ? "1s" : "7.2s",
      };
    } else {
      setIsLoaded(false);
      navLineStyle = {
        "--nav": false ? "1s" : "7.2s",
      };
    }
  }, []);
  return (
    <div>
      <div className="navbar">
        <a href="/" className=" cursor-pointer">
          <span className="stripes fade" style={navLineStyle}></span>
        </a>
        <div
          className="block lg:hidden"
          onClick={() => {
            setMenu(true);
          }}
        >
          <ShortTextRoundedIcon sx={{ fontSize: "40px" }} />
        </div>
        <ul>
          <li className="cta">
            <a href="#" className="hover-underline-animation">
              Home
            </a>
          </li>
          <li className="cta">
            <a href="#works" className="hover-underline-animation">
              Works
            </a>
          </li>
          <li className="cta">
            <a href="#skills" className="hover-underline-animation">
              Skills
            </a>
          </li>
          <li className="cta">
            <a href="#aboutme" className="hover-underline-animation">
              About-me
            </a>
          </li>
        </ul>
        <div className="cta hidden lg:flex">
          <a
            href="#contact"
            className="flex hover-underline-animation justify-center items-center navcontact"
          >
            Contact
            <svg
              className="handDraw"
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="90"
            >
              <path
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeWidth="2"
                d="M1.791 49.777c-.154 4.195-.626 7.827.954 11.852C7.36 73.39 17.485 82.682 29.442 85.955c6.397 1.75 13.576 2.803 20.193 1.89C62.927 86.012 76.9 76.609 87.222 68.784c20.494-15.536 36.094-38.7 35.837-65.222-.256 2.407 2.277 5.37 3.358 7.347 3.17 5.796 5.405 12.093 8.129 18.101.294-2.43-1.167-8.517-1.441-9.82a58.697 58.697 0 00-4.824-15.298 6.762 6.762 0 01-1.419-2.863c-3.007-.098-5.698.975-8.074 3.217-7.107 4.072-13.72 9.399-19.817 14.854"
              ></path>
            </svg>
          </a>
        </div>

        {/* mobile navbar  */}
        <Drawer
          anchor={"right"}
          open={menu}
          onClose={() => {
            setMenu(false);
          }}
          PaperProps={{
            sx: {
              // backgroundColor: "transparent",
              boxShadow: "none",
              width: "90%",
            },
          }}
        >
          <div className="mobileNavbar">
            <div className="ofmob">
              <CloseRoundedIcon
                sx={{ color: "black", fontSize: "40px" }}
                onClick={() => {
                  setMenu(false);
                }}
              />
            </div>
            <ul>
              <li
                className={`${menu ? "showmyli" : ""}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                <a href="#" className="hover-underline-animation">
                  Home
                </a>
              </li>
              <li
                className={`${menu ? "showmyli" : ""}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                <a href="#works" className="hover-underline-animation">
                  Works
                </a>
              </li>
              <li
                className={`${menu ? "showmyli" : ""}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                <a href="#skills" className="hover-underline-animation">
                  Skills
                </a>
              </li>
              <li
                className={`${menu ? "showmyli" : ""}`}
                onClick={() => {
                  setMenu(false);
                }}
              >
                <a href="#aboutme" className="hover-underline-animation">
                  About-me
                </a>
              </li>
            </ul>
            <a
              onClick={() => {
                setMenu(false);
              }}
              href="#contact"
              className={`flex hover-underline-animation justify-center items-center navcontact ${
                menu ? "contactani" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </Drawer>
        {/* mobile navbar  */}

        {/* pop up  */}
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <p className="flex justify-between items-center px-[24px] pt-[20px] pb-[5px] border-t-[5px] border-t-black ">
            <div className="whoopsM">Message </div>
            <CloseRoundedIcon
              sx={{ color: "black", fontSize: "30px", cursor: "pointer" }}
              onClick={() => {
                setOpen(false);
              }}
            />
          </p>
          <DialogContent>
            <p className="whoops">
              Hey, don't miss out the full experience take a peek at the desktop
              view!
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;

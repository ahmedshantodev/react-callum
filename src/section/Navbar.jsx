import React, { useState } from "react";
// resusble components
import ImageItem from "../components/ImageItem";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
// image
import navIcon from "../../src/assets/images/logo-light.png";
// react icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  const [menuHide, setMenuHide] = useState(true);

  return (
    <section className=" bg-[#00000043] backdrop-blur-sm py-[22px] fixed top-0 left-0 w-full z-10">
      <div className="container max-w-[1320px] mx-auto flex justify-between">
        <div className="logo">
          <a href="#index.html">
            <ImageItem imagesrc={navIcon} imgStyle="w-[130px]" />
          </a>
        </div>
        <div className="menu text-[16px] flex">
          <a href="tel:060444434444" className="text-white flex items-center">
            <BsFillTelephoneFill className="text-white mr-2" />
            (060) 444 434 444
          </a>
          {menuHide ? (
            <Button
              clickEvent={() => setMenuHide(false)}
              buttonStyle="!text-white ml-4 px-2 text-base !bg-transparent"
              buttonText={<FaBars />}
            />
          ) : (
            <div className="menu w-[100%] h-[100vh] text-white bg-[#000000ea] backdrop-blur-sm fixed top-0 left-0 text-center">
              <div className="container mx-auto max-w-[1320px] relative">
                <Button
                  clickEvent={() => setMenuHide(true)}
                  buttonStyle="rotate-45 text-[30px] absolute top-[20px] right-0  !text-white ml-0 px-0 text-base !bg-transparent"
                  buttonText={<AiOutlinePlus />}
                />
              </div>
              <div className="navbar mt-[230px]">
                <ul>
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#home">Home</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#about-me">about me</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#whta-i-do">what i do</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#resume">resume</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#portfolio">portfolio</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#faq">faq</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#client-speak">client speak</a>}
                  />
                  <ListItem
                    clickEvent={() => setMenuHide(true)}
                    ListItemStyle={`!text-white !text-[21px] !mb-[20px]`}
                    listItemText={<a href="#contact-me">contact me</a>}
                  />
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;

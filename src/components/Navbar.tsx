import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll/modules";


const NavbarContainer = styled.div`
  ${tw`
    h-20
    w-screen
    bg-black
    fixed
    
    `}
`;

const NavbarStyle = styled.div`
  ${tw`
  text-white
  uppercase
  flex
  items-center
  justify-between
  h-full
  font-extrabold
  text-5xl
  mx-80
  
  hover:cursor-pointer
    `}
`;

const Button = styled.button`
  ${tw`
  w-20
  font-extrabold
    
    hover:bg-pink-500
    hover:rounded-md
    `}
`;

export interface INavbarProps {

}

const Navbar: React.FunctionComponent<INavbarProps> = () => {

  return (
    <>
      <NavbarContainer>
        <NavbarStyle>

          <Button>
            <Link activeClass="active" to="page1" spy={true} smooth={true} offset={0} duration={500}>
              1
            </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page2" spy={true} smooth={true} offset={0} duration={500}>
            2
          </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page3" spy={true} smooth={true} offset={50} duration={500}>
            3
          </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page4" spy={true} smooth={true} offset={50} duration={500}>
            4
          </Link>
          </Button>

          <Button>
          <Link activeClass="active" to="page5" spy={true} smooth={true} offset={50} duration={500}>
            5
          </Link>
          </Button>

        </NavbarStyle>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

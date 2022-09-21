import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import "../../assets/plugins/fontawesome/css/all.min.css";
import "../../assets/plugins/fontawesome/css/fontawesome.min.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Modal, Button, Spinner } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Axios from "axios";
import Web3 from "web3";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import NetworkErrorModal from "../Modals/NetworkErrorModal";
import {
  Header,
  FixedHeader,
  NavLogoLink,
  LoginLink,
  HamburgerLink,
  DashboardLink,
  HoverEffectMenu,
  CloseOption,
} from "./Header.styles";
import Logo from "../../assets/img/logo.png";
import WhiteLogo from "../../assets/img/white-logo.png";
import RightLogo from "../../assets/img/rightLogo.png";
import Techi from "../../assets/img/techi.png";

function HeaderHome(props) {
  let [menuOpenedClass, setMenuOpenedClass] = useState();
  let [dropdownOpen1, setDropdownOpen1] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  const [onScrollChange, setOnScrollChange] = useState(false);

  let [network, setNetwork] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHeaderOnScroll = () =>
    window.scrollY >= 100 ? setOnScrollChange(true) : setOnScrollChange(false);

  window.addEventListener("scroll", changeHeaderOnScroll);

  let Login = async () => {
    setIsLoading(true);
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }

    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const network = await web3.eth.net.getNetworkType();
    console.log("Account test: ", accounts[0], network);
    if (network !== "ropsten") {
      setNetwork(network);
      setIsLoading(false);

      handleShow();
    } else {
      let loginData = {
        address: accounts[0],
        network: network,
        // roles: 'admin'
      };
      Axios.post("user/auth/login", loginData).then(
        (response) => {
          console.log("response", response);
          Cookies.set("Authorization", response.data.token, {});
          if (response.data.roles === "user") {
            localStorage.setItem("Address", accounts[0]);
          }
          setIsLoading(false);
          window.location.reload();
        },
        (error) => {
          if (process.env.NODE_ENV === "development") {
            console.log(error);
            console.log(error.response);
          }
          setIsLoading(false);
        }
      );
    }
  };
  let Logout = (e) => {
    console.log("akjdf");
    Cookies.remove("Authorization");
    localStorage.removeItem("Address");
    window.location.reload();
  };

  return (
    <FixedHeader>
      <Header
        onScrollChange={onScrollChange}
        className={`header ${menuOpenedClass}`}
      >
        <nav className="navbar" style={{ width: "100%" }}>
          <div className="navbar-header">
            <HamburgerLink
              onScrollChange={onScrollChange}
              id="mobile_btn"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpenedClass("menu-opened");
              }}
            >
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </HamburgerLink>

            <Link
              style={{
                marginRight: "50px",
                marginTop: "10px",
              }}
              to="/"
              className="navbar-brand logo"
            >
              <NavLogoLink onScrollChange={onScrollChange}>
                {/* Robotdrop */}
                {/* {onScrollChange ? (
                  <img
                    src={Logo}
                    style={{
                      width: "150px",
                      marginTop: "-10px",
                    }}
                  />
                ) : (
                  <img
                    src={WhiteLogo}
                    style={{
                      width: "150px",
                      marginTop: "-10px",
                    }}
                  />
                )} */}
                <img src={Techi} alt="techilab" style={{ width: "50px" }} />
              </NavLogoLink>
            </Link>
          </div>

          <div className="main-menu-wrapper">
            <div className="menu-header">
              <NavLogoLink
                id="menu_close"
                className="menu-close"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpenedClass("");
                }}
                // style={{ background: "black" }}
              >
                <CloseOption
                  onScrollChange={onScrollChange}
                  className="fas fa-times"
                >
                  {" "}
                  Close
                </CloseOption>{" "}
              </NavLogoLink>
            </div>
            <ul
              className="main-nav "
              style={{
                marginTop: "4px",
                // backgroundColor: onScrollChange ? "white" : "#854dd1",
              }}
            >
              <li className="login-link ">
                <a
                  href="/"
                  style={{ paddingLeft: "5px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpenedClass("");
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  {/* <img
                    src={RightLogo}
                    style={{
                      width: "50px",
                    }}
                  /> */}
                </a>
              </li>
              <li className="login-link ">
                <span>
                  {localStorage.getItem("Address") ? (
                    <a
                      href={
                        "https://ropsten.etherscan.io/address/" +
                        localStorage.getItem("Address")
                      }
                      target="_blank"
                    >
                      <span style={{ cursor: "pointer" }}>
                        {localStorage.getItem("Address").substr(0, 10)}. . .
                      </span>
                    </a>
                  ) : (
                    <>
                      <span
                        onScrollChange={onScrollChange}
                        // style={selectedNavStyle.Community}
                        onClick={() => Login()}
                      >
                        Login
                      </span>
                    </>
                  )}
                </span>
              </li>
              <li>
                <a href="/">
                  <HoverEffectMenu
                    style={{ marginLeft: "70px" }}
                    onScrollChange={onScrollChange}
                    // style={selectedNavStyle.Home}
                  >
                    Home
                  </HoverEffectMenu>
                </a>
              </li>
              <li>
                <Link to="/marketPlace">
                  <HoverEffectMenu onScrollChange={onScrollChange}>
                    Market
                  </HoverEffectMenu>
                </Link>
              </li>
              <li>
                <Link to="/auctionDrops">
                  <HoverEffectMenu onScrollChange={onScrollChange}>
                    Drops
                  </HoverEffectMenu>
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "https://www.robotdrop.nft" }}
                  target="_blank"
                >
                  <HoverEffectMenu onScrollChange={onScrollChange}>
                    About
                  </HoverEffectMenu>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li>
              {isLoading ? (
                <div className="text-center">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              ) : localStorage.getItem("Address") ? (
                <DashboardLink
                  style={{
                    color: onScrollChange ? "#9f55ff" : "white",
                  }}
                  href={
                    "https://ropsten.etherscan.io/address/" +
                    localStorage.getItem("Address")
                  }
                  target="_blank"
                >
                  <span style={{ cursor: "pointer" }}>
                    {localStorage.getItem("Address").substr(0, 10)}. . .
                  </span>
                  {/* </DashboardLink> */}
                </DashboardLink>
              ) : (
                <>
                  <LoginLink
                    onScrollChange={onScrollChange}
                    style={{ cursor: "pointer" }}
                    onClick={() => Login()}
                  >
                    Login
                  </LoginLink>
                </>
              )}
            </li>
            <li>
              {localStorage.getItem("Address") ? (
                <Link
                  to="/dashboard"
                  style={{
                    color: onScrollChange ? "#9f55ff" : "white",
                  }}
                >
                  Dashboard
                </Link>
              ) : (
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              )}
            </li>
            <li>
              {localStorage.getItem("Address") ? (
                <LoginLink
                  onScrollChange={onScrollChange}
                  style={{ cursor: "pointer" }}
                  onClick={() => Logout()}
                >
                  Logout
                </LoginLink>
              ) : null}
            </li>
          </ul>
          <NetworkErrorModal
            show={show}
            handleClose={handleClose}
            network={network}
          ></NetworkErrorModal>
        </nav>
      </Header>
    </FixedHeader>
  );
}

export default HeaderHome;

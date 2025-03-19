import React from "react";
import "./Navbar.css";
import logo from "../assets/Amazon-logo-black-template.png";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="uppernavbar">
        <div className="navbarbody">
          <img style={{ height: "4vw", width: "9vw" }} src={logo} alt="" />
        </div>
        <div className="position">
          <LocationOnOutlinedIcon
            style={{ padding: "1vw 0vw", color: "#d3d3d3" }}
          />
          <div className="namepos">
            <div style={{ color: "#d3d3d3", fontSize: "1vw" }}>
              Deliver to Dron
            </div>
            <div style={{ fontWeight: "bold" }}>Tumsar 441912</div>
          </div>
        </div>
        <div className="searchbar">
          <div className="ALL">
            <div>All</div>
            <ArrowDropDownOutlinedIcon />
          </div>

          <div className="input">
            <input className="input" type="text" />
          </div>
          <div className="searchicon">
            <SearchOutlinedIcon style={{ fontSize: "2.3vw" }} />
          </div>
        </div>

        <div className="account">
          <div className="accountsmallhead">
            <div className="list">Hello dron</div>
            <div style={{ fontWeight: "bold" }}>Accounts &amp; lists</div>
          </div>
          <ArrowDropDownOutlinedIcon style={{ color: "#d3d3d3" }} />
        </div>
        <div className="returnandoders">Returns &amp; Oders</div>
        <div className="cart">
          <ShoppingCartIcon style={{ fontSize: "3vw" }} />
          <div
            style={{
              fontWeight: "bold",
              padding: "1vw 0vw",
              fontSize: "1.2vw",
            }}
          >
            Cart{" "}
          </div>
        </div>
      </div>
      <div className="lowernavbar">
        <div className="hamberger">
          <div className="all">
            <nav role="navigation">
              <div id="menuToggle">
                {/* <!--
                  A fake / hidden checkbox is used as click reciever,
                  so you can use the :checked selector on it.
                  --> */}
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                
                {/* <!--
                  Too bad the menu has to be inside of the button
                  but hey, it's pure CSS magic.
                  --> */}
                <ul id="menu">
                  <div className="user">
                    <div className="aavatar" style={{ marginLeft: "2.5vw" }}>
                      <AccountCircleRoundedIcon
                        style={{ fontSize: "2vw", padding: "1vw 0vw" }}
                      />
                    </div>
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.2vw",
                        padding: "1.3vw 1vw",
                      }}
                      className="name"
                    >
                      Hello , Dron
                    </div>
                  </div>
                  <div className="design"></div>
                  <div className="designm"></div>
                  <div className="contentuse">
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                    <h3>Trending</h3>
                    <br/>
                   <p> Best Sellers</p>
                    <br/>
                   <p> New Releases </p>
                    <br/>
                   <p> Movie and Shakers</p>
                    <div className="linemana"></div>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="needs">
          <div className="accesorie">Amazon Pay</div>
          <div className="accesorie">Best Sellers</div>
          <div className="accesorie">Gift Cards</div>
          <div className="accesorie">Health,Household &amp; Presonal Care</div>
          <div className="accesorie">Home improvement</div>
          <div className="accesorie">Buy Again</div>
          <div className="accesorie">Gift Ideas</div>
          <div className="accesorie">Toys &amp; Games</div>
          <div className="accesorie">Kindle eBooks</div>
          <div className="accesorie">Sports</div>
          <div className="accesorie">Amazon Basics</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

import React from 'react'
import image1 from "../assets/mobile.jpg"
import image2 from "../assets/celebrate.jpg"
import image3 from "../assets/plantsandtree.jpg"
import image4 from "../assets/homeadk.jpg"
import image5 from "../assets/toolseui.jpg"
import image6 from "../assets/nocost.jpg"
import image7 from "../assets/womamn.jpg"
import image8 from "../assets/al4xa.jpg"
import blimg1 from "../assets/bl1.jpg"
import blimg2 from "../assets/bl2.jpg"
import blimg3 from "../assets/bl3.jpg"
import blimg4 from "../assets/bl4.jpg"
import blimg5 from "../assets/bl5.jpg"
import sop1 from "../assets/sp1.jpg"
import sop2 from "../assets/sp2.jpg"
import sop3 from "../assets/sp3.jpg"
import sop4 from "../assets/sp4.jpg"
import sop5 from "../assets/sp5.jpg"
import sop6 from "../assets/sp6.jpg"
import sop7 from "../assets/sp7.jpg"
import "./Product.css"
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
 const Items = [
   {
     id: 1,
     title: "Mobiles and accessories up to 40%off",
     img: image1,
     content: "See All Offers",
   },
   {
     id: 2,
     title: "Celebrate every day with new offers",
     img: image2,
     content: "See All Offers",
   },
   {
     id: 3,
     title: "Refreshing plants and planters from small business",
     img: image3,
     content: "See All Offers",
   },
   {
     id: 4,
     title: "Home and kitchen products",
     img: image4,
     content: "See All Offers",
   },
   {
     id: 5,
     title: "Tools ",
     img: image5,
     content: "See All Offers",
   },
   {
     id: 6,
     title: "Top-rated ethnic wear ",
     img: image7,
     content: "See All Offers",
   },
   {
     id: 7,
     title: "Up to 50% off | Alexa devices and more",
     img: image8,
     content: "See All Offers",
   },
  
 ];
 const bel=[
   {
     id: 8,
     img: blimg1,
   },
   {
     id: 9,
     img: blimg2,
   },
   {
     id: 10,
     img: blimg3,
   },
   {
     id: 10,
     img: blimg4,
   },
   {
     id: 10,
     img: blimg5,
   },
   {
     id: 10,
     img: blimg5,
   },
   {
     id: 10,
     img: blimg5,
   },
 ];
 const yours = [
   {
     img: sop1,
     p: "Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime",
     rate: "9568",
     price: "₹14,999.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop2,
     p: "Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB| Triple Output | Sandstone Black  Mi Power Bank 3i 20000mAh | 18W Fast PD Charging | Input- Type C and Micro USB|…",
     rate: "7661",
     price: "₹3,299.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop3,
     p: "Redmi SonicBass Wireless Earphones with Dual-Mic Noise Cancellation, IPX4 Splash Proof, Dual Pairing & 12 hrs of Playback Tim",
     rate: "3068",
     price: "₹999.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop4,
     p: "Redmi Note 10 Lite Aurora Blue 4GB RAM 128GB ROM | Alexa Built-in Redmi Note 10 Lite Aurora Blue 4GB RAM 128GB ROM | Alexa Built-in",
     rate: "105,637",
     price: "₹14,999.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop5,
     p: "Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime Samsung Galaxy M32 (Black, 6GB RAM, 128GB Storage) 6 Months Free Screen Replacement for Prime",
     rate: "9568",
     price: "₹14,999.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop6,
     p: "F Gear Repel Rain & Dust Cover for Laptop Bags and Backpacks F Gear Repel Rain & Dust Cover for Laptop Bags and Backpacks",
     rate: "1,436",
     price: "₹299.00",
     same: "Get it by Saturday, October",
   },
   {
     img: sop7,
     p: "OnePlus Buds Z (Gray) OnePlus Buds Z (Gray)",
     rate: "50,781",
     price: "₹2,999.00",
     same: "Get it by Saturday, October",
   },
 ];
 const Products = () => {
    return (
      <div>
        <div className="container ">
          {Items.map((even) => (
            <div className="card ">
              <div
                style={{
                  fontSize: "1.5vw",
                  color: "black",
                  margin: "1vw",
                  padding: "0vw 2vw",
                  fontFamily: "Amaranth",
                }}
                className="title"
              >
                {even.title}
              </div>
              <img
                src={even.img}
                style={{ height: "35vh", width: "32vh", borderRadius: "0.7vw" }}
                alt="op"
              />
              <div
                style={{ margin: "1vw", color: "#A8C6FE", cursor: "pointer" }}
                className="sealloffers"
              >
                {even.content}
              </div>
            </div>
          ))}
          <div className="horzon card">
            <img
              style={{ width: "80vw", height: "20vw", borderRadius: "1vw" }}
              src={image6}
              alt=""
            />
          </div>
          <div className="horizoncard2 ">
            <div
              style={{
                fontSize: "1.5vw",
                color: "black",
                margin: "1vw",
                padding: "0vw 2vw",
                fontFamily: "Amaranth",
              }}
              className="title"
            >
              Up to 30% off | New Home accessories
            </div>
            <div className="set">
              {bel.map((bl) => (
                <div style={{ display: "flex" }} className="img">
                  <img
                    style={{ height: "30vh", margin: "0.7vw 0.7vw" }}
                    src={bl.img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="horizoncard3">
            <div style={{height:"5vh"}}></div>
            <hr />
            <div
              style={{
                fontSize: "1.5vw",
                color: "black",
                margin: "1vw",
                padding: "0vw 2vw",
                fontFamily: "Amaranth",
              }}
              className="title"
            >
              Inspired by your browsing history
            </div>
            <div className="set">
              {yours.map((bl) => (
                <div className="set2">
                  <div style={{ display: "flex" }} className="img">
                    <img
                      style={{ height: "25vh", margin: "0.7vw 0.7vw" }}
                      src={bl.img}
                      alt=""
                    />
                  </div>
                  <div className="content" >{bl.p}</div>
                  <div className="star">
                    <StarRateIcon style={{ color: "orange" }} />
                    <StarRateIcon style={{ color: "orange" }} />
                    <StarRateIcon style={{ color: "orange" }} />
                    <StarRateIcon style={{ color: "orange" }} />
                    <StarRateIcon style={{ color: "orange" }} />
                    <StarOutlineIcon style={{ color: "orange" }} />
                    {bl.rate}
                  </div>
                  <div className="price" style={{fontSize:"1.1vw",fontWeight:"bold",margin:"0vw 0.3vw"}}>{bl.price}</div>
                  <div className="saam" style={{margin:"0.2vw"}}>
                    {bl.same}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Products;

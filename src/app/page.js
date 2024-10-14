import Image from "next/image";
import "./home.css"
import RectangleIcon from "./image/Rectangle.png"
import LogoIcon from "./image/logo.png"
import BasketIcon from "./image/basketicon.png"
import LoginIcon from "./image/loginicon.png"
import DeliverCycle from "./image/delivercycle.png"
import Food1 from "./image/foodpic.png"
import Food2 from "./image/foodpic1.png"
import Food3  from "./image/foodpic2.png"
import Food4  from "./image/foodpic3.png"
import Food5  from "./image/foodpic4.png"
import Food6  from "./image/foodpic5.png"
import ReviewSideImg  from "./image/reviewsideimg.png"
import Addtocardicon  from "./image/addtocardicon.png"
import Phoneicon  from "./image/phoneicon.png"
import Emailicon  from "./image/emailicon.png"
import Locationicon  from "./image/locationicon.png"
import Submiticon  from "./image/Submiticon.png"

export default function Home() {
  return (
    <>
    <section className="headerbg">
      
      <header className="headertag">
        <ul className="headerul">
          <li><Image src={RectangleIcon} alt="Rectangle Icon" /></li>
          <li >Home</li>
          <li>Menu</li>
          <li>Order</li>
          <li><Image src={LogoIcon} alt="Logo" /></li>
          <li>Story</li>
          <li>Location</li>
          <li>Contact</li>
          <li className="liIcon"><Image src={LoginIcon} alt="Login Icon" className="mr-3" /><Image src={BasketIcon} alt="Basket Icon" /></li>
        </ul>
      </header>
    
     
      <div className="headerdiv">
      <div className="headerdiv1">
        
        </div>
        <div className="headerdiv1">
        <h1 className="headerh1first" >Welcome To</h1>
        <h1 className="headerh1Second">Sean Anyanwu</h1>
        <p className="headerpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <div className="headerbtn">
          <button className="headerbtn1">Order Now</button><button className="headerbtn2">Go To Our Menu</button>
        </div>
        </div>
      </div>

      <div className="headerdeliverdiv">

        <div className="headerdelivericon">
          <Image width={75} src={DeliverCycle} alt="Login Icon"  />
        </div>
        <div className="headerh1div">
          <h1>Delivry Service</h1>
          <p>Avaliable 24/7</p>
        </div>
        <div className="headerdisdiv">
          <h2>20</h2>
          <h3>%OF</h3>
        </div>
      </div>



      <section className="stn2">

        <div className="st2headingdiv2">
          <Image src={Food2} alt="food2" className="st2headingdiv2img" />
        </div>

      <div className="stn2headingdiv">
        <h2>View Our</h2>
        <h1>Story</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <button className="stnbtn1">Read More</button>
      </div>

      <div className="stn2headingdiv1">
        <Image src={Food1} alt="Food1"/>
      </div>
      
      <div className="stn2headingdiv3">
       <h1>Sean Anyanwu</h1>
      </div>
      

    </section>
      
    </section>

    <section className="stn3">
      <div className="flex justify-center">
      <div className="stn3heading">
      <h2>View Our</h2>
      <h1>Menu</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      <div className="stn3btndiv">
        <button className="stn3btn1">Shawarma</button><button className="stn3btn2">Grilled Meat</button><button className="stn3btn2">Grilled Chicken</button>
      </div>
      </div>
      </div>
      
      <div className="flex justify-center mt-20  stn3shawarmafoodbox">
        <div>
        <div className="flex justify-center items-center stn3foodbox ">
          <Image src={Food6} width={210} alt="Food3" />
          <div>
            <h1 className="stn3foodheading">Your Heading</h1>
            <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className="flex justify-start items-center mt-3">
            <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center stn3foodbox1 ">
          <Image src={Food3} width={210} alt="Food3" />
          <div>
            <h1 className="stn3foodheading">Your Heading</h1>
            <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className="flex justify-start items-center mt-3">
            <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
            </div>
          </div>
        </div>

        </div>




        <div className="stn3foodboxs1">
        <div className="flex justify-center items-center stn3foodbox ">
          <Image src={Food4} width={210} alt="Food3" />
          <div>
            <h1 className="stn3foodheading">Your Heading</h1>
            <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className="flex justify-start items-center mt-3">
            <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center stn3foodbox1 ">
          <Image src={Food5} width={210} alt="Food3" />
          <div>
            <h1 className="stn3foodheading">Your Heading</h1>
            <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className="flex justify-start items-center mt-3">
            <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
            </div>
          </div>
        </div>

        </div>



      </div>
    </section>


    <section className="flex justify-start">
      <div className="reviewsideimg">
        <Image src={ReviewSideImg} alt="ReviewSideImg" />
      </div>
      <div className="reviewside">
       <h2>Client</h2>
       <h1>Reviews</h1>
       <p className="reviewsidepara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
       <h3>JHONY</h3>
       <p className="reviewsidepara2">Lorem ipsum dolor sit amet</p>
       <div className="reviewsidepara3"><span className="reviewsdot1">0</span><span className="reviewsdot2">0</span><span className="reviewsdot2">0</span><span className="reviewsdot2">0</span></div>
      </div>
    </section>


    <section className="footer flex justify-center items-Start  pt-16 pb-10">
      <div className="footerdiv1">
        <div className="flex justify-center">
        <Image src={LogoIcon} width={230} alt="Logo" />
        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetti ng  and0 industry.
        </p>
      </div>

      <div  className="footerdiv2">
        <h2>Quick Links</h2>
        <ul>
        <li>Home</li>
        <li>Our Story</li>
        <li>Get Started</li>
        <li>FAQ</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        </ul>
      </div>

      <div  className="footerdiv3">
        <h2>Contact Info</h2>
        <ul>
        <li className="flex justify-start items-center"> <Image src={Phoneicon} className="mr-2" alt="Phone icon" />Phone: 1 123 456 7890 </li>
        <li className="flex justify-start items-center"> <Image src={Emailicon} className="mr-2" alt="Email icon" />Email: info@demolinks.com</li>
        <li className="flex justify-start items-center"> <Image src={Locationicon} className="mr-3" alt="Location icon" />Head Office:</li>
        <li className="ml-6">FAQ</li>
        <li className="ml-6">Lorem ipsum</li>
        <li className="ml-6">Surprise, AZ 85378</li>
        </ul>
      </div>

      <div className="footerdiv4">
        <h2>Join Our Newsletter</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
        <div className="flex inputdiv ">
        <input type="text" placeholder="Enter Your Email" />
        <button> <Image src={Submiticon} alt="Submit icon" /></button>
        </div>
      </div>
    </section>

<section className="footerend">
  <h3>Copyright © 2020 demolink.com - All Rights Reserved.</h3>
</section>
    


    </>
  );
}

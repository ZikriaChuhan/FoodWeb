'use client'
import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import RectangleIcon from "../image/Rectangle.png"
import LogoIcon from "../image/logo.png"
import BasketIcon from "../image/basketicon.png"
import LoginIcon from "../image/loginicon.png"
import DeliverCycle from "../image/delivercycle.png"
import Food1 from "../image/foodpic.png"
import Food2 from "../image/foodpic1.png"
import Image from "next/image";

export default function HeaderSection() {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])

    return (
        <>
            <section className="headerbg">
                <header className="headertag">
                    <ul className="headerul" data-aos="fade-down">
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

                    <div className="headerdelivericon" data-aos="fade-right">
                        <Image width={75} src={DeliverCycle} alt="Login Icon" />
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

                    <div className="st2headingdiv2" data-aos="fade-right">
                        <Image src={Food2} alt="food2" className="st2headingdiv2img" />
                    </div>

                    <div className="stn2headingdiv" data-aos="fade-left">
                        <h2>View Our</h2>
                        <h1>Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        <button className="stnbtn1">Read More</button>
                    </div>

                    <div className="stn2headingdiv1" data-aos="fade-right">
                        <Image src={Food1} alt="Food1" />
                    </div>

                    <div className="stn2headingdiv3">
                        <h1>Sean Anyanwu</h1>
                    </div>

                </section>

            </section>

        </>
    )}
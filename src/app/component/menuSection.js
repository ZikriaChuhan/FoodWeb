'use client'
import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Food3 from "../image/foodpic2.png"
import Food4 from "../image/foodpic3.png"
import Food5 from "../image/foodpic4.png"
import Food6 from "../image/foodpic5.png"
import Addtocardicon from "../image/addtocardicon.png"


export default function MenuSection() {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])

    return (
        <>
            <section className="stn3">
                <div className="flex justify-center">
                    <div className="stn3heading">
                        <h2>View Our</h2>
                        <h1>Menu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                        <div className="stn3btndiv" data-aos="fade-up">
                            <button className="stn3btn1">Shawarma</button><button className="stn3btn2">Grilled Meat</button><button className="stn3btn2">Grilled Chicken</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20  stn3shawarmafoodbox">
                    <div>
                        <div className="flex justify-center items-center stn3foodbox " data-aos="fade-left">
                            <Image src={Food6} width={210} alt="Food3" />
                            <div>
                                <h1 className="stn3foodheading">Your Heading</h1>
                                <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                <div className="flex justify-start items-center mt-3">
                                    <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center stn3foodbox1 " data-aos="fade-left">
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
                        <div className="flex justify-center items-center stn3foodbox " data-aos="fade-right">
                            <Image src={Food4} width={210} alt="Food3" />
                            <div>
                                <h1 className="stn3foodheading">Your Heading</h1>
                                <p className="stn3foodpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                <div className="flex justify-start items-center mt-3">
                                    <span className="stn3foodprice">$14.00</span><button className="flex justify-center stn3foodbtn "><Image className="mr-2" src={Addtocardicon} alt="Add to card icon" />Add To Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center stn3foodbox1 " data-aos="fade-right">
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
        </>

    )}
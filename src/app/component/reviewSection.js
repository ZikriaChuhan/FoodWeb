'use client'
import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import ReviewSideImg from "../image/reviewsideimg.png"

export default function ReviewSection() {

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])

    return (
        <>
            <section className="flex justify-start">
                <div className="reviewsideimg">
                    <Image src={ReviewSideImg} alt="ReviewSideImg" />
                </div>
                <div className="reviewside">
                    <div data-aos="fade-up">
                        <h2>Client</h2>
                        <h1>Reviews</h1>
                    </div>
                    <div data-aos="fade-down">
                        <p className="reviewsidepara1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <h3>JHONY</h3>
                        <p className="reviewsidepara2">Lorem ipsum dolor sit amet</p>
                        <div className="reviewsidepara3"><span className="reviewsdot1">0</span><span className="reviewsdot2">0</span><span className="reviewsdot2">0</span><span className="reviewsdot2">0</span></div>
                    </div>

                </div>
            </section>
        </>
    )}
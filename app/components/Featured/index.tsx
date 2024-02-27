"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Exellent Hospitality',
        imgSrc: '/images/featured/feat3.jpg',
    },
    {
        heading: 'The best diving experience',
        imgSrc: '/images/featured/feat3.jpg',
    },
    {
        heading: 'Available all Year round',
        imgSrc: '/images/featured/feat3.jpg',
    },
    {
        heading: 'Family Friendly',
        imgSrc: '/images/featured/feat3.jpg',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-20 bg-bgblue marginFeature bg-featured" id="feature-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="pt-48 pb-10 text-center md:pt-96">
                        <h3 className="my-2 text-4xl font-bold text-white sm:text-6xl">What to expect</h3>
                        <h3 className="my-2 text-4xl font-bold text-white text-opacity-50 sm:text-6xl lg:mr-48">Things we offer</h3>
                        <h3 className="my-2 text-4xl font-bold text-white text-opacity-25 sm:text-6xl lg:-mr-32">What we do</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='pb-12 m-3 my-10 bg-transparent rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={636} height={620} className="rounded-2xl" />
                                    <div className="w-345">
                                        <h4 className='mt-10 font-bold text-center text-white sm:text-5xl sm:pt-6 sm:text-start'>{items.heading}</h4>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}

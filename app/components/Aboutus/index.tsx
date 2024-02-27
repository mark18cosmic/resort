import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Watersports",
        imgSrc: "/images/aboutus/swimming-svgrepo-com.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Amazing Beaches",
        imgSrc: "/images/aboutus/beach-umbrella-svgrepo-com.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Service",
        imgSrc: "/images/aboutus/service-svgrepo-com.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='relative px-4 py-24 mx-auto my-32 max-w-7xl rounded-3xl lg:px-10 bg-lightgrey'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-lg tracking-widest text-center text-blue'>ABOUT US</h3>
                <h4 className='text-4xl font-bold text-center lg:text-65xl'>Why choose us?</h4>
                <div className='grid grid-cols-1 gap-x-16 my-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='pt-10 pr-6 pb-10 pl-8 mt-16 bg-white rounded-3xl shadow-xl hover:bg-navyblue group'>
                            <h4 className='mb-5 text-4xl font-semibold text-black group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='mb-5 text-lg font-normal text-black group-hover:text-offwhite'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
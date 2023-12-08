import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import LeftArrow from "../../assets/icons/left-arrow.svg"
import RightArrow from "../../assets/icons/right-arrow.svg"
import FilterChoice from "../filterChoice/filterChoice.tsx";
import {FilterSearch} from "../../interface/filter-search.ts";
import {CSSProperties, FC} from "react";


interface slideProps {
    currentSlide?: number,
    slideCount?: number,
    className?: string,
    style?: CSSProperties,
    styles?: CSSProperties,

}


const SlickArrowLeft : FC<slideProps> = ({currentSlide, slideCount, className, style, ...props}: slideProps) => (
    <img src={LeftArrow} alt="prevArrow" className={`${className}  rounded-full bg-white hover:bg-white `}
         style={{...style, width: "45px", height: "45px", left: "-50px"}} {...props} />
)

const SlickArrowRight = ({currentSlide, slideCount, className, style, ...props}: slideProps) => (
    <img src={RightArrow} alt="nextArrow" className={`${className}  rounded-full bg-white hover:bg-white `}
         style={{...style, width: "45px", height: "45px", right: "-50px"}} {...props} />
)


interface props {
    groupInformations: FilterSearch
}


const Carrousel = ({groupInformations}: props) => {


    const settings = {
        className: "flex items-center center",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <h1 className="text-center mb-8 text-lg sm:text-4xl">{groupInformations.question}</h1>

            <Slider  {...settings}>
                {
                    groupInformations.data.map((val, i) =>
                        <FilterChoice key={i} infos={val} unwanted={groupInformations.unwanted} group={groupInformations.name} styleGroup={groupInformations.style}/>
                    )
                }
            </Slider>

        </>
    )
}

export default Carrousel
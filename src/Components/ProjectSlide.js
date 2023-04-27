//Library Imports
import {React, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {GoPrimitiveDot} from 'react-icons/go'; 

const ProjectSlide = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    //Component Styling
    const sliderStyles = {
        display: "flex",
        alignItems: "center",
        height: "100%",
        position: "relative",
    }
    
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        border: "solid",
        borderColor: "rgb(207, 207, 207)",
        borderWidth: "3px",
    };

    const leftArrowStyles = {
        poosition: "absolute",
        top: "50%",
        transform: "translate(0,-20%)",
        left: "32px",
        fontSize: "80px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        poosition: "absolute",
        top: "50%",
        transform: "translate(0,-20%)",
        right: "32px",
        fontSize: "80px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
    }

    const dotStyles = {
        margin: "0 3px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "20px",
    }

    //Component Functions
    const goToPrev = () => {
        if(currentIndex !== 0)
            setCurrentIndex(currentIndex - 1);
        else
            setCurrentIndex(slides.length-1);
    };

    const goToNext = () => {
        if(currentIndex === slides.length-1)
            setCurrentIndex(0);
        else
            setCurrentIndex(currentIndex + 1);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return(
        <>
            <div style={sliderStyles}>
                <IoIosArrowBack style={leftArrowStyles} onClick={goToPrev}/>
                <div style={slideStyles}></div>
                <IoIosArrowForward style={rightArrowStyles} onClick={goToNext}/>
            </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key = {slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}> <GoPrimitiveDot/> </div>
                ))}
            </div>
        </>
    );
};

export default ProjectSlide;
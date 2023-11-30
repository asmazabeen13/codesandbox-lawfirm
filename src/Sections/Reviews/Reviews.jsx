import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import devon from '../../assets/devon.svg';
import gift from "../../assets/gift.svg"
import './Reviews.css';
import jane from "../../assets/jane.svg"
import robert from "../../assets/robert.svg"

const Reviews = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3,
        },
        'small-mobile': {
            breakpoint: { max: 400, min: 0 },
            items: 2,
        },
    };
    return (
        <div className='reviews'>
            <p className='happyclients'>What says our <br /> happy Clients</p>
            <Carousel responsive={responsive} infinite={true} showDots={false} showStatus={false}>
                <div className='cardscontainer'>
                    <div className='cards'>
                        <img src={jane} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className='cards secondcard'>
                        <img src={devon} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className='cards'>
                        <img src={robert} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                </div>
                <div className='cardscontainer'>
                    <div className='cards'>
                        <img src={gift} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className='cards secondcard'>
                        <img src={gift} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                    <div className='cards'>
                        <img src={gift} alt="kunalborkar2001@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Ceo of Hunt</p>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Reviews;
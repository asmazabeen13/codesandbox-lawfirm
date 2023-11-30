import React from 'react'
import './About.css'
import gift from '../../assets/gift.svg'

const About = () => {
    return (
        <div className='about'>
            <div className='up'>
                <div className='intro'>
                    <h1>Let’s Introduce <br /> Ourself </h1>
                    <hr />
                </div>
                <div className='specs'>
                    <h3>Criminal Lawyer</h3>
                    <p>Amet minim mollit non deserunt ullamco est <br />
                        sit aliqua dolor do amet sint. Velit officia consequatduis <br />
                        enim velit mollit Exercitation.</p>
                </div>
            </div>


            <div className='down'>
                <h1>Why Choose us?</h1>
                <div className='cardscontainer'>
                    <div className='cards'>
                        <img src={gift} alt="asmazabeen13@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button>Read More</button>
                    </div>
                    <div className='cards secondcard'>
                        <img src={gift} alt="asmazabeen13@gmail.com" />
                        <h5>100% Success Rate</h5>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button>Read More</button>
                    </div>
                    <div className='cards'>
                        <img src={gift} alt="" />
                        <h5>100% Success Rate</h5>
                        <p>Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia
                            consequatduis enim velit mollit Exer.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
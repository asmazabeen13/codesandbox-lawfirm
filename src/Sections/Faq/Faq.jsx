import './Faq.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Faq = () => {
    return (
        <div className='faq'>
            <div className='left'>
                <h1>FAQ</h1>
                <p>Amet minim mollit non deserunt ullamco est sit <br />
                    aliqua dolor do amet sint. </p>
            </div>
            <div className='right'>
                <h3>Do I need a personal injury report?</h3>
                <p>Amet minim mollit non deserunt ullamco est sit <br />
                    aliqua dolor do amet sint. Velit officia consequatduis <br />
                    enim velit mollit Exer. Amet minim mollit non deserunt <br />
                    ullamco est sit aliqua dolor do amet sint. Velit officia  <br />
                    consequatduis enim velit mollit Exer.</p>
                <div className='accordion'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<i class="fa-solid fa-plus"></i>}
                            aria-controls="panel1a-content"
                            id="panela-header"
                        >
                            <Typography>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<i class="fa-solid fa-plus"></i>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>What should I do right after car accidect</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<i class="fa-solid fa-plus"></i>}
                            aria-controls="panel2a-content"
                            id="panel3a-header"
                        >
                            <Typography>How much is my case worth?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>

            </div>
        </div>
    )
}

export default Faq
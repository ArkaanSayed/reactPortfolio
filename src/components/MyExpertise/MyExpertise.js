import '../../styles/MyExpertise.css';
import appIcon from '../../assets/images/app_icon.svg';
import webIcon from '../../assets/images/web_icon.svg';
import mentorIcon from '../../assets/images/mentor_icon.svg'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function MyExpertise() {
    const control = useAnimation()
    const [ref, inView] = useInView()
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1.0 } },
        hidden: { opacity: 1, scale: 0.5 },
    }
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);
    return (
        <motion.div ref={ref} variants={boxVariant} initial="hidden"
            animate={control} >
            <div className="MyExpertise">
                <div className='MyExpertise-box'>
                    <h1>My Expertise</h1>
                    <div className="container">
                        <div data-text="App Development" style={{ '--r': '-15', 'fontSize': '10px' }} className="glass">
                            <img src={appIcon} alt='' />
                        </div>
                        <div data-text="Web Development" style={{ '--r': '5', 'fontSize': '10px' }} className="glass">
                            <img src={webIcon} alt='' />
                        </div>
                        <div data-text="Software Mentor" style={{ '--r': '25', 'fontSize': '10px' }} className="glass">
                            <img src={mentorIcon} alt='' />
                        </div>
                    </div>
                </div>
                <div className='MyExpertise-box2'>
                    <h1>Frameworks/Coding Languages I know</h1>
                    <div className="container2">
                        <div style={{ '--r': '-15' }} className="glass2">
                            <img src={appIcon} alt='' />
                            <p className='para-header'>FRONT END</p>
                            <p className='para'>Flutter, React</p>
                        </div>
                        <div style={{ '--r': '5' }} className="glass2">
                            <img src={webIcon} alt='' />
                            <p className='para-header'>BACK END</p>
                            <p className='para'>Node.js, Django, SQL, NOSQL</p>
                        </div>
                        <div style={{ '--r': '25' }} className="glass2">
                            <img src={mentorIcon} alt='' />
                            <p className='para-header'>SOFTWARE</p>
                            <p className='para'>Dart, Python, JS, C++, Java</p>
                        </div>
                    </div>
                    <div class="bubble6"></div>
                    <div class="bubble7"></div>
                    <div class="bubble8"></div>
                </div>
            </div>
        </motion.div>

    );
}











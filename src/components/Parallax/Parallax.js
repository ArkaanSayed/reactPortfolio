import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import starsImg from '../../assets/parallax/stars.svg';
import Wave from 'react-wavify'


export default function Parallax() {
    const [background, setBackground] = useState(20);
    const parallaxRef = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const header = useRef(null);
    const intro = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "3800 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });


            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                sun.current,
                {
                    y: "+=500",
                    x: "-=480",
                },
                0
            );
            tl.to(
                header.current,
                {

                    x: "-=24"
                },
                0
            );
            tl.to(
                intro.current,
                {
                    // y: "+=350",
                    x: "-=924"
                },
                0
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className='parallax-outer'>
            <div ref={parallaxRef} className='parallax' style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67)` }}>

                <div className="circle sun" ref={sun}>
                    <div className="crescent"></div>
                </div>
                <img alt='' ref={stars} className='stars' src={starsImg} />
                <Wave
                    fill='#282a57'
                    paused={false}
                    className="wave"
                    options={
                        {
                            height: 4,
                            amplitude: 30,
                            speed: 0.16,
                            points: 4,
                        }
                    }
                />
                <div ref={header} className="header">
                    <h1>Arkaan Sayed</h1>
                    <p className="intro-role">Software Developer / Software Mentor</p>
                </div>
                <div ref={intro} className="intro">
                    <p> <span className="underLineText">I Trade,</span> Lift Weights and <span className="underLineText">CODE</span></p>
                </div>
            </div>
        </div>
    );
}



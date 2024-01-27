import '../../styles/AboutMe.css';
// import aboutMePic from '../../assets/images/about_me_img.png';
// import aboutMePic from '../../assets/images/image0.jpeg';
import aboutMePic from '../../assets/images/image1.png';

export default function AboutMe() {
    return (
        <div className="About-me">
            <div className="About-me-box">
                <h1>About Me</h1>
                <p >I am software developer, fitness enthusiast, and trader. I embarked on my coding journey during the second year of my engineering studies. My passion lies in continuous learning, both in the realms of technology and business. I thrive on challenges, always approaching them with a proactive mindset. As a software mentor, I am dedicated to imparting knowledge through practical experience, guiding aspiring developers with a curated roadmap. Over the years, I have served as a valuable resource person for various workshops, specializing in web development and app development.
                </p>
            </div>
            <div className='About-me-pic'>
                <img src={aboutMePic} alt='' />
                <div class="bubble"></div>
                <div class="bubble2"></div>
                <div class="bubble3"></div>
                <div class="bubble4"></div>
                <div class="bubble5"></div>
            </div>
        </div>
    );
}








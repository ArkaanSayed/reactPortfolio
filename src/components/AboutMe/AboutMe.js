import '../../styles/AboutMe.css';
// import aboutMePic from '../../assets/images/about_me_img.png';
// import aboutMePic from '../../assets/images/image0.jpeg';
import aboutMePic from '../../assets/images/image1.png';

export default function AboutMe() {
    return (
        <div className="About-me">
            <div className="About-me-box">
                <h1>About Me</h1>
                <p >I am a Software Engineer, a fitness enthusiast and a forex trader. I started software development when I was in my 2nd year of engineering, and have been growing, leaning and developing Web Apps and Mobile Apps since.
                    I am also actively involed in mentoring and teaching my juniors and friends in the field of development,mainly App Development and Web development. I feel its important that they get exposed to the development environment, and upgrading their skills while they are still in college.
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








import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='paly-icon'onClick={()=>{setPlayState(true)}} />
        {/* onClick={()=>{setPlayState(true)}} */}

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERCITY</h3>
            <h2>Nurturing Tommorow's leaders Today</h2>
            <p>Edusity University stands as a beacon of modern education, dedicated to fostering academic
               excellence and innovation. It is a forward-thinking institution that prioritizes the 
               holistic development of students, ensuring they are equipped with the knowledge, skills,
                and mindset to thrive in an interconnected and rapidly evolving world.</p>
            <p>The university is renowned for its comprehensive academic offerings, 
              ranging from undergraduate to postgraduate programs across various disciplines such
               as Engineering, Business, Computer Science, Media Studies, Arts, and more. Additionally, 
               Edusity provides specialized professional courses and certifications in cutting-edge fields 
               like Artificial Intelligence, Data Science, Digital Marketing, and Cybersecurity, designed to
                meet the demands of a competitive job market.</p>
            

        </div>
        
    </div>
  )
}

export default About


// import React from 'react';
// import './About.css';
// import about_img from '../../assets/about.png';
// import play_icon from '../../assets/play-icon.png';

// const About = ({ setPlayState }) => {
//   return (
//     <div className="about">
//       {/* Left Section */}
//       <div className="about-left">
//         <img src={about_img} alt="About University" className="about-img" />
//         <img 
//           src={play_icon} 
//           alt="Play Video" 
//           className="play-icon" 
//           onClick={() => setPlayState(true)} 
//           role="button" 
//           aria-label="Play Video"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="about-right">
//         <h3>ABOUT UNIVERSITY</h3>
//         <h2>Nurturing Tomorrow's Leaders Today</h2>
//         <p>
//           Edusity University stands as a beacon of modern education, dedicated to fostering academic
//           excellence and innovation. It is a forward-thinking institution that prioritizes the holistic
//           development of students, ensuring they are equipped with the knowledge, skills, and mindset
//           to thrive in an interconnected and rapidly evolving world.
//         </p>
//         <p>
//           The university is renowned for its comprehensive academic offerings, ranging from undergraduate 
//           to postgraduate programs across various disciplines such as Engineering, Business, Computer Science, 
//           Media Studies, Arts, and more. Additionally, Edusity provides specialized professional courses and 
//           certifications in cutting-edge fields like Artificial Intelligence, Data Science, Digital Marketing, 
//           and Cybersecurity, designed to meet the demands of a competitive job market.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

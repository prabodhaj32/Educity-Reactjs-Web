import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward= ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
}


  return (
    
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William jackson 1</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                        Life at Edusity University offers an enriching and transformative journey, where students
                         are empowered to grow academically, personally, and professionally. The university prides
                        itself on fostering a vibrant, inclusive, and dynamic environment that goes beyond traditional 
                        classroom learning, ensuring students leave with a wealth of experiences and skills to navigate
                         the real world confidently. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William jackson 2</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                        Life at Edusity University offers an enriching and transformative journey, where students
                         are empowered to grow academically, personally, and professionally. The university prides
                        itself on fostering a vibrant, inclusive, and dynamic environment that goes beyond traditional 
                        classroom learning, ensuring students leave with a wealth of experiences and skills to navigate
                         the real world confidently. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William jackson 3</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                        Life at Edusity University offers an enriching and transformative journey, where students
                         are empowered to grow academically, personally, and professionally. The university prides
                        itself on fostering a vibrant, inclusive, and dynamic environment that goes beyond traditional 
                        classroom learning, ensuring students leave with a wealth of experiences and skills to navigate
                         the real world confidently. 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William jackson 4</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>
                        Life at Edusity University offers an enriching and transformative journey, where students
                         are empowered to grow academically, personally, and professionally. The university prides
                        itself on fostering a vibrant, inclusive, and dynamic environment that goes beyond traditional 
                        classroom learning, ensuring students leave with a wealth of experiences and skills to navigate
                         the real world confidently. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
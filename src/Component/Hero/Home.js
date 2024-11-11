import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import facebook from "../pic/Facebook-logo.png"
import ig from "../pic/ig.png"
import github from "../pic/github.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WEBSITE</h3>
            <h1>
              Hi, I’m <span>Yaraporn Imarom</span>
            </h1>
            <h2>
              <span>
                <Typewriter words={["Highschool student", "Science-Math"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>It's a bad day not a bad life.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>CONTACT</h4>
                <div className='button'>
                  <a href='https://www.facebook.com/profile.php?id=100008374620880' target='_blank' rel='noopener noreferrer'>
                    <button className='btn_shadow'>
                      <img src={facebook} alt='Facebook' style={{ width: '20px', height: '20px' }} />
                        <i class='fab fa-facebook-f'></i> 
                    </button>
                  </a>
                  <a href='https://www.instagram.com/naming______' target='_blank' rel='noopener noreferrer'>
                    <button className='btn_shadow'>
                      <img src={ig} alt='ig' style={{ width: '20px', height: '20px' }} />
                        <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a href='https://github.com/vitxmin' target='_blank' rel='noopener noreferrer'>
                    <button className='btn_shadow'>
                      <img src={github} alt='github' style={{ width: '20px', height: '20px' }} />
                    <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>SKILLS</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
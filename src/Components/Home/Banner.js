import React from 'react';
import mypic from '../../img/mypic.png'
import './Banner.css'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img src={mypic} class="max-w-sm rounded-lg shadow-2xl" />
    <div >
        <h3 className='text-xl mb-3'>Hello, My Name is</h3>
      <h1 class="text-5xl font-bold">Tahsim Reduwan</h1>
      <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer
                            </div><div className="i-title-item">
                               UI/UX Designer
                            </div><div className="i-title-item">
                                Photographer
                            </div><div className="i-title-item">
                               Writer
                            </div>
                            <div className="i-title-item">
                               Content-creator
                            </div>
                        </div>
                        
                    </div>
      <p class="py-4 ">Hi, I' m a dedicated and passionate MERN Stack Developer . <br /> I'm a quick learner and eager to learn new technologies to expand my knowledge. <br /> I want to work with a renowned team or company to build up my career as a Web Developer. I want to see myself as a Senior Web Developer in next 5 years</p>
      <button class="btn btn-primary"><a href="https://drive.google.com/file/d/1OBVTKKzmpZpYKqdyaZIew7shuh-EoJNf/view?usp=sharing">Download Resume</a></button>
    </div>
  </div>
</div>
    );
};

export default Banner;
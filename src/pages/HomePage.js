import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import htmlLogo from '../html5.png'
import cssLogo from '../csslogo.png'
import gitLogo from '../gitlogo.png'
import jsLogo from '../javascriptlogo.png'
import reactLogo from '../reactlogo.png'
import jqLogo from '../jqlogo.jpg'
import nodeLogo from '../nodejslogo3.png'
import postgreLogo1 from '../postgreslogo3.webp'


export default function HomePage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}></Hero>
            <Carousel></Carousel>
            <h4 className='my-skills-header'>My Skills</h4>
            <div className='all-logos'>

                <img className='logo-img' src={htmlLogo} alt='html-logo' />
                <p className='logo-text'>HTML</p>

                <img className='logo-img' src={cssLogo} alt='html-logo' />
                <p className='logo-text'>CSS</p>

                <img className='logo-img' src={jsLogo} alt='html-logo' />
                <p className='logo-text'>JavaScript</p>

                <img className='logo-img' src={gitLogo} alt='html-logo' />
                <p className='logo-text'>Git</p>

                <img className='logo-img' src={reactLogo} alt='html-logo' />
                <p className='logo-text'>React</p>

                <img className='logo-img' src={jqLogo} alt='html-logo' />
                <p className='logo-text'>JQuery</p>

                <img className='logo-img' src={nodeLogo} alt='html-logo' />
                <p className='logo-text'>Node</p>

                <img className='logo-img' src={postgreLogo1} alt='html-logo' />
                <p className='logo-text'>PostgreSQL</p>


            </div>
        </div>
    )
}

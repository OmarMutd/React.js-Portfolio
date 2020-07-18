import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

import ReactTooltip from "react-tooltip";


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

                <img data-tip='HTML' className='logo-img' src={htmlLogo} alt='html-logo' />
                <ReactTooltip />
                <p className='logo-text'>HTML</p>

                <img data-tip='CSS' className='logo-img' src={cssLogo} alt='css-logo' />
                <ReactTooltip />
                <p className='logo-text'>CSS</p>

                <img data-tip='JavaScript' className='logo-img' src={jsLogo} alt='js-logo' />
                <ReactTooltip />
                <p className='logo-text'>JavaScript</p>

                <img data-tip='Git' className='logo-img' src={gitLogo} alt='git-logo' />
                <ReactTooltip />
                <p className='logo-text'>Git</p>

                <img data-tip='React' className='logo-img' src={reactLogo} alt='react-logo' />
                <ReactTooltip />
                <p className='logo-text'>React</p>

                <img data-tip='JQuery' className='logo-img' src={jqLogo} alt='jq-logo' />
                <ReactTooltip />
                <p className='logo-text'>JQuery</p>

                <img data-tip='Node' className='logo-img' src={nodeLogo} alt='node-logo' />
                <ReactTooltip />
                <p className='logo-text'>Node</p>

                <img data-tip='PostgreSQL' className='logo-img' src={postgreLogo1} alt='psql-logo' />
                <ReactTooltip />
                <p className='logo-text'>PostgreSQL</p>


            </div>
        </div>
    )
}

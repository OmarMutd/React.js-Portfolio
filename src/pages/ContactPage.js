import React from 'react';
import Timer from './Timer';
import Content from '../components/Content';
import Hero from '../components/Hero';




export default function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title}></Hero>

            <Content>
                <p><Timer /> Which probably means I am either fixing an annoying bug or working on a cool new project. If you want to get in touch with me use the links below and feel free to shoot me an email.</p>
            </Content>

            <div className='contact-icons'>

                <i class="fab fa-github fa-5x"></i>
                <p>{"  "} Github</p>

                <i class="fab fa-linkedin fa-5x"></i>
                <p>Linkedin</p>

                <i class="fas fa-file fa-5x"></i>
                <p>Download My Resume</p>
            </div>




        </div>
    )

}
import React from 'react';
import Timer from './Timer';
import Content from '../components/Content';
import Hero from '../components/Hero';
import resume from '../resume.pdf';




export default function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title}></Hero>

            <Content>
                <p><Timer /> Which probably means I am either fixing an annoying bug or working on a cool new project. If you want to get in touch with me use the links below and feel free to shoot me an email at omarmuhomar@hotmail.com.</p>
            </Content>

            <div className='contact-icons'>

                <a href='https://github.com/OmarMutd?tab=repositories' target='_blank' rel="noopener noreferrer"><i class="fab fa-github fa-5x"></i></a>
                <p>{"  "} Github</p>

                <a href='https://www.linkedin.com/in/omar-muhanna-profile/' target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin fa-5x"></i></a>
                <p>Linkedin</p>

                <a href={resume} target='_blank' rel="noopener noreferrer" download><i class="fas fa-file fa-5x"></i></a>
                <p>Download My Resume</p>
            </div>




        </div >
    )

}
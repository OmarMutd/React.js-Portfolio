import React from 'react';
import resume from '../resume.pdf';
import ReactTooltip from "react-tooltip";


export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-icons'>
                <a href='https://github.com/OmarMutd?tab=repositories' target='_blank' rel="noopener noreferrer"><i data-tip='github' class="fab fa-github two"></i></a>
                <ReactTooltip />
                <a href='https://www.linkedin.com/in/omar-muhanna-profile/' target='_blank' rel="noopener noreferrer"><i data-tip='linkedin' class="fab fa-linkedin two"></i></a>
                <ReactTooltip />
                <a href={resume} target='_blank' rel="noopener noreferrer" download><i data-tip='Download My Resume' class="fas fa-file two"></i></a>
                <ReactTooltip />
            </div>
            <p className='footer-text'>©2019-2020 Omar Muhanna</p>

        </footer>
    )
}

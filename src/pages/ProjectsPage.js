import React from 'react';



import Cart from "../cart.jpeg";
import Sopranos from "../sopranos2.jpeg";
import MapImage from "../MapImage3.jpeg";








class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='profile-sidebar'>
                        <img className='avi-omar project' src={Cart} alt='That is Omar'></img>
                        <ul className='social-list'>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href='https://github.com/OmarMutd/TBM-Client' target="_blank"
                                rel="noopener noreferrer"><i className='fab fa-dribbble-square'></i></a></li>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href='https://tbm-client.now.sh/' target="_blank"
                                rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>
                        </ul>
                    </div>

                    <div className='profile-main'>
                        <h2 className='profile-name'>The Black Market</h2>
                        <p className='profile-position'>React Full Stack App </p>
                        <p className='profile-body'>
                            This project was built with React, Express, and PSQL. It was made by a team of four in three weeks. It is an ecommcerce website that uses dummy data. It was made to show that as engineers we have an udnerstanding of how E-commerce apps work to employers. We built this app because a lot of companies like to sell things online, so showing that understanding of online business is paramount.
                </p>


                    </div>
                </div>

                <div className='card'>
                    <div className='profile-sidebar'>
                        <img className='avi-omar project' src={MapImage} alt='That is Omar'></img>
                        <ul className='social-list'>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href='https://ljspiek.github.io/refuge_app/' target="_blank"
                                rel="noopener noreferrer"  ><i className='fab fa-dribbble-square'></i></a></li>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href="https://github.com/ljspiek/refuge_app" target="_blank"
                                rel="noopener noreferrer" ><i className='fab fa-github'></i></a></li>
                        </ul>
                    </div>

                    <div className='profile-main'>
                        <h2 className='profile-name'>Refuge Maps</h2>
                        <p className='profile-position'>Javascript App</p>
                        <p className='profile-body'>
                            This project was built with Jquery, HTML and CSS. This app uses google maps api to show locations of nearby refuges for those who are in need. The intended audience is those who belong to the LGBT+ community who are in need of a safe spaces. We built this app because we wanted to build something both useful and interesting as well as unique.
                </p>


                    </div>
                </div>

                <div className='card'>
                    <div className='profile-sidebar'>
                        <img className='avi-omar project' src={Sopranos} alt='That is Omar'></img>
                        <ul className='social-list'>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href='https://sopranos-pizzas.vercel.app/' target="_blank"
                                rel="noopener noreferrer"><i className='fab fa-dribbble-square'></i></a></li>
                            <li className='social-item'><a aria-label='Sq' className='social-link' href='https://github.com/OmarMutd/sp' target="_blank"
                                rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>
                        </ul>
                    </div>

                    <div className='profile-main'>
                        <h2 className='profile-name'>Sopranos Pizza</h2>
                        <p className='profile-position'>React Full Stack App</p>
                        <p className='profile-body'>
                            This project was built with React, Express, and PSQL. It was made for my family owned buisness. It is a website which shows off a extensive Italian Menu. The reason for building this app was to offer a better looking menu than the one we previously had so that customers could have a better user experience.
                </p>


                    </div>
                </div>
            </div>
        );
    }

}

export default ContactPage;
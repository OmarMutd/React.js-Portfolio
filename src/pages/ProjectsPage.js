import React from 'react';
import Refuge from '../refuge.jpeg';
// import Timer from './Timer';
// import Content from '../components/Content';
// import Hero from '../components/Hero';




class ContactPage extends React.Component {
    render() {
        return (
            <div class='card'>
                <div class='card-image'><img src={Refuge} alt='refuge-project'></img></div>
                <div class='card-text'>
                    <span class='date'> 4 days ago</span>
                    <h2>Post On</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class='card-stats'></div>
            </div>
        );
    }

}

export default ContactPage;
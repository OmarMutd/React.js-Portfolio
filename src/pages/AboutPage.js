import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


export default function AboutPage(props) {
    return (
        <div>
            {/* 🇺🇸 */}
            <Hero title={props.title}></Hero>

            <Content>
                <p>A Full stack React software engineer living in Texas,USA .

                Coding is a lot of fun espically when it comes to showing your creative side using tools like Reactjs or Javascript!

I also desire to work on a team as pair programming is very fun. I also really enjoy pets and hiking as hobbies.</p>
            </Content>
        </div>
    )
}

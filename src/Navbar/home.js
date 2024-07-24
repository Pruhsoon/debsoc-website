import { Link } from 'react-router-dom';
import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
            <div className='home-hero' >
              <div >DebSoc NSUT</div>
            </div>

        <div className='ourdept'>Our Departments</div>
      <div className="content">

        {/* PD */}
        <div className='pd'>
          <h2 className='left-head'>Parliamentary Debating</h2>
          <img src="/images/Dept/pd_card.png" alt="Department " className="department-image" id='right-img' />
          <h2 className='quote'>“An abode for the spirited and the bold who wish to question everything.”</h2>
  
          <p>
The Parliamentary Debating Team at NSUT is the epitome of tenacity and dedication. Having been around for more than five years, it has moulded ardent thinkers and dynamic speakers. Weekly debates, training sessions and active participation in tournaments are some key essentials of it.
          </p>
          <Link to="/pd">learn more</Link>
        </div>

        {/* Mun */}
        <div className='mun'>
          <h2 className='right-head'>Model United Nations</h2>
          <img src="/images/Dept/mun.png" alt="Department " className="department-image" id='left-img'  />
          <h2 className='quote'>“Ponder, propose, parley, persuade and procure with prudence”</h2>
          <p>
Being adjudged as the best delegation in over half the conferences it attends, the MUN dept. provides one with a chance to not only experience moments of victory but to organize conferences, learning to work with your peers, juniors and seniors alike, voicing your opinions, moulding and adapting ideas, analyzing, strategizing and optimizing the solutions to problems.
          </p>
          <Link to="/mun">learn more</Link>
        </div>

        {/* GD*/}
        <div className='gd'>
          <img src="/images/Dept/gd_card.png" alt="Department " className="department-image" id='right-img'/>
          <h2 className='left-head'>General Debating</h2>
          <h2 className='quote'>"Encouraging and inspiring minds to speak what they stand for, what they believe in, one NSUTian at a time."</h2>
          <p>
The General Department has always stood by the students, especially the freshers’, helping them get a grip over their language skills and fluency, and improving their spontaneity and creativity. Our doors are always open to anybody who is willing to learn and grow. With events like Thursdays At DebSoc, we train willing debaters and give them a chance to try out new formats of debating each week to hone their skills.
          </p>
        </div>

        {/* Literary */}
        <div className='lit'>
          <h2 className='right-head'>Literary Department</h2>
          <img src="/images/Dept/lit_card.png" alt="Department" className="department-image" id='left-img' />
          <h2 className='quote'>“Literature is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary.”</h2>
          <p>
          Founded in 2015, As a member of the Literary Department, you are not just a participant in debates; you are a storyteller, a rhetorician, and a curator of the written and spoken word.  We conduct activities and events throughout the year while also maintaining a stream of great literary content through our online channels. We are a vital part of DebSoc with some of the best events of the colloquium organized by us.
          </p>
        </div>

        {/* TND */}
        <div className='tnd'>
          <h2 className='left-head'>Tech & Design</h2>
          <img src="/images/Dept/tnd_card.jpg" alt="Department" className="department-image" id='right-img'/>
          <p>
          We work on designing the user interface and experience of the society's online platforms, aiming to make them intuitive and accessible by keeping the technological infrastructure robust and user-friendly. From tabby teams to social media handling, we ensure the smooth handling of various aspects of The Debating Society's operations.
          </p>
        </div>
      </div>
    </div>
  );
}

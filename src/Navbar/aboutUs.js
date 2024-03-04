import React from 'react'
import teamData from './team.json';
import './home.css'; 


const AboutUs = () => {
  return (
    <div className='aboutUs'>
            <div className='aboutus-hero' >
              <div >About Us</div>
            </div>
      <br></br>
      <div className='heading'>Who are we ?</div>
      <div className="aboutUs-content">
      <img src='/images/favicon.png' className='logo' alt='debsoc logo'></img>
      <p>DebSoc NSUT is one of the most renowned debating and literary societies in the Delhi Circuit. It was founded in 2008 at one of the most prestigious tier one technical institutions in India. Throughout its lifespan, it has amassed numerous accolades on both national and international levels, ranging from Delhi to Boston to Singapore. </p>
      <p>With an aim to promote intellectual collaboration and clashes between like-minded individuals, DebSoc provides individuals a platform to not only share their ideas, but also to challenge the ideas of others to help each other grow and create something bigger than themselves. Being one of the largest debating societies in the DU circuit, we also host one of the largest debating and literary events in the circuit, our flagship event, Colloquium.</p>
      </div>
    <hr></hr>
      <div className='heading'>Meet the team</div>
      <div className="team-container">
        {teamData.teamMembers.map((member, index) => (
          <div key={index} className="team-member">
             <img src={require(`./team/${member.image}`)}  alt={member.name} />
            <h2>{member.name}</h2>
            <div>{member.position}</div>
          </div>
        ))}
      </div>
     

    </div>
  )
}

export default AboutUs
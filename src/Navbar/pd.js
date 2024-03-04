import React from 'react'
import teamData from './pd.json';
const PD = () => {
  return (
    <div>
    <div className='pd-page'>
            <div className='pd-hero' >
              <div >Parliamentary Debating</div>
            </div>
              <hr></hr>
      <h2>Who are we ?</h2>
      <p>The Parliamentary Debating Team at NSUT is the epitome of tenacity and dedication. Having been around for more than five years, it has moulded ardent thinkers and dynamic speakers. Weekly debates, training sessions and active participation in tournaments are some key essentials of it.</p>
      <h2>Our Achievements</h2>
      <h3>Team Breaks</h3>
      <p>Including DTU PD, CVSPD</p>
      <h3>Adjudicator Breaks</h3>
      <p>CVSPD, Shivaji PD</p>
      </div>
      <hr></hr>
      <div className='heading'>Parliamentary Debating team</div>
      <div className="team-container">
        {teamData.teamMembers.map((member, index) => (
          <div key={index} className="team-member">
             <img src={require(`./team/pd/${member.image}`)}  alt={member.name} />
            <h2>{member.name}</h2>
            <div>{member.position}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PD
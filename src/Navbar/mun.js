import React from 'react'
import teamData from './mun.json';
const MUN = () => {
  return (
    <div>
    <div className='mun-page'>
            <div className='mun-hero' >
              <div >Model United Nations</div>
            </div>
      <br></br>
      <h2>Who are we ?</h2>
      <p>With multiple executive board level members of the circuit being a part of DebSoc NSUT, the MUN dept is one of the strongest competitive teams of any kind at NSUT. Being adjudged as the best delegation in over half the conferences it attends, the MUN dept. provides one with a chance to not only experience moments of victory but to organize conferences, learning to work with your peers, juniors and seniors alike, voicing your opinions, moulding and adapting ideas, analyzing, strategizing and optimizing the solutions to problems.</p>
      <h2>Our Achievements</h2>
      <h3>Awards</h3>
      <p>Including DTU PD, CVSPD</p>
      <h3>Best delegation</h3>
      <p>CVSPD, Shivaji PD</p>
      </div>
      <hr></hr>
      <div className='heading'>MUN team</div>
      <div className="team-container">
        {teamData.teamMembers.map((member, index) => (
          <div key={index} className="team-member">
             <img src={require(`./team/mun/${member.image}`)}  alt={member.name} />
            <h2>{member.name}</h2>
            <div>{member.position}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MUN



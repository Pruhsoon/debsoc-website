import Carousel from './carousel.js';
import React from 'react'

const COLLOQ = () => {
  return (
    <div>       
            <div className='colloq-hero' >
              <div >COLLOQUIUM</div>
            </div>
     {/* colloq  */}
    <div className='colloq-page'>
    <h2>NSUT's Literary and Debating Festival.</h2>
    <div className='colloq-para'>The crème de la crème of the Delhi Debating Circuit is finally here, and is going to be better than ever. Greetings everyone! The Debating Society of NSUT is elated to present to you the 8th edition of our flagship literary and debating festival- Colloquium.
Despite all restrictions that prevail, this edition of Colloquium promises to be as great as it has been in the past, adding more to the legacy it already has.
    </div>
    <h2>EXPLORE EVENTS</h2>
    {/* mun */}
    <div className='colloq-mun'>
    <h3>NSUTMUN</h3>
    <img src='/images/colloq/nsutmun.png' alt='nsutmun'></img>
    <h4>Model United Nations</h4>
    <p>The biggest model UN Conference in the Delhi Circuit. With hand-picked committees thought after intense deliberations, over 350 Delegates, and an esteemed Executive Board Panel, the conference is the home for a plethora of discussions ranging from Indian Politics to the International Humanitarian Conditions.</p>
    <a href="https://linktr.ee/DebSoc_NSUT?utm_source=linktree_profile_share&ltsid=16aee039-7b0a-47ce-b742-0c7b91d7511f" target='_blank'>
    <button>REGISTER AS A DELEGATE</button>
    </a>
    </div>
    
    <div className='colloq-pd'>
    <h3>NSMPD</h3>
    <img src='/images/colloq/nsm.png' alt='nsmpd'></img>
    <h4>Parliamentary Debate</h4>
    <div className='pd-para'>One of the most reputed Parliamentary Debating Tournament in the Delhi Circuit. With a Team Cap of 32 Teams, and over 150 participants, NSMPD witnesses the best of Delhi Circuit debating upon a plethora of topics, the debate is a beautiful profusion of rationale, logic and public speaking.</div>
    <a href="https://linktr.ee/NSMPD24?utm_source=linktree_profile_share&ltsid=40ea9eb4-81ab-4868-9bd9-75c1ab75d879" target='_blank'>
    <button>REGISTER</button>
    </a>
    </div>
    <h3>GALLERY</h3>
    <Carousel />
    </div>
    </div>
  )
}


export default COLLOQ
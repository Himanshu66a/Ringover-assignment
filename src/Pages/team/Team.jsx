import React from 'react'
import './team.css'

function Team() {
  return (
    <div className='Team'>
        <div className="team-head">
            Without bonding and coordination every project is a failure.Look at who makes KICKSUP great.  :-)
        </div>
        <div className="team-members">
            <div className="member">
                <img src="assets/zidane.jpg" alt="" />
                <div className="inf">Zidane</div>
                <div className='role'>Leadership management</div>
                <div className="acc">
                    <img src="assets/linkedin.png" alt="" />
                    <img src="assets/medium.png" alt="" />
                    <img src="assets/facebook.png" alt="" />
                </div>
            </div>
            <div className="member">
                <img src="assets/tonikroos.jpg" alt="" />
                <div className="inf">Toni kroos</div>
                <div className='role'>Product Developer</div>
                <div className="acc">
                    <img src="assets/linkedin.png" alt="" />
                    <img src="assets/medium.png" alt="" />
                </div>
            </div>
            <div className="member">
                <img src="assets/ikercasillas.jpg" alt="" />
                <div className="inf">Iker Casillias</div>
                <div className='role'>Marketing Strategy</div>
                <div className="acc">
                    <img src="assets/medium.png" alt="" />
                </div>
            </div>
            <div className="member">
                <img src="assets/james.jpg" alt="" />
                <div className="inf">James</div>
                <div className='role'>Product Designer</div>
                <div className="acc">
                
                    <img src="assets/medium.png" alt="" />
                    <img src="assets/nba.png" alt="" />
                    <img src="assets/facebook.png" alt="" />
                </div>
            </div>
            <div className="member">
                <img src="assets/christiano.jpg" alt="" />
                <div className="inf">Christiano</div>
                <div className='role'>Financial Operations</div>
                <div className="acc">
                    <img src="assets/linkedin.png" alt="" />
                    <img src="assets/facebook.png" alt="" />
                </div>
            </div>
        </div>
        <div className="team-head">
and You!. :)        </div>
    </div>
  )
}

export default Team
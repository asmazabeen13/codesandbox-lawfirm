import './OurTeam.css'
import danial from "../../assets/danial.svg"
import sanfole from "../../assets/sanfole.svg"
import cesforlia from "../../assets/cesforlia.svg"
import colleen from "../../assets/colleen.svg"
import haldon from "../../assets/haldon.svg"
import nik from "../../assets/nik.svg"


const OurTeam = () => {
  return (
    <div className='ourteam'>
      <h1 className='teamheading'>Our Team</h1>
      <div className='teams'>
        <div className='team'>
          <div className='teamcard'>
            <img src={danial} alt="" />
            <div>
            <p>Danial Def</p>
            <p style={{ color: 'gray' }}>301 cases</p>
            </div>
          </div>
          <div className='teamcard sanfole'>
            <img src={sanfole} alt="" />
            <div>
            <p>Sanfole</p>
            <p style={{ color: 'gray' }}>850 cases</p>
            </div>
          </div>
          <div className='teamcard'>
            <img src={cesforlia} alt="" />
            <div>
            <p>Cesforila</p>
            <p style={{ color: 'gray' }}>381 cases</p>
            </div>
          </div>
        </div>
        <div className='team'>
          <div className='teamcard'>
            <img src={colleen} alt="" />
            <div>
            <p>Colleen</p>
            <p style={{ color: 'gray' }}>391 cases</p>
            </div>
          </div>
          <div className='teamcard'>
            <img src={haldon} alt="" />
            <div>
            <p>Haldone</p>
            <p style={{ color: 'gray' }}>101 cases</p>
            </div>
          </div>
          <div className='teamcard'>
            <img src={nik} alt="" />
            <div>
            <p>Nik Jeo</p>
            <p style={{ color: 'gray' }}>371 cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
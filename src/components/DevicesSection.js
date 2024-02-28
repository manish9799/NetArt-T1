import React from 'react'
import devicesImg from '../images/3.png'

const DevicesSection = () => {
  return (
    <div className='devices-section'>
      <p style={{ fontWeight: '500', marginBottom: '20px', textAlign: 'center' }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img className='devicesImg' src={devicesImg} alt='no-image' />
      <p style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      <hr style={{ border: '1.5px solid red', width: '100%' }} />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={{ fontWeight: '600', marginBottom: '15px' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p style={{ lineHeight: '20px' }}>
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </div>
  )
}

export default DevicesSection
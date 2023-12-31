import React from 'react'
import './Action.css';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Action() {
  const [open, setOpen] = useState(Array(3).fill(false));
  // open[false,false,false]
  const handleCollapse = (index) => {
    // setOpen(...open,open[val]= !open[val])
    const newOpen = [...open]
    newOpen[index] = !newOpen[index]
    setOpen(newOpen)
  }
  return (
    <div className='action-container'>
      <div className='action-section'>
        <h1>My Actions</h1>
        <p>See My Activity</p>
      </div>
      {[0, 1, 2].map((index) => (
        <div className='list-container'>
          <div className='list-section'>
            <div onClick={() => { handleCollapse(index) }} className='section1'>
              <div className='icon-section'>
                <div className='section1-icon' >
                  <i class="ri-hospital-fill"></i>
                </div>
              </div>
              <div >
                <h4>Lakeshore Hospital</h4>
                <h6>Ernakulam</h6>
                <Collapse in={open[index]}>
                  <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                  </div>
                </Collapse>
              </div>
            </div>
            <div className='button-section'>
              <button className='btn btn-light'>Status</button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}
export default Action


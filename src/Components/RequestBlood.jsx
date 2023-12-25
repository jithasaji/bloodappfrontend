import React, { useState } from 'react'
import './RequestBlood.css'
import blood from '../Assets/blood.jpg'

export default function RequestBlood() {

    const [selectedBloodGroup, setSelectedBloodGroup] = useState("BloodGroup")
    const [hover, setHover] = useState(false)
    const [usertype, setUserType] = useState("User")
    console.log(hover);

    const handleChangeUser = (res) => {
        setUserType(res)
        setHover(false)
    }

    const [open, setOpen] = useState(false)


    const handleOptionSelect = (val) => {
        setSelectedBloodGroup(val)
        setOpen(!open)
    }

    return (
        <div>
            <div className="request-blood">
                <img src={blood} alt="request-blood image" className="request-blood__img" />
                <form action="" className="request-blood__form">
                    <h1 className="request-blood__title">Request Blood</h1>
                    <div className="request-blood__content">
                        <div className="request-blood__box">
                            <i className="ri-user-3-line request-blood__icon"></i>
                            <div className="request-blood__box-input">
                                <input type="Full Name" required className="request-blood__input" id="request-blood-email" placeholder=" " />
                                <label for="request-blood-email" className="request-blood__label">{usertype === "Person" ? "Full Name" : "Hospital Name"}</label>
                            </div>
                        </div>
                        <div className="request-blood__box">
                            <i class="ri-mail-fill"></i>
                            <div className="request-blood__box-input">
                                <input type="email" required className="request-blood__input" id="request-blood-email" placeholder=" " />
                                <label for="request-blood-email" className="request-blood__label">Email</label>
                            </div>
                        </div>
                        <div className="request-blood__box">
                            <i class="ri-lock-line"></i>

                            <div className="request-blood__box-input">
                                <input type="password" required className="request-blood__input" id="request-blood-email" placeholder=" " />
                                <label for="request-blood-email" className="request-blood__label">Password</label>
                            </div>
                        </div>
                        <div className="request-blood__box">
                            <i class="ri-map-pin-fill"></i>
                            <div className="request-blood__box-input">
                                <input type="Location" required className="request-blood__input" id="request-blood-email" placeholder=" " />
                                <label for="request-blood-email" className="request-blood__label">Location</label>
                            </div>
                        </div>
                        <div className=" request-blood__box">
                            <i class="ri-heart-pulse-fill"></i>
                            <div className='drop-content-container'>
                                <div className="d-flex " onClick={() => setOpen(!open)} >
                                    <div>
                                        <label for="request-blood-email" className="">{selectedBloodGroup}</label>
                                    </div>
                                    <div>
                                        <i class="ri-arrow-down-s-line"></i>
                                    </div>
                                </div>
                                {
                                    open === true &&
                                    <ul style={{ margin: "0", padding: '12px' }} className='dropdown-content'>
                                        <li onClick={() => { handleOptionSelect("A +ve") }}>'A' +ve</li>
                                        <li onClick={() => { handleOptionSelect("B +ve") }}>'B' +ve</li>
                                        <li onClick={() => { handleOptionSelect("O +ve") }}>'O' +ve</li>
                                        <li onClick={() => { handleOptionSelect("AB +ve") }}>'AB' +ve</li>
                                        <li onClick={() => { handleOptionSelect("A -ve") }}>'A' -ve</li>
                                        <li onClick={() => { handleOptionSelect("B -ve") }}>'B' -ve</li>
                                        <li onClick={() => { handleOptionSelect("O -ve") }}>'O' -ve</li>
                                        <li onClick={() => { handleOptionSelect("AB -ve") }}>'AB' -ve</li>
                                    </ul>
                                }
                            </div>
                        </div>


                    </div>
                    <button type="submit" className="request-blood__button">Submit</button>
                </form>
            </div>
            <script src="assets/js/main.js"></script>
        </div>
    )
}

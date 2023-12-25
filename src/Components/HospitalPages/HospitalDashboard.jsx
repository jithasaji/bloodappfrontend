import React from 'react'
import './HospitalDashboard.css'
import { ApexChart } from './Apexchart'
import { PieChart } from '@mui/x-charts/PieChart';
import  Dashboardimage  from '../../Assets/dashboardimage.png';

const data = [


    { id: 0, value: 10, label: 'Submitted' },
    { id: 1, value: 15, label: 'Accepted' },
    { id: 2, value: 20, label: 'Rejected' },


];

export default function HospitalDashboard() {

    return (

        <div className='Hospital-Dashboard'>
            <div>
                <div className='mid-section'>
                    <div className='midsection1'>
                        <div className='dashboard-icon'>
                            <i class="ri-drop-fill"></i>
                        </div>
                        <div className='h1-icon'>
                            <h1>Donations</h1>
                            <div className='arrow-left-down'><i class="ri-arrow-left-down-line"></i></div>
                        </div>
                        <p>Total Donations</p>
                        <div className='count'>3K+</div>

                    </div>
                    <div className='midsection2'>
                        <div className='dashboard-icon'>
                            <i class="ri-add-circle-fill"></i>
                        </div>
                        <div className='h1-icon'>
                            <h1>Requests</h1>
                            <div className='arrow-right-up'><i class="ri-arrow-right-up-line"></i></div>
                        </div>
                        <p>Total Requests</p>
                        <div className='count'>1K+</div>
                    </div>
                </div>
                <div className='units-bar-diagram py-5'>
                    <ApexChart />

                </div>

            </div>

            <div className='right-section'>
                <div className='rightsection-top py-5'>
                    <PieChart
                        series={[
                            {
                                data,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        height={200}
                    />

                </div>
                <div className='rightsection-bottom '>
                <img  className='w-100' src={Dashboardimage} alt='yyffjkgk'></img>

                </div>
            </div>
        </div>

    )
}

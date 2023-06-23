import React from 'react';
import './Buy.css'
function Box() {
  return (
    <>
      <table  class="show-my-request-table" className='col-xl-6'>
        <tr>
          <td>In The Box</td>
          <td className='BoxDescription'>Mobile and charger</td>
        </tr>
        <tr>
          <td>Color</td>
          <td className='BoxDescription'>-</td>
        </tr>
        <tr>
          <td >OTG Compatible</td>
          <td className='BoxDescription'>No</td>
        </tr>
        <tr>
          <td>Model Number</td>
          <td className='BoxDescription'>E8+</td>
        </tr>
        <tr>
          <td>Model Name</td>
          <td className='BoxDescription'>E8 Plus</td>
        </tr><tr>
          <td>Browse Type</td>
          <td className='BoxDescription'>Feature Phones</td>
        </tr><tr>
          <td>SIM Type</td>
          <td className='BoxDescription'>Dual Sim</td>
        </tr>
      </table>
    </>
  )
}
export default Box

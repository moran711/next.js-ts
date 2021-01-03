import React from 'react';

const Calendar:React.FC = () => {
  return (
    <table className="calendar-container">
       <caption className="table-header">
         <h2>
            Annual calendar of matches
         </h2>
       </caption>
       <tbody>
         <tr className="col-header">
          <th className="row-header">Date of match</th>
          <th className="row-header">Venue</th>
          <th className="row-header">Opponent / tournament</th>
         </tr>
         <tr className="row-content">
           <td className="col-content">04.11.2020</td>
           <td className="col-content">Camp Nou</td>
           <td className="col-content">Dynamo Kyiv</td>
         </tr>
         <tr className="row-content">
           <td className="col-content">21.11.2020</td>
           <td className="col-content">Estadio Wanda Metropolitano</td>
           <td className="col-content">Atletico Madrid</td>
         </tr>
         <tr className="row-content">
           <td className="col-content">06.12.2020</td>
           <td className="col-content">Estadio Ramón de Carranza</td>
           <td className="col-content">Cadiz</td>
         </tr>
         <tr className="row-content">
           <td className="col-content">30.12.2020</td>
           <td className="col-content">Camp Nou</td>
           <td className="col-content">Eibar</td>
         </tr>
       </tbody>
      </table>
  )
}

export default Calendar;
// Timetable.js
import React from 'react';

const Timetable = ({ data }) => {
  const renderTable = () => {
    const days = Object.keys(data.timetable.days);
    const times = Object.keys(data.timetable.days[days[0]]);

    return (
      <table>
        <thead>
          <tr>
            <th></th> {/* Blank cell */}
            {times.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td>{day}</td>
              {times.reduce((acc, time, timeIndex) => {
                const currentCell = data.timetable.days[day][time];
                const prevCell = timeIndex > 0 ? data.timetable.days[day][times[timeIndex - 1]] : null;

                if (prevCell && prevCell.type === currentCell.type && prevCell.fullname === currentCell.fullname) {
                  // Merge consecutive cells with the same content
                  acc[acc.length - 1].colSpan = (acc[acc.length - 1].colSpan || 1) + 1;
                } else {
                  // Add a new cell
                  acc.push({ content: currentCell, colSpan: 1 });
                }

                return acc;
              }, []).map((cell, cellIndex) => (
                <td key={cellIndex} colSpan={cell.colSpan}>
                  {cell.content.type === 'lecture' && (
                    <>
                      <p>{cell.content.code}</p>
                      <p>{cell.content.shortname}</p>
                      <p>{cell.content.room}</p>
                    </>
                  )}
                  {cell.content.type === 'Recess' && <p>Recess</p>}
                  {cell.content.type === 'lab' && (
                    <>
                      {Object.values(cell.content).map(
                        (lab, labIndex) =>
                          labIndex !== 0 && (
                            <p key={labIndex}>
                              {lab.fullname} [{lab.for}]
                              ({lab.room})
                            </p>
                          )
                      )}
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Timetable</h1>
      {renderTable()}
    </div>
  );
};

export default Timetable;

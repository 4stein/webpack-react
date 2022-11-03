import React from 'react';
import MeetingItem from './MeetingItem/MeetingItem';

const meetings = [
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
  {
    title: 'The weekly team meeting',
    description: '3:30am - 4:30am • Finished',
  },
];

const MeetingCalendar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="meeting-list">
            <li>
              <div className="time-item">
                <span className="time-item-hour">00</span>
                <div>
                  <div className="meetings-box">
                    <MeetingItem
                      meeting={{
                        title: 'The weekly team meeting',
                        description: '3:30am - 4:30am • Finished',
                      }}
                      isMeetingsList={false}
                      active={true}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="time-item">
                <span className="time-item-hour">01</span>
                <div>
                  <div className="meetings-box">
                    <MeetingItem
                      meeting={{
                        title: 'The weekly team meeting',
                        description: '3:30am - 4:30am • Finished',
                      }}
                      isMeetingsList={false}
                      active={false}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="time-item">
                <span className="time-item-hour">02</span>
                <div>
                  <div className="meetings-box">
                    {meetings.map(meeting => (
                      <MeetingItem
                        meeting={meeting}
                        isMeetingsList={
                          meetings.length > 0 && meetings.length !== 2
                        }
                        active={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="time-item">03</div>
            </li>
            <li>
              <div className="time-item">04</div>
            </li>
            <li>
              <div className="time-item">05</div>
            </li>
            <li>
              <div className="time-item">06</div>
            </li>
            <li>
              <div className="time-item">07</div>
            </li>
            <li>
              <div className="time-item">08</div>
            </li>
            <li>
              <div className="time-item">09</div>
            </li>
            <li>
              <div className="time-item">10</div>
            </li>
            <li>
              <div className="time-item">11</div>
            </li>
            <li>
              <div className="time-item">12</div>
            </li>
            <li>
              <div className="time-item">13</div>
            </li>
            <li>
              <div className="time-item">14</div>
            </li>
            <li>
              <div className="time-item">15</div>
            </li>
            <li>
              <div className="time-item">16</div>
            </li>
            <li>
              <div className="time-item">17</div>
            </li>
            <li>
              <div className="time-item">18</div>
            </li>
            <li>
              <div className="time-item">19</div>
            </li>
            <li>
              <div className="time-item">20</div>
            </li>
            <li>
              <div className="time-item">21</div>
            </li>
            <li>
              <div className="time-item">22</div>
            </li>
            <li>
              <div className="time-item">23</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeetingCalendar;

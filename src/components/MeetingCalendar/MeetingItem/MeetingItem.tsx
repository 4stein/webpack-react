import React from 'react';

interface IMeetingItemProps {
  meeting: {
    title: string;
    description: string;
  };
  isMeetingsList: boolean;
  active: boolean;
}

const MeetingItem: React.FC<IMeetingItemProps> = ({
  meeting,
  isMeetingsList,
  active,
}) => {
  return (
    <div
      className={`meeting-item ${isMeetingsList ? 'list' : ''}${
        active ? 'active' : ''
      }`}
    >
      <div>
        <h4 className="meeting-item-title">{meeting.title}</h4>
        <span className="meeting-item-description">{meeting.description}</span>
      </div>
      <button
        type="button"
        className={`btn btn-primary meeting-item-btn ${
          isMeetingsList ? 'none' : ''
        }`}
      >
        Join
      </button>
    </div>
  );
};

export default MeetingItem;

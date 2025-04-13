import React from 'react';

const UserAvatar = ({ backgroundColor = '#FFD700' }) => {
  return (
    <div 
      className="w-[50px] h-[50px] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="w-[30px] h-[30px] bg-black rounded-full relative flex justify-center items-center">
        <div className="w-[20px] h-[6px] bg-white rounded-[3px] relative"></div>
      </div>
    </div>
  );
};

export default UserAvatar; 
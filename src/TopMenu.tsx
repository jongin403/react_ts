import React from 'react';

type TopMenuProps = {
  name: string;
  onClick: (name: string) => void;
};

function TopMenu({ name, onClick }: TopMenuProps) {
  const handleClick = () => onClick(name);
  const pageTitle = 'TopMenu';
  return (
    <div>
      <div>
        <h2>{pageTitle}</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default TopMenu;
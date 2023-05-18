import React, { useState } from 'react';

const DialogComponent = (props) => {
  const { isOpen, onClose, children, title } = props;
  const [isTransitioned, setIsTransitioned] = useState(false);

  const handleEnter = () => {
    setIsTransitioned(true);
  };

  const handleExited = () => {
    setIsTransitioned(false);
  };

  return (
    <div className={`transition-opacity transition-transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} onTransitionEnd={isOpen ? handleEnter : handleExited}>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" />
      )}

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div className={`w-full rounded-lg max-w-4xl dark:bg-slate-900 transform ${isTransitioned ? 'ease-out duration-300' : 'ease-in duration-200'}`}>
            {title && (
              <h3 className="text-lg font-medium leading-6">{title}</h3>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogComponent;

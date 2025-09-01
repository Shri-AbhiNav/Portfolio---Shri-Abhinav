import { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Add event listener for context menu
    document.addEventListener('contextmenu', handleContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default DisableRightClick;

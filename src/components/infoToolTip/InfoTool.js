import { useEffect } from 'react';
import './InfoTool.css';
import ok from '../../images/ок.svg';
import fail from '../../images/fail.svg';

function InfoTool({ statusOk, text, opened, onClose }) {

  const handleOverlayClick = () => {
    onClose();
  };

  useEffect(() => {
    if (opened) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [opened, onClose]);

  return (
    <div className={opened ? 'info-tool info-tool_opened' : 'info-tool'} onClick={handleOverlayClick}>
      <div className="info-tool__tooltip">
        <img className='info-tool__icon' alt='иконка' src={statusOk ? ok : fail}></img>
        <p className="info-tool__tooltip-text">{text}</p>
      </div>
    </div>
  );
}

export default InfoTool;
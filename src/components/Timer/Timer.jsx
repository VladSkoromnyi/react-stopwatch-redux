import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../../store';

import './Timer.scss';

const Timer = () => {
  const seconds = useSelector(selectors.seconds);
  const isActive = useSelector(selectors.isActive);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(actions.toggle());
  }

  const reset = () => {
    dispatch(actions.reset());
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(actions.start());
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, dispatch]);

  return (
    <div className="Timer">
      <div className="Timer__count">
        {seconds}s {console.log(isActive)}
      </div>
      <div className="Timer__toggles">
        <button 
					className={`Timer__button Timer__button--${isActive ? 'pause' : 'start'}`} 
					onClick={toggle}
				>
          {isActive ? 'Pause' : 'Start'}
        </button>
        
				<button 
					className="Timer__button Timer__button--reset" 
					onClick={reset}
				>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

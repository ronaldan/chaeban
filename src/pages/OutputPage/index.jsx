import React, { useContext } from 'react';
import { Button, Link } from '@material-ui/core';
import './style.scss';
import { AppContext } from '../../context';
import { useHistory, useLocation } from 'react-router-dom';

const TextWithLabel = ({ label, text, theme }) => (
  <div className="outputpage__textwithlabel">
    <div className="outputpage__label" style={{ color: theme.labelColor }}>
      {label}
    </div>
    <div className="outputpage__text" style={{ color: theme.textColor }}>
      {text}
    </div>
  </div>
);

const OutputPage = () => {
  const { theme } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  const onBack = () => {
    history.goBack();
  };

  return (
    <div
      className="outputpage__container"
      style={{ backgroundColor: theme.backColor }}
    >
      <TextWithLabel
        label="Date"
        text={new Date(location.state.selectedDate).toString()}
        theme={theme}
      />
      <TextWithLabel
        label="Message"
        text={location.state.message}
        theme={theme}
      />
      <TextWithLabel
        label="Git Repository"
        text={
          <Link href="https://github.com" style={{ color: theme.textColor }}>
            https://github.com/ronaldan/chaeban
          </Link>
        }
        theme={theme}
      />
      <Button
        variant="contained"
        style={{
          marginTop: 30,
          backgroundColor: theme.buttonBackColor,
          color: theme.buttonTextColor
        }}
        onClick={onBack}
      >
        Back
      </Button>
    </div>
  );
};

export default OutputPage;

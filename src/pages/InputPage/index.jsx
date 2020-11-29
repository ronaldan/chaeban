import React, { useContext, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import './style.scss';
import { AppContext } from '../../context';
import { Themes } from '../../constants';
import ThemeColors from '../../components/ThemeColors';
import { useHistory } from 'react-router-dom';

const themeNames = Object.keys(Themes);

const InputPage = () => {
  const { themeType, toggleTheme } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState('');
  const [selectedThemeType, setSelectedThemeType] = React.useState(themeType);
  const history = useHistory();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeTheme = (event) => {
    setSelectedThemeType(event.target.value);
    toggleTheme(event.target.value);
  };

  const onLaunch = () => {
    history.push('/output', {
      selectedDate,
      message
    });
  };

  return (
    <div className="inputpage__container">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
      <TextField
        className="inputpage__text"
        id="outlined-multiline-static"
        label="Message"
        fullWidth
        multiline
        rows={10}
        variant="outlined"
        value={message}
        onChange={handleMessageChange}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Themes</FormLabel>
        <RadioGroup
          aria-label="themes"
          name="themes"
          value={selectedThemeType}
          onChange={handleChangeTheme}
        >
          {themeNames.map((themeName, index) => (
            <FormControlLabel
              key={index}
              value={themeName}
              control={<Radio />}
              label={themeName}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <ThemeColors />
      <Button
        className="inputpage__button"
        variant="contained"
        color="primary"
        onClick={onLaunch}
      >
        Launch
      </Button>
    </div>
  );
};

export default InputPage;

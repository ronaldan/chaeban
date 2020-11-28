import React, { useContext, useState } from 'react';
import {
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

const themeNames = Object.keys(Themes);

const InputPage = () => {
  const { toggleTheme } = useContext(AppContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [text, setText] = useState('');
  const [selectedThemeType, setSelectedThemeType] = React.useState(
    themeNames[0]
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleChangeTheme = (event) => {
    setSelectedThemeType(event.target.value);
    toggleTheme(event.target.value);
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
        label="Text"
        fullWidth
        multiline
        rows={10}
        variant="outlined"
        value={text}
        onChange={handleTextChange}
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
    </div>
  );
};

export default InputPage;

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'orange'
    },
    secondary: {
      main: 'red'
    }
  },
});

type FSplitButtonProps = {
  options: Array<string>;
  onClick: (selectedIndex: number, selected:string) => void;
  defaultIndex?: number;
  // selectedValue: string;
}


const MySplitButton = React.memo((props: FSplitButtonProps) =>{

  const {options, onClick, defaultIndex, } = props;

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(defaultIndex ? defaultIndex: 0 );

  const handleClick = () => {
    //console.info(`You clicked ${options[selectedIndex]}`);
    debugger;
    //onClick(selectedIndex, options[selectedIndex]);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    onClick(index, options[index]);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button" color='primary'>
        {/* <Button onClick={handleClick}> {selectedValue} </Button> */}
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </ThemeProvider>
    </React.Fragment>
  );
});

export default MySplitButton;


//   <MySplitButton options={myOptions} onClick={myHandleChnage} />
import React, { useCallback } from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { connect } from 'react-redux'
import { switchLanguage } from '../src/actions'
import { bindActionCreators } from 'redux'
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { styled, makeStyles, withStyles} from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Snackbar from '@material-ui/core/Snackbar'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import MuiAlert from '@material-ui/lab/Alert';
import { en } from '/static/language-en.js'
import { zh } from '/static/language-zh.js'
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  textSize: {
    fontSize: '14px',
  }
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '11px 12px 12px',
    border: '1px solid',
    width: '100%',
    color: "#fff",
    lineHeight: 1.5,
    backgroundColor: '#D23F57',
    borderColor: '#D23F57',
    marginBottom: 20,
    borderRadius: 8,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#c95b6d',
      borderColor: '#c95b6dd9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#D23F57',
      borderColor: '#D23F57',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    {...props}
  />
))(({  }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: 25,
    // minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: 'rgb(55, 65, 81)',
        marginRight: 10,
      }
    },
  }
}));


const PcHeader = ({language, handleClick, handleClose, anchorEl}) => {
  const open = Boolean(anchorEl);
  return (
    <div className="header">
    <div className="leftContain">
      <p className="leftContainItem">+9012 3456 789</p>
      <p className="leftContainItem">info@buyanz.com</p>
      <p className="leftContainItem">Welcome, KKKK, Log out ENGLISH</p>
    </div> 
    <div className="rightContain">
      {language === 'zh'? zh.help : en.help}
      <div>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          // variant="contained"
          // disableElevation
          onClick={handleClick}
          style={{ color: '#fff', fontSize: '12px' }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {language === 'zh'? zh.language : en.language}
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          // onClick={handleClick}
          keepMounted
          onClose={handleClose}
        >
          <MenuItem onClick={() => {handleClose('zh')}}>
            <EditIcon />
            中文
          </MenuItem>
          <MenuItem onClick={() => {handleClose('en')}}>
            <FileCopyIcon />
            English
          </MenuItem>
        </StyledMenu>
      </div>
      <div>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          style={{ color: '#fff', fontSize: '12px' }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {language === 'zh'? zh.currency : en.currency}
        </Button>
      </div>
    </div>
  </div>
  )
}

const MbHeader = ({language, handleClick, handleClose, anchorEl}) => {
  const open = Boolean(anchorEl);
return (
    <div className="header">
      <div className="leftContain">
        <p className="leftContainItem">Welcome, KKKK, Log out ENGLISH</p>
      </div> 
      <div className="rightContain">
        <div>
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ color: '#fff', fontSize: '12px' }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {language === 'zh'? zh.language : en.language}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            // onClick={handleClick}
            keepMounted
            onClose={handleClose}
          >
            <MenuItem onClick={() => {handleClose('zh')}}>
              <EditIcon />
              中文
            </MenuItem>
            <MenuItem onClick={() => {handleClose('en')}}>
              <FileCopyIcon />
              English
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </div>
  )
}

const PcBody = ({showPassword, showConfirm, errorMsg, errorPassword, errorConfirm, language, handleChange, handleClickShowPassword, handleClickShowConfirm, handleCLickTest}) => {
  const classes = useStyles()
  const testPush = () => {
    location.pathname = '/login'
  }
  return (
    <div className="body">
      <div className="loginCard">
        <p className="signUpLabel">
          {language === 'zh'? zh.signup : en.signup}
        </p>
        <p className="signUpSmallLabel">{language === 'zh'? zh.signuplabel : en.signuplabel}</p>
        <Divider />
        <div className="inputMargin">
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{language === 'zh' ? zh.email : en.email}</InputLabel>
            <OutlinedInput
              // required
              id="outlined-adornment-password"
              type={'text'}
              onChange={handleChange('email')}
              labelWidth={70}
              // error
              className='signUpLabel'
            />
        </FormControl>
        <div className={errorMsg ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorMsg}</p>
        </div>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{language === 'zh' ? zh.password : en.password}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* <Visibility /> */}
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
        </FormControl>
        <div className={errorPassword ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon errorIconAuto">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorPassword}</p>
        </div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel>{language === 'zh' ? zh.confimrPassword : en.confimrPassword}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirm ? 'text' : 'password'}
              // value={emailAccount.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirm}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* <Visibility /> */}
                    {showConfirm ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
        </FormControl>          
        <div className={errorConfirm ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon errorIconAuto">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorConfirm}</p>
        </div>
      </div>
      <p className="loginTip">{language === 'zh'? zh.useEight : en.useEight}</p>
      <BootstrapButton onClick={handleCLickTest} variant="contained" disableRipple>
        {language === 'zh'? zh.signup : en.signup}
      </BootstrapButton>
      <Divider />
        <p className="buttonCourse" onClick={testPush}>{language === 'zh'? zh.haveAccount : en.haveAccount}</p>
      </div>
    </div>
  )
}

const MbBody = ({showPassword, showConfirm, errorMsg, errorPassword, errorConfirm, language, handleChange, handleClickShowPassword, handleClickShowConfirm, handleCLickTest}) => {
  const classes = useStyles();
  return (
      <div className="body">
      <div className="mbLoginCard">
        <p className="signUpLabel">
          {language === 'zh'? zh.signup : en.signup}
        </p>
        <p className="signUpSmallLabel">{language === 'zh'? zh.signuplabel : en.signuplabel}</p>
        <Divider />
        <div className="inputMargin">
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{language === 'zh' ? zh.email : en.email}</InputLabel>
            <OutlinedInput
              // required
              id="outlined-adornment-password"
              type={'text'}
              onChange={handleChange('email')}
              labelWidth={70}
              // error
              className='signUpLabel'
            />
        </FormControl>
        <div className={errorMsg ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorMsg}</p>
        </div>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{language === 'zh' ? zh.password : en.password}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* <Visibility /> */}
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
        </FormControl>
        <div className={errorPassword ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon errorIconAuto">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorPassword}</p>
        </div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel>{language === 'zh' ? zh.confimrPassword : en.confimrPassword}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirm ? 'text' : 'password'}
              // value={emailAccount.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirm}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {/* <Visibility /> */}
                    {showConfirm ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
        </FormControl>          
        <div className={errorConfirm ? 'errorCard' :'hide errorCard'}>
          <div className="errorIcon errorIconAuto">
            <RemoveCircleOutlineIcon fontSize="small" color="inherit"/>
          </div>
          <p className="errorText">{errorConfirm}</p>
        </div>
      </div>
      <p className="loginTip">{language === 'zh'? zh.useEight : en.useEight}</p>
      <BootstrapButton onClick={handleCLickTest} variant="contained" disableRipple>
        {language === 'zh'? zh.signup : en.signup}
      </BootstrapButton>
      <Divider />
        <p>{language === 'zh'? zh.haveAccount : en.haveAccount}</p>
      </div>
    </div>
  )
}

const Index = ({
  language,
  actions: {
    switchLanguage
  }
}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirm, setShowConfirm] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [errorPassword, setErrorPassword] = React.useState('')
  const [errorConfirm, setRrrorConfirm] = React.useState('')
  const [snack, setSnack] = React.useState(false);
  const matches = useMediaQuery('(min-width:720px)');
  const [emailAccount, setEmailAccount] = React.useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    if (event) {
      switchLanguage(event)
    }
  };
  const handleChange = (prop) => (event) => {
    setEmailAccount({ ...emailAccount, [prop]: event.target.value })
  }
  const handleClickShowPassword = useCallback((values) => {
    setShowPassword(!showPassword)
  })
  const handleClickShowConfirm = useCallback((values) => {
    setShowConfirm(!showConfirm)
  })
  const handleCLickTest = useCallback(() => {
    console.log(emailAccount)
    if (!IsEmail(emailAccount.email)) {
      setErrorMsg('Please enter a valid email.')
      console.log('邮箱不对')
    } else {
      setErrorMsg('')
    }
    if (!IsPassword(emailAccount.password)) {
      setErrorPassword('Please choose a stronger password. Try a mix of letters, numbers, and symbols.')
      console.log('密码不对')
    } else {
      setErrorPassword('')
    }
    if (emailAccount.password !== emailAccount.confirmPassword) {
      setRrrorConfirm('Please choose a stronger password. Try a mix of letters, numbers, and symbols.')
      console.log('确认不对')
      return
    } else {
      setRrrorConfirm('')
    }
    setSnack(true)
    console.log('通过')
  })
  const IsEmail = (str) => {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
   return  reg.test(str)
  }
  const IsPassword = (str) => {
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-zA-Z]|[0-9]){8,}$/
    return reg.test(str)
  }
  const closeSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack(false);
  }
  return (
    <div>
      { matches? <PcHeader language={language} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} /> : <MbHeader language={language} handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} />}
      { matches? <PcBody showPassword={showPassword} errorMsg={errorMsg} errorPassword={errorPassword} errorConfirm={errorConfirm} language={language} handleChange={handleChange} handleClickShowPassword={handleClickShowPassword} handleClickShowConfirm={handleClickShowConfirm} handleCLickTest={handleCLickTest}  /> : <MbBody showConfirm={showConfirm} errorMsg={errorMsg} errorPassword={errorPassword} errorConfirm={errorConfirm} language={language} handleChange={handleChange} handleClickShowPassword={handleClickShowPassword} handleClickShowConfirm={handleClickShowConfirm} handleCLickTest={handleCLickTest} />}
      <Snackbar open={snack} autoHideDuration={1000} onClose={closeSnack}>
        <Alert severity="success">
          sign up success!
        </Alert>
      </Snackbar>
    </div>

  )
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ switchLanguage }, dispatch) })
)(Index)
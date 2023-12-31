import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/assets/images/Logo.png';


const Navbar = () => {
  return (
	<Stack
	direction='row'
	justifyContent='space-around'
	sx={{ gap: {sm:'122px', xs:'40px'}, mt: {sm:'32px', xs:'20px'}, justifyContent:'none'}} 
	px='20px'
 	>
		<Link to='/'>
		<img src={Logo} alt='logo' style={{width:'70px', height:'70px', margin:'0 20px'}}/>
		</Link>
		<Stack 
		direction='row'
		gap='40px'
		fontSize='30px'
		alignItems='flex-end'
		>
			<Link to='/' style={{textDecoration:'none', color:'#202d85', borderBottom:'3px solid #202d85'}}> Home</Link>
			<a href='#exercises' style={{textDecoration:'none', color:'#202d85'}}>Exercises</a>
		</Stack>
	</Stack>
	)
}

export default Navbar;

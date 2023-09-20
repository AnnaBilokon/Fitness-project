import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/assets/images/HeroBannerImage.jpg';


const HeroBanner = () => {
  return (
	<Box sx={{
		mt:{lg:'150px', xs:'70px'},
		ml: {sm:'50px'}
	}}position='relative' p='20px'>
		<Typography color='#202d85' 
		fontWeight='600' 
		fontSize='26px'>
			Fitness Club
		</Typography>
	  <Typography fontWeight={700}
	  sx={{fontSize:{lg:'44px', xs:'40px'}}}
	  mb='50px' mt='30px'
	  >
		Sweat, Smile  and Repeat
	  </Typography>
	  <Typography fontSize='22px'
	  lineHeight='35px' mb={8}>
		Check out the most effective exercises
	  </Typography>
	  <Button variant='contained' 
	  color='success' 
	  href='#exercises'
	  sx={{backgroundColor: '#bcd382',
	  padding:'19px'}}>
		Explore Exercises
	  </Button>
	  <Typography fontWeight={600}
	  color='#aaaaaa'
	  sx={{
		opacity:0.2,
		display: {lg: 'block', xs: 'none'},
		mt:'155px'
	  }}
	  fontSize='200px'
	  >
		Exercises
	  </Typography>
	  <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
	</Box>
  )
}

export default HeroBanner

import React, {useState} from 'react';
import { Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import HeroBanner from '../components/HeroBanner.js';
import SearchExercises from '../components/SearchExercises.js';
import Exercises from '../components/Exercises.js';



const Home = () => {
	const [bodyPart, setBodyPart] = useState('all'); 
	const [exercises, setExercises] = useState([]);
  
	console.log(bodyPart)
	
	return (
	<Box>
	  <HeroBanner/>
	  <SearchExercises 
	  setExercises={setExercises} 
	  bodyPart={bodyPart} 
	  setBodyPart={setBodyPart}/>
	  <Exercises 
	  setExercises={setExercises} 
	  bodyPart={bodyPart} 
	  exercises={exercises}
	  />
	</Box>
  )
}

export default Home

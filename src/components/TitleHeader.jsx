import React, {useEffect,useState} from 'react'
import { useGame } from '../context/GameStateProvider';


function TitleHeader() {
    const [title,setTitle] = useState(".mamoryzation")
    const { isGameOver } = useGame();

    useEffect(() => {
        changeTitle();
      }, [isGameOver]); // Regenerate tiles whenever numberOfTiles changes

    function changeTitle(){

    }
  return (
    <h1> { title } </h1>
  )
}

export default TitleHeader
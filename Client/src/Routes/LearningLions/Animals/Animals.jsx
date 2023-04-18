import {useState} from 'react';
import Button from '@mui/material/Button';
import bark from '../../../assets/Sounds/bark.mp3';
import moo from '../../../assets/Sounds/moo.mp3';
import chicken from '../../../assets/Sounds/chicken.mp3';
import meow from '../../../assets/Sounds/meow.mp3';

const animals = [
    {
        name: 'Cat',
        img:'https://img.freepik.com/premium-vector/cute-cat-cartoon-sitting_194935-99.jpg?w=2000',
        sound: meow,
        color: 'blue'
    },
    {
        name: 'Dog',
        img: 'https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000',
        sound: bark,
        color: 'red'
    },
    {
        name: 'Cow',
        img: 'https://static.vecteezy.com/system/resources/previews/013/211/278/original/cartoon-of-cow-illustration-cow-in-format-image-illustration-of-cow-free-png.png',
        sound: moo,
        color: 'green'
    },
    {
        name: 'Chicken',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chicken_cartoon_04.svg/723px-Chicken_cartoon_04.svg.png',
        sound: chicken,
        color: 'yellow'
    }
];

    const Animals = () => {
        const [animal, setAnimal] = useState(animals[0]);
        const [score, setScore] = useState(0);
        const [answerEntered, setAnswerEntered] = useState(false);
        const [correctAnswer, setCorrectAnswer] = useState(false);
        const [animalIndex, setAnimalIndex] = useState(0);
        const [done, setDone] = useState(false);

        const playSound = (sound) => {
            const audio = new Audio(sound);
            audio.play();
        }

        const checkAnswer = (answer) => {
            if (answer === animal.name) {
                setScore(score + 1);
                setCorrectAnswer(true);
            }else{
                setCorrectAnswer(false);
            }
            setAnswerEntered(true);
        }

        const onNextHandler = () => {
            
            //set to next animal
            if (animalIndex < animals.length - 1) {
                setAnimal(animals[animalIndex + 1]);
                setAnimalIndex(animalIndex + 1);
            }else{
                setDone(true);
            }
            setAnswerEntered(false);

        }
    
return (
        <div className="w-full h-full flex justify-center mt-7">
            {!answerEntered && !done && <div className="flex-col justify-center align-center items-center">
                <h1 className="text-center">What animal is this</h1>
                <div className="w-full flex justify-center" onClick={() => playSound(animal.sound)}>
                    <img src ={animal.img}  className="w-[200px] h-[200px]"/>
                </div>
                <div className="flex space-x-5 mt-[5rem]">
                    {animals.map((animal, index) => {
                            return (
                                <Button
                                    key={index}
                                    style={{
                                        backgroundColor: 'white',
                    color: 'black',
                    width: '200px',
                    height: '100px',
                    fontSize: '25px',
                    borderRadius: '15px',
                    border: '4px solid',
                    borderColor: animal.color,
                                    }}
                                    onClick={() => {
                                        checkAnswer(animal.name);
                                    }}
                                >
                                    {animal.name}
                                </Button>
                            );
                        }
                    )}
                </div>
            </div>}
            {answerEntered && !done && <div className="flex-col justify-center align-center items-center">
                <h1 className="text-center">{correctAnswer ? 'Correct!' : 'Oops, that was incorrect'}</h1>
                <Button onClick={()=>onNextHandler()}>Next</Button>
            </div>
        }
        {done && <div className="flex-col justify-center align-center items-center">
            <h1 className="text-center">You got {score} out of {animals.length} correct!</h1>
        </div>
    }
    </div>
    );
        }

    

export default Animals;
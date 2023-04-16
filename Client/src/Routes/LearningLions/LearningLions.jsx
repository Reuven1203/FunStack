import React from 'react';
import styles from './style.module.css';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
const activities = [
  {
    name: 'Shapes',
    link: 'shapes',
    img: 'https://thumbs.dreamstime.com/b/geometric-funny-shapes-cute-kids-colorful-vector-square-cartoon-character-shape-child-education-kindergarten-preschool-212719118.jpg',
    color: 'red',
  },
  {
    name: 'Numbers',
    link: 'numbers',
    color: 'blue',
    img: 'https://img.freepik.com/premium-vector/funny-orange-number-five-5-cartoon-character-vector-hand-drawn-illustration_20412-1388.jpg?w=2000',
  },
  {
    name: 'Colors',
    link: 'colors',
    color: 'green',
    img: 'https://previews.123rf.com/images/kharlamova/kharlamova1601/kharlamova160100292/50124734-children-jumping-on-the-background-color-splash-banner-funny-cartoon-character-vector.jpg',
  },
  {
    name: 'Animals',
    link: 'animals',
    color: 'yellow',
    img: 'https://img.freepik.com/free-vector/cute-animals-white_1308-35096.jpg?w=2000',
  },
];
const LearningLions = () => {
  return (
    <div className="flex justify-center w-full h-9/10 align-center">
      <div className="flex flex-wrap space-x-3 space-y-3 h-full justify-center items-center w-[50rem]">
        {activities.map((activity) => {
          return (
            <Link to={activity.link}>
              <Card
                sx={{
                  border: '4px solid',
                  height: 350,
                  width: 300,
                  padding: 3,
                  display: 'flex-col',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderColor: `${activity.color}`,
                }}
              >
                <h1 className="text-center">{activity.name}</h1>
                <div className="flex w-full h-full">
                  <img src={activity.img} />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LearningLions;

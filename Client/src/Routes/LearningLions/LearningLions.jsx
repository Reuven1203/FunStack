import React from 'react';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomToolTip from '../../components/ToolTip/CustomToolTip';

const activities = [
  {
    name: 'Shapes',
    link: 'shapes',
    img: 'https://thumbs.dreamstime.com/b/geometric-funny-shapes-cute-kids-colorful-vector-square-cartoon-character-shape-child-education-kindergarten-preschool-212719118.jpg',
    color: 'red',
    title: 'Click here to play the Shapes game!',
  },
  {
    name: 'Numbers',
    link: 'numbers',
    color: 'blue',
    img: 'https://img.freepik.com/premium-vector/funny-orange-number-five-5-cartoon-character-vector-hand-drawn-illustration_20412-1388.jpg?w=2000',
    title: 'Click here to play the Numbers game!',
  },
  {
    name: 'Colors',
    link: 'colors',
    color: 'green',
    title: 'Click here to play the Colors game!',
    img: 'https://previews.123rf.com/images/kharlamova/kharlamova1601/kharlamova160100292/50124734-children-jumping-on-the-background-color-splash-banner-funny-cartoon-character-vector.jpg',
  },
  {
    name: 'Animals',
    link: 'animals',
    color: 'yellow',
    title: 'Click here to play the Animals game!',
    img: 'https://img.freepik.com/free-vector/cute-animals-white_1308-35096.jpg?w=2000',
  },
];
const LearningLions = (props) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: '75vh' }}
    >
      <h1 className="text-6xl text-center mb-12">
        Learning Lions
        {'\u{1F981}'}
      </h1>
      <div className="flex justify-center space-x-8">
        {activities.map((activity) => {
          return (
            <Link to={activity.link} key={activity.id}>
              <CustomToolTip title={activity.title}>
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
                  <h2 className="text-center">{activity.name}</h2>
                  <div className="flex w-full h-full">
                    <img src={activity.img} alt={activity.name} />
                  </div>
                </Card>
              </CustomToolTip>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LearningLions;

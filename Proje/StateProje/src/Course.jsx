import React from 'react';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './Course.css';
const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  KompleWeb,
}; 

const Course = ({ courseName }) => {
  return (
    <div className='courseDiv'>
      <img className="course"src={courseMap[courseName]} alt={courseName} />
    </div>
  );
};

export default Course;


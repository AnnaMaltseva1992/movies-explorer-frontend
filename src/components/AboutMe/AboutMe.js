import React from 'react';
import './AboutMe.css';
import myphoto from '../../images/myPhoto.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Анна</h3>
          <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я врач по образованию. Живу в Москве. В настоящее время нахожусь в декретном отпуске, у меня двое прекрасных детей. Занимаюсь бегом, вышиваю броши из бисера. А еще люблю узнавать новое, поэтому решила обучаться веб-разработке. В дальнейшем планирую заниматься фрилансом.
          </p>
          <a
            href="https://github.com/AnnaMaltseva1992"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
        <img src={myphoto} alt="фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
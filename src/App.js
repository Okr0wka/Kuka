import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css'; // для глобальных стилей

// Определяем светлую и темную темы
const lightTheme = {
  background: '#f5f5f5',
  color: '#333',
  buttonBackground: '#008CBA',
  buttonColor: 'white',
};

const darkTheme = {
  background: '#333',
  color: '#f5f5f5',
  buttonBackground: '#444',
  buttonColor: 'white',
};

// Стиль для контейнера с анимацией
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all 0.5s ease;
`;

// Кнопка переключения темы
const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

// Компонент страницы о вас
const AboutSection = styled.section`
  max-width: 800px;
  text-align: center;
  margin-top: 50px;
  font-family: 'Arial', sans-serif;
`;

const Heading = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Сохраняем выбранную тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Heading>О себе</Heading>
        <AboutSection>
          <Paragraph>
            Привет, меня зовутЮрий! Я разработчик с большим интересом к созданию
            красивых и функциональных веб-приложений. Я люблю работать с новыми технологиями и
            всегда стремлюсь создавать удобные интерфейсы.
          </Paragraph>
          <Paragraph>
            В свободное время я увлекаюсь...сном.
          </Paragraph>
        </AboutSection>

        <ToggleButton onClick={toggleTheme}>
          {isDarkMode ? 'Светлая тема' : 'Темная тема'}
        </ToggleButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;


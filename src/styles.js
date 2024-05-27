import styled from 'styled-components';
import { animated } from 'react-spring';

export const ResumeContainer = styled.div` // Стиль контейнера для резюме
  max-width: 800px;  // ширина контейнера
  margin: 0 auto;
  padding: 20px; 
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const Title = styled.h1` // Стиль заголовока першого рівня 
  text-align: center; 
  font-size: 2em; // Розмір шрифту
`;

export const Section = styled.div`
  margin-bottom: 20px; // Відступ між розділами
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em; // Розмір шрифту заголовків 2 рівня
  color: #333; 
`;

export const Field = styled.div`
  margin-bottom: 10px; // Відступ між полями
  flex-direction: column; 
`;

export const Label = styled.label`
  display: block; 
  font-weight: bold; // Товщина шрифту
  margin-bottom: 5px; // Відступ поля від назви поля
`;


export const AnimatedInputField = styled(animated.input)`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const AnimatedTextAreaField = styled(animated.textarea)`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 50px;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  width: 100%; // Ширина поля окім полів Опис
  padding: 10px; 
  font-size: 1em; 
  border: 1px solid #ccc; 
  border-radius: 50px; 
  margin-bottom: 10px; 
`;

export const TextAreaField = styled.textarea`
  width: 100%; // Ширина поля
  padding: 10px; 
  font-size: 1em;
  border: 1px solid #ccc; 
  border-radius: 50px; 
  margin-bottom: 10px; 
`;

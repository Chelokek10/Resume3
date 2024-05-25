import styled from 'styled-components';

export const ResumeContainer = styled.div` // Стиль контейнера для резюме
  max-width: 800px;  // Максимальна ширина контейнера
  margin: 0 auto;// Автоматичне вирівнювання контейнера по центру відносно батьківського елемента
  padding: 20px; // Відступи всередині контейнера
  border: 1px solid #ddd; // Рамка з тінню
  border-radius: 10px; // Радіус закруглення кутів контейнера
  background-color: #f9f9f9;// Колір фону контейнера
`;

export const Title = styled.h1` // Стиль заголовока першого рівня 
  text-align: center; // Вирівнювання тексту по центру
  font-size: 2em; // Розмір шрифту
`;

export const Section = styled.div`
  margin-bottom: 20px; // Відступ між розділами
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em; // Розмір шрифту заголовків 2 рівня
  color: #333; // Колір тексту
`;

export const Field = styled.div`
  margin-bottom: 10px; // Відступ між полями
  flex-direction: column; // Напрямок колонок
`;

export const Label = styled.label`
  display: block; // Блоковий елемент
  font-weight: bold; // Товщина шрифту
  margin-bottom: 5px; // Відступ поля від назви поля
`;

export const InputField = styled.input`
  width: 100%; // Ширина поля окім полів Опис
  padding: 10px; // Висота поля
  font-size: 1em; // Розмір шрифту
  border: 1px solid #ccc; // Рамка з тонкою сірою лінією
  border-radius: 50px; // Радіус закруглення кутів
  margin-bottom: 10px; // Відступ між полями
`;

export const TextAreaField = styled.textarea`
  width: 100%; // Ширина поля
  padding: 10px; // Внутрішні відступи
  font-size: 1em;// Розмір шрифту
  border: 1px solid #ccc; // Рамка з тонкою сірою лінією
  border-radius: 50px; // Радіус закруглення кутів
  margin-bottom: 10px; // Відступ знизу Описів
`;

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {
  ResumeContainer,
  Title,
  Section,
  SectionTitle,
  Field,
  Label,
  InputField,
  TextAreaField,
} from './styles';

const AnimatedInputField = animated(InputField);// Створення анімованого поля вводу
const AnimatedTextAreaField = animated(TextAreaField);// Створення анімованого поля для текстового введення

const AnimatedTextField = ({ label, name, value, onChange }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {name === 'description' ? (
        <AnimatedTextAreaField
          name={name}
          value={value}
          onChange={onChange}// Обробник зміни значення поля ввод
          rows={value.split('\n').length} // Кількість рядків у текстовому пол
        />
      ) : (
        <AnimatedInputField
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </Field>
  );
};

//розділ резюме
//Відображення назви розділу
//Відображення дочірніх елементів
const ResumeSection = ({ title, children }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Section>
);

// Стани для зберігання особистої інформації, досвіду роботи та освіти
const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    dateOfBirth: '',
    sex: '',
  });

//досвід роботи
  const [experience, setExperience] = useState({
    position: '', // Посада
    description: '', // Опис досвіду роботи
  });
// Освіта
  const [education, setEducation] = useState({
    institution: '', // Назва закладу освіти
    description: '', // Опис освіти
  });

  return (
// розділ Особиста інформація
    <ResumeContainer>
      <Title>Резюме</Title>
      <ResumeSection title="Особиста інформація">
        <div style={{ display: 'flex', flexDirection: 'row' }}>{/* Контейнер для імені та прізвища */}
          <Field style={{ flex: 1, marginRight: '50px' }}>{/* розмір та відстанть поля */}
            <Label>Ім'я:</Label>
            <InputField
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
            />{/* Поле введення імені */}
          </Field>
          <Field style={{ flex: 1 }}>
            <Label>Прізвище:</Label>
            <InputField
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
            />
          </Field>
        </div>
        <Field>
          <Label>Заголовок:</Label>
          <InputField
            type="text"
            name="title"
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Пошта:</Label>
          <InputField
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Телефон:</Label>
          <InputField
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Адреса:</Label>
          <InputField
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Поштовий індекс:</Label>
          <InputField
            type="text"
            name="zipCode"
            value={personalInfo.zipCode}
            onChange={(e) => setPersonalInfo({ ...personalInfo, zipCode: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Місто:</Label>
          <InputField
            type="text"
            name="city"
            value={personalInfo.city}
            onChange={(e) => setPersonalInfo({ ...personalInfo, city: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Дата народження:</Label>
          <InputField
            type="date"
            name="dateOfBirth"
            value={personalInfo.dateOfBirth}
            onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
          />
        </Field>
        <Field>
          <Label>Стать:</Label>
          <InputField
            type="text"
            name="sex"
            value={personalInfo.sex}
            onChange={(e) => setPersonalInfo({ ...personalInfo, sex: e.target.value })}
          />
        </Field>
      </ResumeSection>

      <ResumeSection title="Досвід роботи">
        <Field>
          <Label>Посада:</Label>
          <InputField
            type="text"
            name="position"
            value={experience.position}
            onChange={(e) => setExperience({ ...
experience, position: e.target.value })}
          />
        </Field>
        <AnimatedTextField
          label="Опис:"
          name="description"
          value={experience.description}
          onChange={(e) => setExperience({ ...experience, description: e.target.value })}
        />
      </ResumeSection>

      <ResumeSection title="Освіта">
        <Field>
          <Label>Заклад:</Label>
          <InputField
            type="text"
            name="institution"
            value={education.institution}
            onChange={(e) => setEducation({ ...education, institution: e.target.value })}
          />
        </Field>
        <AnimatedTextField
          label="Опис:"
          name="description"
          value={education.description}
          onChange={(e) => setEducation({ ...education, description: e.target.value })}
        />
      </ResumeSection>
    </ResumeContainer>
  );
};

export default App;

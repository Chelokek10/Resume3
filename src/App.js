import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import {
  ResumeContainer,
  Title,
  Section,
  SectionTitle,
  Field,
  Label,
  AnimatedInputField,
  AnimatedTextAreaField,
} from './styles'; // Імпорт потрібних компонентів і стилів

const AnimatedTextField = ({ label, name, value, onChange }) => {
  const [isHovered, setIsHovered] = useState(false); // Стан для відстеження наведення миші
 // Анімація для зміни кольору фону
  const animation = useSpring({
    backgroundColor: isHovered ? 'rgba(173, 216, 230, 0.5)' : 'white',
  });

  return (
    <Field>
      <Label>{label}</Label>
      {name === 'description' ? (
        <AnimatedTextAreaField
          style={animation}
          name={name}
          value={value}
          onChange={onChange}
          rows={value.split('\n').length}
          onMouseEnter={() => setIsHovered(true)} // наведений курсор
          onMouseLeave={() => setIsHovered(false)} // відведеня курсора
        />
      ) : (
        <AnimatedInputField
          style={animation}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
    </Field>
  );
};

const AnimatedInput = ({ label, type, name, value, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const animation = useSpring({
    backgroundColor: isHovered ? 'rgba(173, 216, 230, 0.5)' : 'white',
  });

  return (
    <Field>
      <Label>{label}</Label>
      <AnimatedInputField
        style={animation}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Field>
  );
};

// секції резюме
const ResumeSection = ({ title, children }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Section>
);
// перегляд резюме
const ResumeView = ({ personalInfo, experience, education }) => (
  <ResumeContainer>
    <Title>Резюме</Title>
    <ResumeSection title="Особиста інформація">
      <p>Ім'я: {personalInfo.firstName}</p>
      <p>Прізвище: {personalInfo.lastName}</p>
      <p>Заголовок: {personalInfo.title}</p>
      <p>Пошта: {personalInfo.email}</p>
      <p>Телефон: {personalInfo.phone}</p>
      <p>Адреса: {personalInfo.address}</p>
      <p>Поштовий індекс: {personalInfo.zipCode}</p>
      <p>Місто: {personalInfo.city}</p>
      <p>Дата народження: {personalInfo.dateOfBirth}</p>
      <p>Стать: {personalInfo.sex}</p>
    </ResumeSection>
    <ResumeSection title="Досвід роботи">
      <p>Посада: {experience.position}</p>
      <p>Опис: {experience.description}</p>
    </ResumeSection>
    <ResumeSection title="Освіта">
      <p>Заклад: {education.institution}</p>
      <p>Опис: {education.description}</p>
    </ResumeSection>
  </ResumeContainer>
);

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

  const [experience, setExperience] = useState({
    position: '',
    description: '',
  });

  const [education, setEducation] = useState({
    institution: '',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(true); // перемикання між режимами редагування та перегляду

  return (
    <ResumeContainer>
      <Title>Резюме</Title>
      {isEditing ? (
        <>
          <ResumeSection title="Особиста інформація">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Field style={{ flex: 1, marginRight: '50px' }}>
                <AnimatedInput
                  label="Ім'я:"
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, firstName: e.target.value })
                  } // Оновлення стану при зміні поля
                />
              </Field>
              <Field style={{ flex: 1 }}>
                <AnimatedInput
                  label="Прізвище:"
                  type="text"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, lastName: e.target.value })
                  }
                />
              </Field>
            </div>
            <AnimatedInput
              label="Заголовок:"
              type="text"
              name="title"
              value={personalInfo.title}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, title: e.target.value })
              }
            />
            <AnimatedInput
              label="Пошта:"
              type="email"
              name="email"
              value={personalInfo.email}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, email: e.target.value })
              }
            />
            <AnimatedInput
              label="Телефон:"
              type="tel"
              name="phone"
              value={personalInfo.phone}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, phone: e.target.value })
              }
            />
            <AnimatedInput
              label="Адреса:"
              type="text"
              name="address"
              value={personalInfo.address}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, address: e.target.value })
              }
            />
            <AnimatedInput
              label="Поштовий індекс:"
              type="text"
              name="zipCode"
              value={personalInfo.zipCode}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, zipCode: e.target.value })
              }
            />
            <AnimatedInput
              label="Місто:"
              type="text"
              name="city"
              value={personalInfo.city}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, city: e.target.value })
              }
            />
            <AnimatedInput
              label="Дата народження:"
              type="date"
              name="dateOfBirth"
              value={personalInfo.dateOfBirth}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })
              }
            />
            <AnimatedInput
              label="Стать:"
              type="text"
              name="sex"
              value={personalInfo.sex}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, sex: e.target.value })
              }
            />
          </ResumeSection>

          <ResumeSection title="Досвід роботи">
            <AnimatedInput
              label="Посада:"
              type="text"
              name="position"
              value={experience.position}
              onChange={(e) =>
                setExperience({ ...experience, position: e.target.value })
              }
            />
            <AnimatedTextField
              label="Опис:"
              name="description"
              value={experience.description}
              onChange={(e) =>
                setExperience({ ...experience, description: e.target.value })
              }
            />
          </ResumeSection>

          <ResumeSection title="Освіта">
            <AnimatedInput
              label="Заклад:"
              type="text"
              name="institution"
              value={education.institution}
              onChange={(e) =>
                setEducation({ ...education, institution: e.target.value })
              }
            />
            <AnimatedTextField
              label="Опис:"
              name="description"
              value={education.description}
              onChange={(e) =>
                setEducation({ ...education, description: e.target.value })
              }
            />
          </ResumeSection>

          <button onClick={() => setIsEditing(false)}>Переглянути резюме</button>
        </>
      ) : ( // Оновлення стану при зміні поля
        <>
          <ResumeView
            personalInfo={personalInfo}
            experience={experience}
            education={education}
          />
          <button onClick={() => setIsEditing(true)}>Редагувати резюме</button>
        </>
      )}
    </ResumeContainer>
  );
};

export default App;

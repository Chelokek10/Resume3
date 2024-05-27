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
  const [isHovered, setIsHovered] = useState(false); // стан для відстеження, чи наведений курсор на поле

  const animation = useSpring({
    backgroundColor: isHovered ? 'rgba(173, 216, 230, 0.5)' : 'white', // анімація для зміни фону при наведенні
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

const ResumeSection = ({ title, children }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Section>
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

  return (
    <ResumeContainer>
      <Title>Резюме</Title>
      <ResumeSection title="Особиста інформація">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Field style={{ flex: 1, marginRight: '50px' }}>
            <AnimatedInput
              label="Ім'я:"
              type="text"
              name="firstName"
              value={personalInfo.firstName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
            />
          </Field>
          <Field style={{ flex: 1 }}>
            <AnimatedInput
              label="Прізвище:"
              type="text"
              name="lastName"
              value={personalInfo.lastName}
              onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
            />
          </Field>
        </div>
        <AnimatedInput
          label="Заголовок:"
          type="text"
          name="title"
          value={personalInfo.title}
          onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
        />
        <AnimatedInput
          label="Пошта:"
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
        />
        <AnimatedInput
          label="Телефон:"
          type="tel"
          name="phone"
          value={personalInfo.phone}
          onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
        />
        <AnimatedInput
          label="Адреса:"
          type="text"
          name="address"
          value={personalInfo.address}
          onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
        />
        <AnimatedInput
          label="Поштовий індекс:"
          type="text"
          name="zipCode"
          value={personalInfo.zipCode}
          onChange={(e) => setPersonalInfo({ ...personalInfo, zipCode: e.target.value })}
        />
        <AnimatedInput
          label="Місто:"
          type="text"
          name="city"
          value={personalInfo.city}
          onChange={(e) => setPersonalInfo({ ...personalInfo, city: e.target.value })}
        />
        <AnimatedInput
          label="Дата народження:"
          type="date"
          name="dateOfBirth"
          value={personalInfo.dateOfBirth}
          onChange={(e) => setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })}
        />
        <AnimatedInput
          label="Стать:"
          type="text"
          name="sex"
          value={personalInfo.sex}
          onChange={(e) => setPersonalInfo({ ...personalInfo, sex: e.target.value })}
        />
      </ResumeSection>

      <ResumeSection title="Досвід роботи">
        <AnimatedInput
          label="Посада:"
          type="text"
          name="position"
          value={experience.position}
          onChange={(e) => setExperience({ ...experience, position: e.target.value })}
        />
        <AnimatedTextField
          label="Опис:"
          name="description"
          value={experience.description}
          onChange={(e) => setExperience({ ...experience, description: e.target.value })}
        />
      </ResumeSection>

      <ResumeSection title="Освіта">
        <AnimatedInput
          label="Заклад:"
          type="text"
          name="institution"
          value={education.institution}
          onChange={(e) => setEducation({ ...education, institution: e.target.value })}
        />
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

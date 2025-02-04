import styled, { keyframes } from 'styled-components';

// Animaciones
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Variables
const primaryColor = '#007BFF';
const secondaryColor = '#333';
const lightColor = '#f4f4f9';
const darkColor = '#333';
const whiteColor = '#fff';
const grayColor = '#ddd';
const fontFamily = 'Arial, sans-serif';

// Componentes estilizados
export const Header = styled.header`
  background-color: ${darkColor};
  color: ${whiteColor};
  text-align: center;
  padding: 80px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  animation: ${fadeInUp} 1s ease-out;
`;

export const HeaderP = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  animation: ${fadeInUp} 1s ease-out 0.5s;
`;

export const AboutMeSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: ${whiteColor};
  margin: 30px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AboutMeH2 = styled.h2`
  font-size: 2rem;
  color: ${darkColor};
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-out;
`;

export const AboutMeP = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out 0.5s;
`;

export const ProjectSection = styled.section`
  padding: 50px 20px;
  background-color: #fafafa;
  text-align: center;
`;

export const ProjectH2 = styled.h2`
  font-size: 2rem;
  color: ${darkColor};
  margin-bottom: 30px;
  animation: ${fadeInUp} 1s ease-out;
`;

export const Proyecto = styled.div`
  display: inline-block;
  width: 30%;
  margin: 0 15px 30px;
  text-align: left;
  background-color: ${whiteColor};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding-bottom: 60px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ProyectoH3 = styled.h3`
  font-size: 1.5rem;
  color: ${darkColor};
  padding: 20px;
  font-weight: bold;
`;

export const Tecnologias = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 20px;

  ${Proyecto}:hover & {
    display: flex;
    animation: ${fadeInUp} 0.6s ease-out 0.3s;
  }
`;

export const TecnologiaSpan = styled.span`
  background-color: ${darkColor};
  color: ${whiteColor};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${primaryColor};
  }
`;

export const ContactSection = styled.section`
  padding: 50px 20px;
  background-color: ${whiteColor};
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ContactH2 = styled.h2`
  font-size: 2rem;
  color: ${darkColor};
  margin-bottom: 30px;
  animation: ${fadeInUp} 1s ease-out;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 600px;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid ${grayColor};
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${primaryColor};
  }
`;

export const Textarea = styled.textarea`
  width: 80%;
  max-width: 600px;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid ${grayColor};
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${primaryColor};
  }
`;

export const Button = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


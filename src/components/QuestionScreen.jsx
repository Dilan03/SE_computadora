import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLaptop } from 'react-icons/fa'; // Iconos para navegación y opciones

const questions = [
   // Sección 1: Uso Principal de la Computadora
   {
      id: 1,
      text: "¿Cuál es el propósito principal de la computadora?",
      options: [
         { label: "Ofimática", icon: <FaLaptop /> },
         { label: "Gaming", icon: <FaLaptop /> },
         { label: "Diseño gráfico", icon: <FaLaptop /> },
         { label: "Programación", icon: <FaLaptop /> },
         { label: "Multimedia", icon: <FaLaptop /> },
         { label: "Uso educativo", icon: <FaLaptop /> },
         { label: "Edición de video", icon: <FaLaptop /> },
      ]
   },
   {
      id: 2,
      text: "¿Va a utilizar la computadora para tareas intensivas en gráficos o procesamiento (como videojuegos, edición de video, modelado 3D)?",
      options: [{ label: "Sí", icon: <FaCheckCircle /> }, { label: "No", icon: <FaCheckCircle /> }]
   },

   // Sección 2: Presupuesto
   {
      id: 3,
      text: "¿Cuál es su presupuesto aproximado para esta compra?",
      options: [
         { label: "Menos de $5000", icon: <FaLaptop /> },
         { label: "$5000 - $10000", icon: <FaLaptop /> },
         { label: "$10000 - $15000", icon: <FaLaptop /> },
         { label: "Más de $15000", icon: <FaLaptop /> }
      ]
   },
   {
      id: 4,
      text: "¿Está dispuesto a considerar una computadora usada o reacondicionada para obtener mejor rendimiento al mismo precio?",
      options: [{ label: "Sí", icon: <FaCheckCircle /> }, { label: "No", icon: <FaCheckCircle /> }]
   },

   // Sección 3: Preferencias de Hardware y Rendimiento
   {
      id: 5,
      text: "¿Qué tan importante es para usted la velocidad de la computadora?",
      options: [
         { label: "Muy importante", icon: <FaLaptop /> },
         { label: "Moderadamente importante", icon: <FaLaptop /> },
         { label: "No es importante", icon: <FaLaptop /> }
      ]
   },
   {
      id: 6,
      text: "¿Cuántos años planea utilizar esta computadora antes de actualizarla?",
      options: [
         { label: "1-2 años", icon: <FaLaptop /> },
         { label: "3-4 años", icon: <FaLaptop /> },
         { label: "Más de 5 años", icon: <FaLaptop /> }
      ]
   },
   {
      id: 7,
      text: "¿Tiene alguna preferencia sobre el sistema operativo?",
      options: [
         { label: "Windows", icon: <FaLaptop /> },
         { label: "macOS", icon: <FaLaptop /> },
         { label: "Linux", icon: <FaLaptop /> },
         { label: "No importa", icon: <FaLaptop /> }
      ]
   },

   // Sección 4: Portabilidad y Tipo de Dispositivo
   {
      id: 8,
      text: "¿Prefiere una laptop o una computadora de escritorio?",
      options: [
         { label: "Laptop", icon: <FaLaptop /> },
         { label: "Computadora de escritorio", icon: <FaLaptop /> }
      ]
   },
   {
      id: 9,
      text: "¿Qué tan importante es la portabilidad?",
      options: [
         { label: "Muy importante (necesito llevarla conmigo)", icon: <FaLaptop /> },
         { label: "Moderadamente importante (quiero moverla ocasionalmente)", icon: <FaLaptop /> },
         { label: "Nada importante (estará en un solo lugar)", icon: <FaLaptop /> }
      ]
   },
   {
      id: 10,
      text: "¿Busca una pantalla grande (más de 15 pulgadas) o algo compacto?",
      options: [
         { label: "Pantalla grande", icon: <FaLaptop /> },
         { label: "Pantalla compacta", icon: <FaLaptop /> }
      ]
   }
];

const QuestionScreen = ({ nextStep, prevStep, handleAnswer }) => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const question = questions[currentQuestion];
   const progress = ((currentQuestion + 1) / questions.length) * 100;

   const handleOptionClick = (answer) => {
      handleAnswer(question.id, answer);
      if (currentQuestion < questions.length - 1) {
         setCurrentQuestion(currentQuestion + 1);
      } else {
         nextStep();
      }
   };

   return (
      <div className="container my-5">
         <h3 className="text-center">{question.text}</h3>
         <div className="d-flex flex-column align-items-center" style={{ minHeight: '60vh' }}>
            {question.options.map((option) => (
               <button
                  key={option.label}
                  onClick={() => handleOptionClick(option.label)}
                  className="btn btn-outline-primary btn-lg w-50 my-2 d-flex align-items-center justify-content-center"
               >
                  <span style={{ marginRight: '10px' }}>{option.icon}</span>
                  {option.label}
               </button>
            ))}
         </div>

         <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />
         <div className="d-flex justify-content-between mt-4">
            {currentQuestion > 0 && (
               <button className="btn btn-secondary" onClick={prevStep}>
                  <FaArrowLeft /> Anterior
               </button>
            )}
            {currentQuestion < questions.length - 1 ? (
               <button className="btn btn-primary" onClick={() => handleOptionClick("Siguiente")}>
                  Siguiente <FaArrowRight />
               </button>
            ) : (
               <button className="btn btn-success" onClick={nextStep}>
                  Ver Resultados
               </button>
            )}
         </div>
      </div>
   );
};

export default QuestionScreen;
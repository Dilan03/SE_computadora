import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [step, setStep] = useState(1); // Controla la etapa de la aplicación
  const [answers, setAnswers] = useState({}); // Almacena las respuestas del usuario

  // Función para avanzar al siguiente paso
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Función para manejar respuestas
  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  // Función para reiniciar el cuestionario
  const restartQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <div className="App">
      {step === 1 && <WelcomeScreen nextStep={nextStep} />}
      {step === 2 && (
        <QuestionScreen
          nextStep={nextStep}
          prevStep={prevStep}
          handleAnswer={handleAnswer}
        />
      )}
      {step === 3 && <ResultScreen answers={answers} restartQuiz={restartQuiz} />}
    </div>
  );
}

export default App;
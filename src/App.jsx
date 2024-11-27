import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import InventoryScreen from './components/InventoryScreen'; // Nuevo componente
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [answers, setAnswers] = useState({}); // Almacena las respuestas del usuario

  // Función para manejar respuestas
  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  // Función para reiniciar el cuestionario
  const restartQuiz = () => {
    setAnswers({});
  };

  return (
    <Router>
      <Routes>
        {/* Pantalla de bienvenida */}
        <Route path="/" element={<WelcomeScreen />} />

        {/* Pantalla de preguntas */}
        <Route
          path="/quiz"
          element={<QuestionScreen handleAnswer={handleAnswer} />}
        />

        {/* Pantalla de resultados */}
        <Route
          path="/results"
          element={<ResultScreen answers={answers} restartQuiz={restartQuiz} />}
        />

        {/* Pantalla de inventario */}
        <Route path="/inventory" element={<InventoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
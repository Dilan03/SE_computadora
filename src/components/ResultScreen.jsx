import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const recommendations = [
   {
      name: "Laptop A",
      image: "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SL1500_.jpg",  // Imagen más pequeña
      description: "Adecuada para diseño gráfico y fácil de transportar.",
      specs: {
         processor: "Intel i7",
         ram: "16GB RAM",
         storage: "512GB SSD",
      },
   },
   {
      name: "Laptop B",
      image: "https://m.media-amazon.com/images/I/71u1JLlgrgL._AC_SL1380_.jpg",
      description: "Perfecta para gaming de alto rendimiento.",
      specs: {
         processor: "AMD Ryzen 7",
         ram: "32GB RAM",
         storage: "1TB SSD",
      },
   },
   {
      name: "Laptop C",
      image: "https://m.media-amazon.com/images/I/61SvEC0nTAL._AC_SL1500_.jpg",
      description: "Ideal para tareas ofimáticas y trabajo diario.",
      specs: {
         processor: "Intel i5",
         ram: "8GB RAM",
         storage: "256GB SSD",
      },
   },
   {
      name: "Computadora D",
      image: "https://m.media-amazon.com/images/I/81jhBeNlXcL._AC_SL1200_.jpg",
      description: "Perfecta para edición de video y multitarea.",
      specs: {
         processor: "AMD Ryzen 9",
         ram: "64GB RAM",
         storage: "2TB SSD",
      },
   },
   {
      name: "Computadora E",
      image: "https://m.media-amazon.com/images/I/61FVIijQp2L._AC_SL1500_.jpg",
      description: "Ultra portátil, ideal para viajes.",
      specs: {
         processor: "Intel i3",
         ram: "4GB RAM",
         storage: "128GB SSD",
      },
   },
];

const ResultScreen = ({ answers, restartQuiz }) => {
   const navigate = useNavigate();
   return (
      <>
         <div className="mt-5"
            style={{
               position: 'aboslute',
               backgroundImage: 'url(https://via.placeholder.com/200)', // URL de la imagen
               backgroundSize: 'cover',
               backgroundPosition: 'bottom right',
            }}>
         </div>
         <Container className="mt-5">
            <h2 className="text-center mb-5">Recomendaciones para ti</h2>
            <Row className="g-5">
               {recommendations.map((item) => (
                  <Col xs={12} md={6} lg={4} key={item.name}>
                     <Card className="shadow-lg border-light rounded-3">
                        <Card.Img variant="top" src={item.image} className="card-img-top rounded-3" />
                        <Card.Body>
                           <Card.Title className="text-center text-primary">{item.name}</Card.Title>
                           <Card.Text className="text-muted">{item.description}</Card.Text>
                           <Card.Text className="font-weight-bold">
                              <strong>Especificaciones:</strong>
                              <ul className="list-unstyled">
                                 <li><strong>Procesador:</strong> {item.specs.processor}</li>
                                 <li><strong>RAM:</strong> {item.specs.ram}</li>
                                 <li><strong>Almacenamiento:</strong> {item.specs.storage}</li>
                              </ul>
                           </Card.Text>
                           <div className="text-center">
                              <Button variant="outline-primary" className="px-4 py-2">Ver más</Button>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>
            <div className="text-center mt-4">
               <Button variant="outline-secondary" onClick={() => navigate('/')} className="px-4 py-2">
                  Volver a empezar
               </Button>
            </div>
         </Container>
      </>
   );
};

export default ResultScreen;

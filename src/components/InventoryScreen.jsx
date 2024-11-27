import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryScreen = ({ goToHome }) => {
   const navigate = useNavigate();
   const [showModal, setShowModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [newProduct, setNewProduct] = useState({
      name: '',
      specs: '',
      price: '',
      stock: '',
   });
   const [editProduct, setEditProduct] = useState(null);

   const [computers, setComputers] = useState([
      { id: 1, name: 'Laptop Gamer X', specs: 'Intel i7, 16GB RAM, 512GB SSD', price: '$1200', stock: 10 },
      { id: 2, name: 'Ultrabook Y', specs: 'Intel i5, 8GB RAM, 256GB SSD', price: '$800', stock: 5 },
      { id: 3, name: 'Workstation Z', specs: 'AMD Ryzen 9, 32GB RAM, 1TB SSD', price: '$2000', stock: 3 },
   ]);

   const handleAddProduct = () => {
      setComputers([
         ...computers,
         {
            id: computers.length + 1,
            name: newProduct.name,
            specs: newProduct.specs,
            price: newProduct.price,
            stock: newProduct.stock,
         },
      ]);
      setShowModal(false);
      setNewProduct({ name: '', specs: '', price: '', stock: '' });
   };

   const handleEditProduct = () => {
      setComputers(
         computers.map((computer) =>
            computer.id === editProduct.id
               ? { ...computer, name: newProduct.name, specs: newProduct.specs, price: newProduct.price, stock: newProduct.stock }
               : computer
         )
      );
      setShowEditModal(false);
      setNewProduct({ name: '', specs: '', price: '', stock: '' });
   };

   const handleDeleteProduct = (id) => {
      setComputers(computers.filter((computer) => computer.id !== id));
   };

   const openEditModal = (product) => {
      setEditProduct(product);
      setNewProduct({ ...product });
      setShowEditModal(true);
   };

   return (
      <div className="p-4" style={{ background: '#f8f9fa', minHeight: '100vh' }}>
         <h1 className="text-center mb-4">Inventario de Computadoras</h1>

         {/* Add Product Button */}
         <div className="mb-4 text-center">
            <Button variant="primary" onClick={() => setShowModal(true)}>Añadir Producto</Button>
         </div>

         {/* Product Table */}
         <Table striped bordered hover responsive>
            <thead>
               <tr>
                  <th>Nombre</th>
                  <th>Especificaciones</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {computers.map((computer) => (
                  <tr key={computer.id}>
                     <td>{computer.name}</td>
                     <td>{computer.specs}</td>
                     <td>{computer.price}</td>
                     <td>{computer.stock}</td>
                     <td>
                        <Button variant="outline-warning" size="sm" onClick={() => openEditModal(computer)}>
                           Editar
                        </Button>
                        <Button variant="outline-danger" size="sm" onClick={() => handleDeleteProduct(computer.id)} className="ms-2">
                           Borrar
                        </Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>

         <div className="text-center mt-4">
            <Button variant="secondary" onClick={() => navigate('/')}>Volver a Inicio</Button>
         </div>

         {/* Modal for adding a new product */}
         <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Añadir Nuevo Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="productName">
                     <Form.Label>Nombre</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del producto"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productSpecs" className="mt-3">
                     <Form.Label>Especificaciones</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Ingrese las especificaciones"
                        value={newProduct.specs}
                        onChange={(e) => setNewProduct({ ...newProduct, specs: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productPrice" className="mt-3">
                     <Form.Label>Precio</Form.Label>
                     <Form.Control
                        type="text"
                        placeholder="Ingrese el precio"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productStock" className="mt-3">
                     <Form.Label>Stock</Form.Label>
                     <Form.Control
                        type="number"
                        placeholder="Ingrese el stock"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                     />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancelar
               </Button>
               <Button variant="primary" onClick={handleAddProduct}>
                  Añadir Producto
               </Button>
            </Modal.Footer>
         </Modal>

         {/* Modal for editing a product */}
         <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group controlId="productName">
                     <Form.Label>Nombre</Form.Label>
                     <Form.Control
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productSpecs" className="mt-3">
                     <Form.Label>Especificaciones</Form.Label>
                     <Form.Control
                        type="text"
                        value={newProduct.specs}
                        onChange={(e) => setNewProduct({ ...newProduct, specs: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productPrice" className="mt-3">
                     <Form.Label>Precio</Form.Label>
                     <Form.Control
                        type="text"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                     />
                  </Form.Group>
                  <Form.Group controlId="productStock" className="mt-3">
                     <Form.Label>Stock</Form.Label>
                     <Form.Control
                        type="number"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                     />
                  </Form.Group>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                  Cancelar
               </Button>
               <Button variant="primary" onClick={handleEditProduct}>
                  Guardar Cambios
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export default InventoryScreen;
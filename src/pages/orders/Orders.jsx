import React, { useState, useEffect } from 'react'; 
import './orders.scss';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";

const Orders = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [savedCards, setSavedCards] = useState([
    { id: 1, number: '**** **** **** 1234', name: 'Visa', expiry: '12/25' },
    
  ]);
  const [newCard, setNewCard] = useState({ number: '', name: '', expiry: '' });
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [orders, setOrders] = useState([
    {
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Réparation d'écran de tablette",
      price: 300,
      client: "Anas Hakimi",
      state: "En attente",
      date: "2024-12-13",
      address: "123 Rue Casablanca, Maroc",  // Nouvelle adresse
    },
    {
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Remplacement d'écran de téléphone mobile",
      price: 199.99,
      client: "Amina Allaoui",
      state: "Terminé",
      date: "2024-06-10",
      address: "456 Rue Rabat, Maroc",  // Nouvelle adresse
    },
    {
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Réparation de batterie de PC portable",
      price: 400,
      client: "Khalid Madane",
      state: "Terminé",
      date: "2024-04-11",
      address: "789 Rue Tanger, Maroc",  // Nouvelle adresse
    },
    {
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Réparation de prise de charge pour téléphone",
      price: 229.99,
      client: "Halima Moussaoui",
      state: "Terminé",
      date: "2024-01-13",
      address: "101 Rue Marrakech, Maroc",  // Nouvelle adresse
    },
    {
      image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Réparation de carte mère de tablette",
      price: 450,
      client: "Omar Bennis",
      state: "Terminé",
      date: "2023-03-14",
      address: "202 Rue Agadir, Maroc",  // Nouvelle adresse
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.state === "En attente" ? { ...order, state: "Validé" } : order
        )
      );
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
    setShowPaymentForm(false);
    setSelectedCard(null);
    setNewCard({ number: '', name: '', expiry: '' });
  };

  const handleStateChange = (newState) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order === selectedOrder ? { ...order, state: newState } : order
      )
    );
  
    if (newState === "Accepté") {
      handleCloseModal();
    }
  
    if (newState === "Payé") {
      handleCloseModal();
    }
  };
  

  const handleDownloadDevis = () => {
    const doc = new jsPDF();
  
    // Ajouter "allofix." dans les 4 coins, avec seulement le point en vert
    const textBeforeDot = 'allofix';  // "allofix" en noir
    const dot = '.';  // Le point, en vert
    const greenColor = [0, 255, 0];  // Couleur verte (RGB)
  
    // Coin supérieur gauche
    doc.setTextColor(0, 0, 0);  // Couleur noire pour "allofix"
    doc.text(textBeforeDot, 10, 10);
  
    doc.setTextColor(greenColor[0], greenColor[1], greenColor[2]);  // Couleur verte pour le point
    doc.text(dot, 25, 10);  // Ajustez la position du point en fonction de votre texte
  
    // Coin supérieur droit
    doc.setTextColor(0, 0, 0);  // Couleur noire pour "allofix"
    doc.text(textBeforeDot, 180, 10);
  
    doc.setTextColor(greenColor[0], greenColor[1], greenColor[2]);  // Couleur verte pour le point
    doc.text(dot, 195, 10);  // Ajustez la position du point
  
    // Coin inférieur gauche
    doc.setTextColor(0, 0, 0);  // Couleur noire pour "allofix"
    doc.text(textBeforeDot, 10, 280);
  
    doc.setTextColor(greenColor[0], greenColor[1], greenColor[2]);  // Couleur verte pour le point
    doc.text(dot, 25, 280);  // Ajustez la position du point
  
    // Coin inférieur droit
    doc.setTextColor(0, 0, 0);  // Couleur noire pour "allofix"
    doc.text(textBeforeDot, 180, 280);
  
    doc.setTextColor(greenColor[0], greenColor[1], greenColor[2]);  // Couleur verte pour le point
    doc.text(dot, 195, 280);  // Ajustez la position du point
  
    // Changer la couleur pour le texte du devis (par défaut en noir)
    doc.setTextColor(0, 0, 0);  // Texte noir
  
    // Le reste de votre code pour générer le devis
    doc.setFontSize(20);
    doc.text("Contrat de réparation ", 20, 20);
  
    doc.setFontSize(12);
    doc.text(`Titre: ${selectedOrder.title}`, 20, 30);
  
    doc.text("Prix de la prestation:", 20, 40);
    doc.text(`Prix HT: ${selectedOrder.price.toFixed(2)} Dh`, 20, 60);
  
    const taxRate = 0.2;
    const taxAmount = selectedOrder.price * taxRate;
    doc.text(`Taxe (20%): ${taxAmount.toFixed(2)} Dh`, 20, 70);
  
    const totalAmount = selectedOrder.price + taxAmount;
    doc.text(`Total TTC: ${totalAmount.toFixed(2)} Dh`, 20, 80);
  
    doc.setLineWidth(0.5);
    doc.line(20, 90, 190, 90);
  
    doc.text("Règle de Facturation:", 20, 100);
    doc.text("Le paiement est non remboursable après la réparation", 20, 110);
    doc.text("Si annulation après le déplacement du réparateur, le frais de déplacement sera déduit", 20, 120);
  
    doc.text(`Client: ${selectedOrder.client}`, 20, 130);
    doc.text(`Signature:  ${selectedOrder.client}`, 20, 140);
  
    doc.text("Réparateur: Ahmed Chami", 130, 130);
    doc.text("Signature: Ahmed Chami", 130, 140);
  
    doc.text(`Etat: ${selectedOrder.state}`, 20, 150);
  
    const now = new Date();
    now.setMinutes(now.getMinutes() + 2);
    const timestamp = now.toLocaleString();
  
    doc.text(`Date: ${timestamp}`, 20, 160);
  
    doc.save(`${selectedOrder.title}_devis.pdf`);
  };
  
  const handlePayment = () => {
    if (selectedCard || newCard.number) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        handleStateChange("Payé");
      }, 3000);
    } else {
      alert("Veuillez sélectionner ou ajouter une carte pour continuer.");
    }
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Mes réparations</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Prestation</th>
              <th>Prix</th>
              <th>Réparateur</th>
              <th>Etat</th>
              <th>Date</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={order.image} alt={order.title} className="image" />
                </td>
                <td>{order.title}</td>
                <td>{(order.price * 1.2).toFixed(2)} Dh</td>
                <td>{order.client}</td>
                <td>{order.state}</td>
                <td>{order.date}</td>
                
                <td>
                  {['Validé', 'Terminé', 'Accepté', 'Payé'].includes(order.state) && (
                    <button onClick={() => handleOpenModal(order)}>Voir Devis</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <h4>Devis pour {selectedOrder.title}</h4>
            
            
            <p><strong>Prix :</strong> {(selectedOrder.price * 1.2).toFixed(2)} Dh</p>
            <p><strong>Etat :</strong> {selectedOrder.state}</p>

            {selectedOrder.state === "Validé" && (
              <button onClick={() => handleStateChange("Accepté")}>Accepter</button>
            )}

            {selectedOrder.state === "Accepté" && !showPaymentForm && (
              <button onClick={() => setShowPaymentForm(true)}>Payer</button>
            )}

            {showPaymentForm && !isLoading && (
              <div className="payment-form">
                <div className="saved-cards">
                  <h4>Cartes enregistrées</h4>
                  {savedCards.map((card) => (
                    <div key={card.id}>
                      <input
                        type="radio"
                        name="card"
                        value={card.id}
                        onChange={() => setSelectedCard(card)}
                      />
                      <label>{card.name} - {card.number} (Expire : {card.expiry})</label>
                    </div>
                  ))}
                </div>

                <p>Ajouter une nouvelle carte</p>
                <input
                  type="text"
                  placeholder="Numéro de carte"
                  value={newCard.number}
                  onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Nom sur la carte"
                  value={newCard.name}
                  onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Date d'expiration (MM/AA)"
                  value={newCard.expiry}
                  onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                />

                <button onClick={handlePayment}>Confirmer le paiement</button>
               
              </div>
            )}
            {isLoading && <div className="loader"></div>}

            {['Payé', 'Terminé'].includes(selectedOrder.state) && (
              <button onClick={handleDownloadDevis}>Télécharger le Devis</button>
            )}
            <button onClick={handleCloseModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;

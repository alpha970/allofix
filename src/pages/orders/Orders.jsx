import React from 'react';
import './orders.scss';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  const currentUser = {
    id: 1,
    username: "Anas",
    isSeller: true,
  };

  const handleClick = () => {
    navigate('/messages');
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Historiques de réparation</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Titre</th>
              <th>Prix (Dh)</th>
              {<th>{currentUser.isSeller ? "Client" : "Vendeur"}</th>}
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Réparation tablette"
                />
              </td>
              <td>Réparation d'écran de tablette</td>
              <td>300</td>
              <td>Anas Hakimi</td>
              <td>
                <img className="message" src="./img/message.png" alt="Message" onClick={handleClick} />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Réparation téléphone"
                />
              </td>
              <td>Remplacement d'écran de téléphone mobile</td>
              <td>199.<sup>99</sup></td>
              <td>Amina Allaoui</td>
              <td>
                <img className="message" src="./img/message.png" alt="Message" onClick={handleClick} />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Réparation PC"
                />
              </td>
              <td>Réparation de batterie de PC portable</td>
              <td>400</td>
              <td>Khalid Madane</td>
              <td>
                <img className="message" src="./img/message.png" alt="Message" onClick={handleClick} />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Réparation téléphone"
                />
              </td>
              <td>Réparation de prise de charge pour téléphone</td>
              <td>229<sup>99</sup></td>
              <td>Halima Moussaoui</td>
              <td>
                <img className="message" src="./img/message.png" alt="Message" onClick={handleClick} />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Réparation tablette"
                />
              </td>
              <td>Réparation de carte mère de tablette</td>
              <td>450</td>
              <td>Omar Bennis</td>
              <td>
                <img className="message" src="./img/message.png" alt="Message" onClick={handleClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

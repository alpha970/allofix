import React from 'react'
import './orders.scss'
import { useNavigate } from 'react-router-dom';
const Orders = () => {
  const navigate = useNavigate();
  const currentUser = {
    id: 1,
    username: "Anas",
    isSeller: true,
  };
  const handleClick = () => {
    navigate('/message/12')
  }
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Commandes</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Titre</th>
            <th>Prix (Dh)</th>
            {<th>{currentUser.isSeller ? "Client" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image" 
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Installation d'un tableau électrique</td>
            <td>59.<sup>99</sup></td>
            <td>Anas Hakimi</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image" onClick={handleClick}
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Dépannage moteur industriel</td>
            <td>79.<sup>99</sup></td>
            <td>Amina Allaoui</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              
              <img
                className="image" onClick={handleClick}
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Réparation de câblage</td>
            <td>110.<sup>99</sup></td>
            <td>Khalid Madane</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image" onClick={handleClick}
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Remplacement éclairage cuisine</td>
            <td>39.<sup>99</sup></td>
            <td>Halima Moussaoui</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr>
          {/* <tr>
            <td>
              <img
                className="image" onClick={handleClick}
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>119.<sup>99</sup></td>
            <td>Yoshi Tannamuri</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr> */}
          {/* <tr>
            <td>
              <img
                className="image" onClick={handleClick}
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>49.<sup>99</sup></td>
            <td>Giovanni Rovelli</td>
            <td>
              <img className="message" src="./img/message.png" alt="" onClick={handleClick} />
            </td>
          </tr> */}
        </table>
      </div>
    </div>
  )
}

export default Orders

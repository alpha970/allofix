import React from 'react'
import './messages.scss'
import { Link } from 'react-router-dom';
const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Halima",
    isSeller: true,
  };

  const message = `Mon ordinateur est tombé en panne et je dois absolument le faire réparer avant demain..`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Client" : "Seller"}</th>
            <th>Dernier Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Youness Hakimi</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>il y a 1 heure</td>
            <td>
              <button>Marquer comme lu</button>
            </td>
          </tr>
          <tr className="active">
            <td>Ali Kassimi</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>il y a 2 heures</td>
            <td>
              <button>Marquer comme lu</button>
            </td>
          </tr>
          <tr>
            <td>Amin Nassim</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>il y a 1 jour</td>
          </tr>
          <tr>
            <td>Said kasbi </td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>il y a 2 jours</td>
          </tr>
          <tr>
            <td>Khadija abili</td>
            <td>{message.substring(0, 100)}</td>
            <td>il y a 1 semaine</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages

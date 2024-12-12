import React from 'react';
import './Profile.scss';

const Profile = () => {
    // Exemple de données utilisateur. À remplacer par des données réelles via une API.
    const user = {
        name: "Alpha Kaba",
        email: "alpha.kaba@gmail.com",
        phone: "+212 6 43 53 43 78",
        avatar: "https://via.placeholder.com/150",
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.avatar} alt="User Avatar" className="avatar" />
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
            <div className="profile-details">
                <h2>Détails du profil</h2>
                <ul>
                    <li><strong>Nom :</strong> {user.name}</li>
                    <li><strong>Email :</strong> {user.email}</li>
                    <li><strong>Téléphone :</strong> {user.phone}</li>
                </ul>
            </div>
            <div className="profile-actions">
                <button className="edit-btn">Modifier le profil</button>
                <button className="logout-btn">Déconnexion</button>
            </div>
        </div>
    );
};

export default Profile;

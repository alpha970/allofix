import React, { useState } from 'react';
import './Messages.scss';

const Messages = () => {
    // Liste d'exemple des contacts et messages. Remplacez par vos données réelles.
    const contacts = [
        { id: 1, name: 'Youssef Chraibi', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/98CC/production/_131761193_1f064d43-afea-4dd9-8743-57e979a4b18b.jpg.webp", },
        { id: 2, name: 'Fatima Zahra Benslimane', avatar: "https://static.vecteezy.com/ti/photos-gratuite/p1/16852270-reparation-et-mise-a-niveau-du-telephone-mobile-de-l-electronique-du-materiel-informatique-et-du-concept-technologique-photo.jpg" },
        { id: 3, name: 'Rachid Boukhari', avatar: "https://highservice.ma/wp-content/uploads/2024/02/reparation-electronique-indusrtrielle-.jpg" },
    ];

    const messagesData = {
        1: [{ sender: 'Youssef Chraibi', text: 'Salam, comment ça va ?', time: '10:00 AM' }],
        2: [
            { sender: 'Fatima Zahra Benslimane', text: 'Salam, tu es disponible ?', time: '09:00 AM' },
            { sender: 'Moi', text: 'Oui, bien sûr.', time: '09:15 AM' },
        ],
        3: [{ sender: 'Rachid Boukhari', text: 'Bonjour, j’ai une question.', time: '11:00 AM' }],
    };

    // Initialise avec le premier contact.
    const [selectedContact, setSelectedContact] = useState(contacts[0]?.id || null);

    return (
        <div className="messages-container">
            {/* Liste des contacts */}
            <div className="contacts-list">
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className={`contact-item ${selectedContact === contact.id ? 'active' : ''}`}
                        onClick={() => setSelectedContact(contact.id)}
                    >
                        <img src={contact.avatar} alt={contact.name} className="avatar" />
                        <span className="contact-name">{contact.name}</span>
                    </div>
                ))}
            </div>

            {/* Zone d'échange */}
            <div className="chat-area">
                {selectedContact ? (
                    <>
                        <div className="chat-header">
                            <h3>{contacts.find((c) => c.id === selectedContact)?.name}</h3>
                        </div>
                        <div className="chat-messages">
                            {messagesData[selectedContact]?.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.sender === 'Moi' ? 'outgoing' : 'incoming'}`}
                                >
                                    <span className="message-text">{msg.text}</span>
                                    <span className="message-time">{msg.time}</span>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input">
                            <input type="text" placeholder="Écrire un message..." />
                            <button>Envoyer</button>
                        </div>
                    </>
                ) : (
                    <div className="no-chat-selected">Sélectionnez un contact pour afficher les messages.</div>
                )}
            </div>
        </div>
    );
};

export default Messages;

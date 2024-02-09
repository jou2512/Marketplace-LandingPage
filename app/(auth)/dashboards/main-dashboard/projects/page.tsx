"use client";

import React, { useState } from 'react';

type Card = {
    id: number;
    title: string;
};

function Projects() {
    const [cards, setCards] = useState<Card[]>([
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        // ... more cards ...
    ]);
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [isEditing, setEditing] = useState<boolean>(false);

    const toggleSelectCard = (id: number) => {
        if (!isEditing) return;
        setSelectedCards(prev =>
            prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
        );
    };

    const deleteSelectedCards = () => {
        setCards(prev => prev.filter(card => !selectedCards.includes(card.id)));
        setSelectedCards([]);
        setEditing((prev) => !prev);
    };

    const toggleEditing = () => {
        setEditing(prev => !prev);
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => toggleSelectCard(card.id)}
                        className={`p-4 border ${
                            selectedCards.includes(card.id) ? "bg-blue-200" : ""
                        } ${isEditing ? "cursor-pointer" : ""}`}
                    >
                        {card.title}
                    </div>
                ))}
            </div>
            <button onClick={toggleEditing}>Edit Cards</button> <br />
            {isEditing ? <button onClick={deleteSelectedCards}>Delete Selected Cards</button> : null}
        </div>
    );
    }

export default Projects;
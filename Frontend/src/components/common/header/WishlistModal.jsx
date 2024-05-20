import React from "react";
import "./WishlistModal.css"; // Add your styling here

const WishlistModal = ({ wishlist, onClose }) => {
    return (
        <div className="wishlist-modal-overlay">
            <div className="wishlist-modal">
                <div class="wishlist-modal-header">
                    <h2>Wishlist</h2>
                    <button class="btnx" onClick={onClose}>
                        &times;
                    </button>

                </div>
                <div className="wishlist-items">
                    {wishlist.length === 0 ? (
                        <p>No items in wishlist</p>
                    ) : (
                        wishlist.map((item, index) => (
                            <div key={index} className="wishlist-item">
                                <img src={item.cover} alt={item.name} />
                                <div className="wishlist-item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.location}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default WishlistModal;
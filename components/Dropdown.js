import React, { useState } from 'react';

// Assuming playlists is an array of objects with 'id' and 'title' properties
const Dropdown = ({ playlists, onSelect }) => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleSelectChange = (event) => {
        const selectedId = parseInt(event.target.value);
        setSelectedItemId(selectedId);
        onSelect(selectedId); // Pass selected ID to the parent component
    };

    return (
        <div className="
                
        "
        >
            <select className="
            cursor-pointer
            flex 
            w-full 
            rounded-md 
            bg-neutral-700
            border
            border-transparent
            px-3 
            py-3 
            text-xl
            disabled:cursor-not-allowed 
            disabled:opacity-50
            focus:outline-none 
                     "
                onChange={handleSelectChange}>
                <option value="">Select a playlist</option>
                {playlists.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;

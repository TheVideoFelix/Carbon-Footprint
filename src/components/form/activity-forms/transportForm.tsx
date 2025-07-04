import React from 'react';

const TransportForm = () => {
    return (
        <>
            <div>
                <label htmlFor="transport-type" className="block text-lime-900 font-semibold mb-2">Type</label>
                <select
                    id="transport-type"
                    className="w-full p-3 rounded-lg border border-lime-900/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-900"
                >
                    <option>Car (Gasoline)</option>
                    <option>Bus</option>
                    <option>Train</option>
                    <option>Bicycle</option>
                </select>
            </div>
            <div>
                <label htmlFor="distance" className="block text-lime-900 font-semibold mb-2">Distance (km)</label>
                <input
                    type="number"
                    id="distance"
                    placeholder="e.g., 25"
                    className="w-full p-3 rounded-lg border border-lime-900/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-lime-900"
                />
            </div>
        </>
    );
};

export default TransportForm;
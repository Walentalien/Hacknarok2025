
import { useState } from 'react';

export default function Rating({score}) {
    return (
    <div className="flex items-center gap-2 ">
        <button className="px-2 py-1 hover:bg-gray-100 transition-colors bg-green-700">+</button>
        <span className="text-gray-600">{score}</span>
        <button className="px-2 py-1 hover:bg-gray-100 transition-colors bg-red-700">-</button>
    </div>);
}


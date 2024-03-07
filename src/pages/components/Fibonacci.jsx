import React, { useState } from 'react';

function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;

    for (let i = 0; a <= numero; i++) {
        if (a === numero) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

export default function FibonacciChecker() {
    const [inputNumero, setInputNumero] = useState('');
    const [resultado, setResultado] = useState('');

    const handleVerificar = () => {
        const numero = parseInt(inputNumero);
        if (isNaN(numero)) {
            setResultado('Por favor, insira um número válido.');
        } else {
            if (verificaSequenciaFibonacci(numero)) {
                setResultado(`${numero} pertence à sequência de Fibonacci.`);
            } else {
                setResultado(`${numero} não pertence à sequência de Fibonacci.`);
            }
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <label htmlFor="numero" className="block text-lg font-bold mb-2">Digite um número:</label>
            <input
                className="border-none bg-gray-200 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                id="numero"
                value={inputNumero}
                onChange={(e) => setInputNumero(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-blue-600 transition duration-300"
                onClick={handleVerificar}
            >
                Verificar
            </button>
            <p className="text-lg mt-4">{resultado}</p>
        </div>
    );
}



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
        <div>
            <label htmlFor="numero">Digite um número:</label>
            <input className={`border-none`}
                type="number"
                id="numero"
                value={inputNumero}
                onChange={(e) => setInputNumero(e.target.value)}
            />
            <button className={`
                cursor-pointer
                border-blue-700
            `}
                    onClick={handleVerificar}>Verificar</button>
            <p>{resultado}</p>
        </div>
    );
}



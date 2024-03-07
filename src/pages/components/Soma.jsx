export default function Soma(props) {
    function soma() {
        const indice = 13
        let soma = 0

        for (let K = 1; K <= indice; K++) {
            soma += K;
        }

        return soma;
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-lg font-bold mb-2">Resultado da soma:</p>
            <p className="text-xl">{soma()}</p>
        </div>
    );
}
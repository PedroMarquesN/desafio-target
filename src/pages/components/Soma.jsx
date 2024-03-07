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
        <div>
            <p>Resultado da soma: {soma()}</p>
        </div>
    );
}
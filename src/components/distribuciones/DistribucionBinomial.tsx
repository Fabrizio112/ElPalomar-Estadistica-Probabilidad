function DistribucionBinomial() {
    return (<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-purple-800">🎯 Distribución Binomial</h4>
        <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-gray-700 mb-2"><strong>Escenario:</strong> ¿Cuál es la probabilidad de que en una muestra de 10 socios, exactamente 5 sean mujeres?</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">n (tamaño)</div>
                    <div className="text-xl font-bold text-purple-600">10</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">p (probabilidad)</div>
                    <div className="text-xl font-bold text-purple-600">{(47 / 93).toFixed(4)}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">P(X = 5)</div>
                    <div className="text-xl font-bold text-purple-600">
                        {(() => {
                            const n = 10, k = 5, p = 47 / 93;
                            const comb = (n: number, k: number) => {
                                let result = 1;
                                for (let i = 1; i <= k; i++) {
                                    result = result * (n - k + i) / i;
                                }
                                return result;
                            };
                            return (comb(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k)).toFixed(4);
                        })()}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default DistribucionBinomial;
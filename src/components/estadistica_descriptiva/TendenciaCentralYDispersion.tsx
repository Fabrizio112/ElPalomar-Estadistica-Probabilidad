import type { StatsType } from "../../types";

type TendenciaCentralYDispersionType = {
    stats: StatsType
}


function TendenciaCentralYDispersion({ stats }: TendenciaCentralYDispersionType) {
    return (<div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">📈 Medidas de Tendencia Central y Dispersión</h3>
        <div className="grid grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-700">Tendencia Central</h4>
                <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Media (μ):</span>
                        <span className="font-bold text-blue-600">{stats.media.toFixed(2)} años</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Mediana:</span>
                        <span className="font-bold text-green-600">{stats.mediana} años</span>
                    </div>
                    <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="font-medium">Moda:</span>
                        <span className="font-bold text-purple-600">{stats.moda} años</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-3 text-orange-700">Dispersión</h4>
                <div className="space-y-2">
                    <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium">Varianza (σ²):</span>
                        <span className="font-bold text-orange-600">{stats.varianza.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Desv. Estándar (σ):</span>
                        <span className="font-bold text-red-600">{stats.desvStd.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                        <span className="font-medium">Rango:</span>
                        <span className="font-bold text-pink-600">{stats.rango} años</span>
                    </div>
                    <div className="flex justify-between p-3 bg-indigo-50 rounded-lg">
                        <span className="font-medium">Q1 - Q3:</span>
                        <span className="font-bold text-indigo-600">{stats.q1} - {stats.q3}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default TendenciaCentralYDispersion;
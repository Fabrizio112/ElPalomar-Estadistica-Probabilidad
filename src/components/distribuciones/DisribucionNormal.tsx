import type { StatsType } from "../../types";

type DistribucionNormalProps = {
    stats: StatsType
}
function DistribucionNormal({ stats }: DistribucionNormalProps) {
    return (<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-blue-800">📈 Distribución Normal de Edades</h4>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">Media (μ)</div>
                <div className="text-2xl font-bold text-blue-600">{stats.media.toFixed(2)}</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">Desv. Estándar (σ)</div>
                <div className="text-2xl font-bold text-blue-600">{stats.desvStd.toFixed(2)}</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">Rango 68%</div>
                <div className="text-lg font-bold text-blue-600">{(stats.media - stats.desvStd).toFixed(1)} - {(stats.media + stats.desvStd).toFixed(1)}</div>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700"><strong>Interpretación:</strong> Aproximadamente el 68% de los socios tienen entre {(stats.media - stats.desvStd).toFixed(1)} y {(stats.media + stats.desvStd).toFixed(1)} años.</p>
        </div>
    </div>);
}

export default DistribucionNormal;
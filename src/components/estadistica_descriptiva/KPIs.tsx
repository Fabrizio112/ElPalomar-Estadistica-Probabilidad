import type { StatsType } from "../../types";

type KPIsProps = {
    stats: StatsType
}

function KPIs({ stats }: KPIsProps) {
    return (<div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Total Socios</div>
            <div className="text-3xl font-bold text-blue-600">93</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Edad Media</div>
            <div className="text-3xl font-bold text-green-600">{stats.media.toFixed(2)}</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Mediana</div>
            <div className="text-3xl font-bold text-purple-600">{stats.mediana}</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-sm text-gray-600 mb-1">Desv. Estándar</div>
            <div className="text-3xl font-bold text-orange-600">{stats.desvStd.toFixed(2)}</div>
        </div>
    </div>
    );
}

export default KPIs;
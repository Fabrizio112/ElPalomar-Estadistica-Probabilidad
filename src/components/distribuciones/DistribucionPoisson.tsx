import type { TurnoDataType } from "../../types";

type DistribucionPoissonType = {
    turnoData: TurnoDataType[]
}

function DistribucionPoisson({ turnoData }: DistribucionPoissonType) {
    const registrosMatutinos = (turnoData?.[0]?.value || 0) as number;
    const tasaPromedio = registrosMatutinos / 7;
    return (<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-green-800">⚡ Distribución Poisson</h4>
        <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700 mb-2"><strong>Escenario:</strong> Llegadas promedio de socios al gimnasio en horario matutino</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">λ (tasa promedio)</div>
                    <div className="text-xl font-bold text-green-600">{tasaPromedio.toFixed(2)} socios/hora</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Registros Matutinos</div>
                    <div className="text-xl font-bold text-green-600">{registrosMatutinos}</div>
                </div>
            </div>
        </div>
    </div>);
}

export default DistribucionPoisson;
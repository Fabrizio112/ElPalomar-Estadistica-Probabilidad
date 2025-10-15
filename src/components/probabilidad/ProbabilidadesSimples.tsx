import type { DeporteDataType } from "../../types";

type ProbabilidadesSimplesProps = {
    deporteData: DeporteDataType[]
}


function ProbabilidadesSimples({ deporteData }: ProbabilidadesSimplesProps) {
    const gimnasio = (deporteData.find(d => d.name === 'Gimnasio')?.value as number ?? 0);
    const probGimnasio = gimnasio / 93;
    return (<div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-blue-800">Probabilidades Simples</h4>
        <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">P(Socio sea Masculino)</div>
                <div className="text-2xl font-bold text-blue-600">{(46 / 93).toFixed(4)} = {((46 / 93) * 100).toFixed(2)}%</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">P(Socio sea Femenino)</div>
                <div className="text-2xl font-bold text-pink-600">{(47 / 93).toFixed(4)} = {((47 / 93) * 100).toFixed(2)}%</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">P(Práctica Gimnasio)</div>
                <div className="text-2xl font-bold text-green-600">{probGimnasio.toFixed(4)}</div>
            </div>
        </div>
    </div>);
}

export default ProbabilidadesSimples;
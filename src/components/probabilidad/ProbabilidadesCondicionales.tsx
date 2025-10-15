import type { RegistrosType, SociosType } from "../../types";

type ProbabilidadesCondicionalesProps = {
    registros: RegistrosType[],
    socios: SociosType[]
}

function ProbabilidadesCondicionales({ registros, socios }: ProbabilidadesCondicionalesProps) {
    return (<div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
        <h4 className="text-xl font-bold mb-4 text-purple-800">Probabilidades Condicionales</h4>
        <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">P(Turno Mañana | Femenino)</div>
                <div className="text-2xl font-bold text-purple-600">
                    {(() => {
                        const femRegistros = registros.filter(r => {
                            const s = socios.find(so => so.id === r.socio);
                            return s && s.sexo === 'F';
                        });
                        const femManana = femRegistros.filter(r => r.turno === 'M').length;
                        return (femManana / femRegistros.length).toFixed(4);
                    })()}
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-sm text-gray-600">P(Yoga ∩ Noche)</div>
                <div className="text-2xl font-bold text-indigo-600">
                    {(() => {
                        const yogaNoche = registros.filter(r => r.deporte === 6 && r.turno === 'N').length;
                        return (yogaNoche / registros.length).toFixed(4);
                    })()}
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProbabilidadesCondicionales;
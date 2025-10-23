import type { RegistrosType, SociosType } from "../../types";

type TablaContingenciaSTProps = {
    registros: RegistrosType[],
    socios: SociosType[],
}

function TablaContingenciaST({ registros, socios }: TablaContingenciaSTProps) {
    return (<div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 col-span-2">
        <h4 className="text-xl font-bold mb-4 text-green-800">📋 Tabla de Contingencia: Sexo vs Turno</h4>
        <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="p-3 text-left">Sexo / Turno</th>
                        <th className="p-3 text-center">Mañana</th>
                        <th className="p-3 text-center">Tarde</th>
                        <th className="p-3 text-center">Noche</th>
                        <th className="p-3 text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        type Sexo = 'M' | 'F';
                        type Turno = 'M' | 'T' | 'N';
                        const tabla: Record<Sexo, Record<Turno, number>> = { M: { M: 0, T: 0, N: 0 }, F: { M: 0, T: 0, N: 0 } };

                        registros.forEach(r => {
                            const s = socios.find(so => so.id === r.socio);
                            if (s) tabla[s.sexo as Sexo][r.turno as Turno]++;
                        });
                        const totales = {
                            M: tabla.M.M + tabla.F.M,
                            T: tabla.M.T + tabla.F.T,
                            N: tabla.M.N + tabla.F.N
                        };
                        const filasData = (['M', 'F'] as const).map((sexo, idx) => (
                            <>                            <tr key={sexo} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="p-3 font-semibold">{sexo === 'M' ? 'Masculino' : 'Femenino'}</td>
                                <td className="p-3 text-center">{tabla[sexo].M}</td>
                                <td className="p-3 text-center">{tabla[sexo].T}</td>
                                <td className="p-3 text-center">{tabla[sexo].N}</td>
                                <td className="p-3 text-center font-bold">{tabla[sexo].M + tabla[sexo].T + tabla[sexo].N}</td>
                            </tr>
                            </>

                        ));
                        return (
                            <>
                                {filasData}
                                <tr className="bg-green-100 font-bold">
                                    <td className="p-3">Total</td>
                                    <td className="p-3 text-center">{totales.M}</td>
                                    <td className="p-3 text-center">{totales.T}</td>
                                    <td className="p-3 text-center">{totales.N}</td>
                                    <td className="p-3 text-center">{registros.length}</td>
                                </tr>
                            </>)
                    })()}

                </tbody>
            </table>
        </div>
    </div>);
}

export default TablaContingenciaST;
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TurnoDataType } from "../../../types";
type GraficoTurnosProps = {
    turnoData: TurnoDataType[]
}

function GraficoTurnos({ turnoData }: GraficoTurnosProps) {
    return (<div className="bg-white rounded-xl shadow-lg p-6 col-span-2">
        <h3 className="text-xl font-bold mb-4 text-gray-800">🕐 Preferencia de Turnos</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={turnoData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6">
                    {turnoData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={['#f59e0b', '#06b6d4', '#8b5cf6'][index]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>);
}

export default GraficoTurnos;
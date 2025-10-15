import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { DeporteDataType } from "../../../types";
import { COLORS } from "../../../helpers";

type GraficoBarrasDeporteType = {
    deporteData: DeporteDataType[]
}

function GraficoBarrasDeporte({ deporteData }: GraficoBarrasDeporteType) {
    return (<div className="bg-white rounded-xl shadow-lg p-6 col-span-2">
        <h3 className="text-xl font-bold mb-4 text-gray-800">🏆 Deportes Más Populares</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deporteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981">
                    {deporteData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>);
}

export default GraficoBarrasDeporte;
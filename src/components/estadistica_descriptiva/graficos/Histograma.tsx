import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { HistogramaDataType } from "../../../types";

type HistogramaProps = {
    histogramaData: HistogramaDataType[]
}

type HistogramaDataConPorcentaje = HistogramaDataType & {
    porcentaje: string | number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        payload: HistogramaDataConPorcentaje;
    }>;
}

function Histograma({ histogramaData }: HistogramaProps) {
    const total = histogramaData.reduce((sum, item) => sum + item.count, 0);

    const dataConPorcentajes: HistogramaDataConPorcentaje[] = histogramaData.map(item => ({
        ...item,
        porcentaje: total > 0 ? ((item.count / total) * 100).toFixed(1) : 0
    }));

    const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
                    <p className="font-semibold">{data.rango}</p>
                    <p className="text-blue-600">
                        {payload[0].value}% ({data.count} personas)
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">📊 Distribución de Edades</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataConPorcentajes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rango" />
                    <YAxis
                        label={{ value: 'Porcentaje (%)', angle: -90, position: 'insideLeft' }}
                        domain={[0, 50]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="porcentaje" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Histograma;
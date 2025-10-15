import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, type PieLabelRenderProps } from "recharts";
import type { SexoDataType } from "../../../types";
type GraficoPieSexoProps = {
    sexoData: SexoDataType[]
}

function GraficoPieSexo({ sexoData }: GraficoPieSexoProps) {
    return (<div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">👥 Distribución por Sexo</h3>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={sexoData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }: PieLabelRenderProps) => {
                        const p = (percent as number | undefined) ?? 0;
                        return `${name ?? "Desconocido"}: ${(p * 100).toFixed(0)}%`;
                    }}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {sexoData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={['#3b82f6', '#ec4899'][index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
    );
}

export default GraficoPieSexo;
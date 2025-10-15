import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { HistogramaDataType } from "../../../types";

type HistogramaProps = {
    histogramaData: HistogramaDataType[]
}

function Histograma({ histogramaData }: HistogramaProps) {
    return (<div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">📊 Distribución de Edades</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={histogramaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rango" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
        </ResponsiveContainer>
    </div>);
}

export default Histograma;
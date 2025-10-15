import { useMemo } from "react";
import type { RegistrosType, SociosType } from "../types";
import type { deportes } from "../helpers/data";

type useDataProps = {
    registros: RegistrosType[],
    socios: SociosType[],
    deportes: typeof deportes

}
type ChartData = {
    name: string,
    value: number
}

export const useData = ({ registros, socios, deportes }: useDataProps) => {

    const deporteData: ChartData[] = useMemo(() => {
        const counts: Record<string, number> = {};
        registros.forEach(r => {
            const d = deportes[r.deporte];
            counts[d] = (counts[d] || 0) + 1;
        });
        return Object.entries(counts).map(([name, value]) => ({ name, value }));
    }, [registros, deportes]);
    const turnoData: ChartData[] = useMemo(() => {
        type Turno = 'M' | 'T' | 'N';
        const counts: Record<Turno, number> = { M: 0, T: 0, N: 0 } as const;
        registros.forEach(r => counts[r.turno as Turno]++);
        return [
            { name: "Mañana", value: counts.M },
            { name: "Tarde", value: counts.T },
            { name: "Noche", value: counts.N }
        ];
    }, [registros]);
    const sexoData: ChartData[] = useMemo(() => {
        type Sexo = 'M' | 'F';
        const counts = { M: 0, F: 0 };
        socios.forEach(s => counts[s.sexo as Sexo]++);
        return [
            { name: "Masculino", value: counts.M },
            { name: "Femenino", value: counts.F }
        ];
    }, [socios]);
    const histogramaData = useMemo(() => {
        const bins = [
            { rango: "18-22", min: 18, max: 22, count: 0 },
            { rango: "23-27", min: 23, max: 27, count: 0 },
            { rango: "28-32", min: 28, max: 32, count: 0 },
            { rango: "33-37", min: 33, max: 37, count: 0 },
            { rango: "38-42", min: 38, max: 42, count: 0 },
            { rango: "43+", min: 43, max: 100, count: 0 }
        ];
        socios.forEach(s => {
            const bin = bins.find(b => s.edad >= b.min && s.edad <= b.max);
            if (bin) bin.count++;
        });
        return bins;
    }, [socios]);

    return {
        deporteData,
        turnoData,
        sexoData,
        histogramaData
    }
}
import { useMemo } from "react";
import type { SociosType, StatsType } from "../types";

type useCalculoProps = {
    socios: SociosType[]
}

export const useCalculo = ({ socios }: useCalculoProps) => {

    const stats: StatsType = useMemo(() => {
        const edades = socios.map(s => s.edad);
        const n = edades.length;
        const suma = edades.reduce((a, b) => a + b, 0);
        const media = suma / n;

        const ordenadas = [...edades].sort((a, b) => a - b);
        const mediana = n % 2 === 0
            ? (ordenadas[n / 2 - 1] + ordenadas[n / 2]) / 2
            : ordenadas[Math.floor(n / 2)];

        const frecuencias: Record<number, number> = {};
        edades.forEach(e => frecuencias[e] = (frecuencias[e] || 0) + 1);
        const moda = parseInt(Object.keys(frecuencias).reduce((a, b) =>
            frecuencias[+a] > frecuencias[+b] ? a : b
        ));

        const varianza = edades.reduce((acc, e) => acc + Math.pow(e - media, 2), 0) / n;
        const desvStd = Math.sqrt(varianza);

        const q1 = ordenadas[Math.floor(n * 0.25)];
        const q3 = ordenadas[Math.floor(n * 0.75)];
        const rango = Math.max(...edades) - Math.min(...edades);

        return { media, mediana, moda, varianza, desvStd, q1, q3, rango, min: Math.min(...edades), max: Math.max(...edades) };
    }, [socios]);
    return {
        stats
    }
}


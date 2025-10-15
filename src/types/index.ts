export type SociosType = {
    id: number;
    sexo: string;
    edad: number;
}

export type RegistrosType = {
    id: number;
    socio: number;
    deporte: number;
    horario: number;
    turno: string;
}

export type StatsType = {
    media: number;
    mediana: number;
    moda: number;
    varianza: number;
    desvStd: number;
    q1: number;
    q3: number;
    rango: number;
    min: number;
    max: number;
}

export type HistogramaDataType = {
    rango: string;
    min: number;
    max: number;
    count: number;
}

export type SexoDataType = {
    name: string;
    value: number;
}
export type DeporteDataType = {
    name: string;
    value: unknown;
}
export type TurnoDataType = {
    name: string;
    value: unknown;
}

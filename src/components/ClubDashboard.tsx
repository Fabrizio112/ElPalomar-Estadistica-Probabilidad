import { useState } from 'react';
import Header from './general/Header';
import NavBar from './general/NavBar';
import KPIs from './estadistica_descriptiva/KPIs';
import TendenciaCentralYDispersion from './estadistica_descriptiva/TendenciaCentralYDispersion';
import Histograma from './estadistica_descriptiva/graficos/Histograma';
import GraficoPieSexo from './estadistica_descriptiva/graficos/GraficoPieSexo';
import GraficoBarrasDeporte from './estadistica_descriptiva/graficos/GraficoBarrasDeporte';
import GraficoTurnos from './estadistica_descriptiva/graficos/GraficoTurnos';
import ProbabilidadesSimples from './probabilidad/ProbabilidadesSimples';
import ProbabilidadesCondicionales from './probabilidad/ProbabilidadesCondicionales';
import TablaContingenciaST from './probabilidad/TablaContingenciaST';
import DistribucionNormal from './distribuciones/DisribucionNormal';
import DistribucionBinomial from './distribuciones/DistribucionBinomial';
import DistribucionPoisson from './distribuciones/DistribucionPoisson';
import { useData } from '../hooks/useData';
import { deportes, registros, socios } from '../helpers/data';
import { useCalculo } from '../hooks/useCalculo';

const ClubDashboard = () => {
    const [activeTab, setActiveTab] = useState('descriptiva');
    const { deporteData, histogramaData, sexoData, turnoData } = useData({ deportes: deportes, registros: registros, socios: socios })
    const { stats } = useCalculo({ socios: socios })

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-7xl mx-auto">
                <Header />
                <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
                {activeTab === 'descriptiva' && (
                    <div className="space-y-6">
                        <KPIs stats={stats} />
                        <TendenciaCentralYDispersion stats={stats} />
                        <div className="grid grid-cols-2 gap-6">
                            <Histograma histogramaData={histogramaData} />
                            <GraficoPieSexo sexoData={sexoData} />
                            <GraficoBarrasDeporte deporteData={deporteData} />
                            <GraficoTurnos turnoData={turnoData} />

                        </div>
                    </div>
                )}

                {activeTab === 'probabilidad' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">🎲 Análisis de Probabilidades</h3>

                            <div className="grid grid-cols-2 gap-6">
                                <ProbabilidadesSimples deporteData={deporteData} />
                                <ProbabilidadesCondicionales registros={registros} socios={socios} />
                                <TablaContingenciaST registros={registros} socios={socios} />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'distribuciones' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">📊 Distribuciones de Probabilidad</h3>

                            <div className="space-y-6">
                                <DistribucionNormal stats={stats} />
                                <DistribucionBinomial />
                                <DistribucionPoisson turnoData={turnoData} />

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClubDashboard;
import { Activity, TrendingUp, Users } from "lucide-react";

type NavBarProps = {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>,
    activeTab: string
}

function NavBar({ setActiveTab, activeTab }: NavBarProps) {
    return (<div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
        <div className="flex border-b">
            {[
                { id: 'descriptiva', label: 'Estadística Descriptiva', icon: <TrendingUp className="w-5 h-5" /> },
                { id: 'probabilidad', label: 'Probabilidad', icon: <Activity className="w-5 h-5" /> },
                { id: 'distribuciones', label: 'Distribuciones', icon: <Users className="w-5 h-5" /> }
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-semibold flex items-center justify-center gap-2 transition-all ${activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                >
                    {tab.icon}
                    {tab.label}
                </button>
            ))}
        </div>
    </div>);
}

export default NavBar;
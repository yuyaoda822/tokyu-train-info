import { useState, useEffect } from 'react';
import Header from './components/Header';
import DiagramSelector from './components/DiagramSelector';
import DepartureBoard from './components/DepartureBoard';
import { getScheduleData, isWeekday } from './utils/scheduleLoader';
import { getNextTrains } from './utils/trainFilter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scheduleType, setScheduleType] = useState('auto');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [upTrains, setUpTrains] = useState([]);
  const [downTrains, setDownTrains] = useState([]);

  // ダークモード適用（ルート要素とbodyに適用）
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // 1分ごとに時刻を更新（列車データ更新用）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // 1分ごと

    return () => clearInterval(timer);
  }, []);

  // 列車データを更新
  useEffect(() => {
    const forceWeekday = scheduleType === 'weekday';
    const forceHoliday = scheduleType === 'holiday';
    
    const scheduleData = getScheduleData(forceWeekday, forceHoliday);
    
    const upcomingUpTrains = getNextTrains(scheduleData, 'up', currentTime, 4);
    const upcomingDownTrains = getNextTrains(scheduleData, 'down', currentTime, 4);
    
    setUpTrains(upcomingUpTrains);
    setDownTrains(upcomingDownTrains);
  }, [currentTime, scheduleType]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScheduleChange = (type) => {
    setScheduleType(type);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header isDark={isDarkMode} onToggleDark={handleToggleDarkMode} />
      <DiagramSelector 
        scheduleType={scheduleType} 
        onScheduleChange={handleScheduleChange}
      />
      <DepartureBoard upTrains={upTrains} downTrains={downTrains} />
    </div>
  );
}

export default App;

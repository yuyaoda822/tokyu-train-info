import { useEffect, useState } from 'react';

/**
 * 現在時刻表示コンポーネント
 * 1秒ごとに自動更新
 */
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1秒ごとに更新
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="text-3xl font-bold font-mono tabular-nums text-gray-900 dark:text-white">
      {formatTime(currentTime)}
    </div>
  );
};

export default CurrentTime;

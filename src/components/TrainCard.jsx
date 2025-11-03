import trainTypesData from '../data/train-types.json';
import { getWarningLevel, getWarningColor } from '../utils/timeCalculator';

/**
 * 列車カードコンポーネント
 * 個別の列車情報を表示
 */
const TrainCard = ({ train }) => {
  const trainType = trainTypesData.trainTypes[train.type];
  const warningLevel = getWarningLevel(train.minutesUntil);
  const textColor = getWarningColor(warningLevel);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 transition-all hover:shadow-lg"
         style={{ borderLeftColor: trainType.color }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="px-3 py-1 rounded-full text-white text-sm font-bold"
            style={{ backgroundColor: trainType.color }}
          >
            {trainType.name}
          </span>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            {train.destination}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-2xl font-mono font-bold text-gray-700 dark:text-gray-300">
          {train.time}
        </div>
        <div className={`text-xl font-bold ${textColor}`}>
          あと{train.minutesUntil}分
        </div>
      </div>
    </div>
  );
};

export default TrainCard;

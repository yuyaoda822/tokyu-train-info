import TrainCard from './TrainCard';

/**
 * 方向別列車リストコンポーネント
 */
const DirectionColumn = ({ title, subtitle, trains }) => {
  return (
    <div className="flex-1">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
      
      <div className="space-y-3">
        {trains.length > 0 ? (
          trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              表示する列車がありません
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DirectionColumn;

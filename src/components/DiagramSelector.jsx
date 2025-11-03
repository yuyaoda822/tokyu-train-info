/**
 * ダイヤ選択コンポーネント
 * 平日/休日の手動切替
 */
const DiagramSelector = ({ scheduleType, onScheduleChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">ダイヤ:</span>
          <div className="flex gap-2">
            <button
              onClick={() => onScheduleChange('auto')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scheduleType === 'auto'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              自動
            </button>
            <button
              onClick={() => onScheduleChange('weekday')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scheduleType === 'weekday'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              平日
            </button>
            <button
              onClick={() => onScheduleChange('holiday')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scheduleType === 'holiday'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              休日
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagramSelector;

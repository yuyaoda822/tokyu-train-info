import DirectionColumn from './DirectionColumn';

/**
 * 発車案内板コンポーネント
 * 上り・下りの列車情報を表示
 */
const DepartureBoard = ({ upTrains, downTrains }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DirectionColumn
          title="上り"
          subtitle="渋谷方面"
          trains={upTrains}
        />
        <DirectionColumn
          title="下り"
          subtitle="横浜方面"
          trains={downTrains}
        />
      </div>
    </div>
  );
};

export default DepartureBoard;

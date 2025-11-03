import CurrentTime from './CurrentTime';
import DarkModeToggle from './DarkModeToggle';

/**
 * ヘッダーコンポーネント
 */
const Header = ({ isDark, onToggleDark }) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
            東急線発車案内 - 学芸大学駅
          </h1>
          <div className="flex items-center gap-4">
            <CurrentTime />
            <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

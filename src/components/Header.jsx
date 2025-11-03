import CurrentTime from './CurrentTime';
import DarkModeToggle from './DarkModeToggle';

/**
 * ヘッダーコンポーネント
 */
const Header = ({ isDark, onToggleDark }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            東急線発車案内
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

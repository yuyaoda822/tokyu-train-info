/**
 * 時刻計算ユーティリティ
 * 午前3時を日付境界とする東急線発車案内の時刻処理
 */

/**
 * 現在時刻を取得（午前3時基準の調整済み）
 * @returns {Date} 調整済みの現在時刻
 */
export const getCurrentTime = () => {
  return new Date();
};

/**
 * 時刻文字列（HH:MM）をDateオブジェクトに変換
 * 午前3時を日付境界として処理
 * @param {string} timeString - "HH:MM"形式の時刻文字列
 * @param {Date} baseDate - 基準となる日時
 * @returns {Date} 変換されたDateオブジェクト
 */
export const parseTrainTime = (timeString, baseDate = new Date()) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const currentHour = baseDate.getHours();
  const trainDate = new Date(baseDate);
  
  // 現在時刻と列車時刻の両方を考慮
  // 現在時刻が0-2時台で、列車も0-2時台の場合は同じ日
  // 現在時刻が0-2時台で、列車が3-23時台の場合は前日
  // 現在時刻が3-23時台で、列車が0-2時台の場合は翌日
  // 現在時刻が3-23時台で、列車も3-23時台の場合は同じ日
  
  if (currentHour < 3) {
    // 現在時刻が0-2時台
    if (hours >= 3) {
      // 列車が3-23時台なら前日
      trainDate.setDate(trainDate.getDate() - 1);
    }
    // 列車も0-2時台なら同じ日（何もしない）
  } else {
    // 現在時刻が3-23時台
    if (hours < 3) {
      // 列車が0-2時台なら翌日
      trainDate.setDate(trainDate.getDate() + 1);
    }
    // 列車も3-23時台なら同じ日（何もしない）
  }
  
  trainDate.setHours(hours, minutes, 0, 0);
  return trainDate;
};

/**
 * 基準時刻を午前3時基準に調整
 * 午前0時〜2時59分は前日扱い
 * @param {Date} date - 調整する日時
 * @returns {Date} 調整済みの日時
 */
export const adjustForServiceDay = (date) => {
  const adjusted = new Date(date);
  
  // 午前0時〜2時59分の場合、前日として扱う
  if (adjusted.getHours() < 3) {
    adjusted.setDate(adjusted.getDate() - 1);
  }
  
  return adjusted;
};

/**
 * 発車までの残り時間を分単位で計算
 * @param {Date} departureTime - 発車時刻
 * @param {Date} currentTime - 現在時刻
 * @returns {number} 残り時間（分）
 */
export const getMinutesUntilDeparture = (departureTime, currentTime = new Date()) => {
  const diff = departureTime - currentTime;
  return Math.floor(diff / (1000 * 60));
};

/**
 * 残り時間に応じた警告レベルを取得
 * @param {number} minutes - 残り時間（分）
 * @returns {string} 警告レベル ('safe', 'warning', 'urgent', 'expired')
 */
export const getWarningLevel = (minutes) => {
  if (minutes < 5) return 'expired';
  if (minutes < 15) return 'urgent';
  if (minutes < 30) return 'warning';
  return 'safe';
};

/**
 * 警告レベルに応じた色を取得
 * @param {string} level - 警告レベル
 * @returns {string} Tailwind CSSクラス名
 */
export const getWarningColor = (level) => {
  const colors = {
    safe: 'text-blue-500',
    warning: 'text-orange-500',
    urgent: 'text-red-500',
    expired: 'text-gray-400'
  };
  return colors[level] || colors.safe;
};

/**
 * 警告レベルに応じた背景色を取得（カード用）
 * @param {string} level - 警告レベル
 * @returns {string} Tailwind CSSクラス名
 */
export const getWarningBgColor = (level) => {
  const colors = {
    safe: 'bg-blue-50 dark:bg-blue-900/20',
    warning: 'bg-orange-50 dark:bg-orange-900/20',
    urgent: 'bg-red-50 dark:bg-red-900/20',
    expired: 'bg-gray-50 dark:bg-gray-900/20'
  };
  return colors[level] || colors.safe;
};

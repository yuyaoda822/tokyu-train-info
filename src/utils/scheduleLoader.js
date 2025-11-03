/**
 * ダイヤデータ読み込みユーティリティ
 */

import weekdayData from '../data/trains-weekday.json';
import holidayData from '../data/trains-holiday.json';

/**
 * 指定された日付が平日かどうかを判定
 * @param {Date} date - 判定する日付
 * @returns {boolean} 平日の場合true
 */
export const isWeekday = (date = new Date()) => {
  const day = date.getDay();
  // 0: 日曜日, 6: 土曜日
  return day !== 0 && day !== 6;
};

/**
 * 平日/休日に応じたダイヤデータを取得
 * @param {boolean} forceWeekday - 強制的に平日ダイヤを使用（手動切替用）
 * @param {boolean} forceHoliday - 強制的に休日ダイヤを使用（手動切替用）
 * @returns {Array} 列車データの配列
 */
export const getScheduleData = (forceWeekday = null, forceHoliday = null) => {
  // 手動切替が優先
  if (forceWeekday) {
    return weekdayData.trains;
  }
  if (forceHoliday) {
    return holidayData.trains;
  }
  
  // 自動判定
  return isWeekday() ? weekdayData.trains : holidayData.trains;
};

/**
 * 現在のダイヤ種別を取得
 * @param {boolean} forceWeekday - 強制的に平日ダイヤを使用
 * @param {boolean} forceHoliday - 強制的に休日ダイヤを使用
 * @returns {string} 'weekday' または 'holiday'
 */
export const getScheduleType = (forceWeekday = null, forceHoliday = null) => {
  if (forceWeekday) return 'weekday';
  if (forceHoliday) return 'holiday';
  return isWeekday() ? 'weekday' : 'holiday';
};

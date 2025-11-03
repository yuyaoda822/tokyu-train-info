/**
 * 列車フィルタリング・ソートユーティリティ
 */

import { parseTrainTime, getMinutesUntilDeparture } from './timeCalculator';

/**
 * 方向別に列車をフィルタリング
 * @param {Array} trains - 列車データの配列
 * @param {string} direction - 'up' または 'down'
 * @returns {Array} フィルタリングされた列車データ
 */
export const filterByDirection = (trains, direction) => {
  return trains.filter(train => train.direction === direction);
};

/**
 * 発車時刻でソート（時系列順）
 * @param {Array} trains - 列車データの配列
 * @param {Date} currentTime - 基準時刻
 * @returns {Array} ソートされた列車データ
 */
export const sortByDepartureTime = (trains, currentTime = new Date()) => {
  return trains.sort((a, b) => {
    const timeA = parseTrainTime(a.time, currentTime);
    const timeB = parseTrainTime(b.time, currentTime);
    return timeA - timeB;
  });
};

/**
 * 5分未満の列車を除外
 * @param {Array} trains - 列車データの配列
 * @param {Date} currentTime - 現在時刻
 * @returns {Array} フィルタリングされた列車データ
 */
export const filterOutExpired = (trains, currentTime = new Date()) => {
  return trains.filter(train => {
    const departureTime = parseTrainTime(train.time, currentTime);
    const minutesUntil = getMinutesUntilDeparture(departureTime, currentTime);
    return minutesUntil >= 5;
  });
};

/**
 * 直近N本の列車を取得
 * @param {Array} trains - 列車データの配列
 * @param {number} count - 取得する列車数
 * @returns {Array} 直近N本の列車データ
 */
export const getUpcomingTrains = (trains, count = 4) => {
  return trains.slice(0, count);
};

/**
 * 方向別の次の列車を取得（全処理を統合）
 * @param {Array} allTrains - 全列車データ
 * @param {string} direction - 'up' または 'down'
 * @param {Date} currentTime - 現在時刻
 * @param {number} count - 取得する列車数（デフォルト: 4）
 * @returns {Array} 処理済みの列車データ
 */
export const getNextTrains = (allTrains, direction, currentTime = new Date(), count = 4) => {
  let trains = filterByDirection(allTrains, direction);
  trains = sortByDepartureTime(trains, currentTime);
  trains = filterOutExpired(trains, currentTime);
  trains = getUpcomingTrains(trains, count);
  
  // 各列車に発車時刻と残り時間を追加
  return trains.map(train => ({
    ...train,
    departureTime: parseTrainTime(train.time, currentTime),
    minutesUntil: getMinutesUntilDeparture(
      parseTrainTime(train.time, currentTime),
      currentTime
    )
  }));
};

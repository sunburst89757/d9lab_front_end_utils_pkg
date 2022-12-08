import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
// 数据库时间转化：2022-10-16T04:46:00.949Z
export const transferTime = (time: string) =>
  dayjs(time).format("YYYY-MM-DD HH:mm:ss");
//获取本月第一天时间戳(单位毫秒)
export const getMonthFirstDayms = () => {
  var data = new Date();
  data.setDate(1);
  data.setHours(0);
  data.setSeconds(0);
  data.setMinutes(0);
  return Date.parse(data.toString());
}
//获取本月第一天时间戳(单位秒)
export const getMonthFirstDays = () => {
  var data = new Date();
  data.setDate(1);
  data.setHours(0);
  data.setSeconds(0);
  data.setMinutes(0);
  return Date.parse(data.toString()) / 1000;
}
//获取当天零点时间(毫秒)
export const getTodayms = () => {
  return Date.parse(new Date(new Date().setHours(0, 0, 0, 0)).toString())
}
//获取当天零点时间(秒)
export const getTodays = () => {
  return Date.parse(new Date(new Date().setHours(0, 0, 0, 0)).toString()) / 1000
}
//获取本周第一天零点时间(毫秒)
export const getThisWeekFirstDayms = () => {
  let today = new Date();
  let day = today.getDay() || 7;
  return Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 - day).toString()) ;
}
//获取本周第一天零点时间(毫秒)
export const getThisWeekFirstDays = () => {
  let today:Date = new Date();
  let day:number = today.getDay() || 7;
  return Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 - day).toString())/1000 ;
}
//获取本年第一天时间(毫秒)
export const getThisYearFirstDayms=()=>{
  let today = new Date();
  today.setDate(1);
  today.setMonth(0);
  today.setHours(0, 0, 0, 0);
  return Date.parse(today.toString()) ;
}
//获取本年第一天时间(秒)
export const getThisYearFirstDays=()=>{
  let today = new Date();
  today.setDate(1);
  today.setMonth(0);
  today.setHours(0, 0, 0, 0);
  return Date.parse(today.toString())/1000 ;
}

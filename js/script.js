const str = "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";

const findDates = function (someText){
  const year = 'year'
  const month = 'month'
  const day = 'day';
  const monthName = 'monthName'

  const monthCount= {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12'
  }

  let newStr = null;

  newStr = str.match(/(\d{4})-(\d{2})-(\d{2})/g).map((item)=>{
    const arr = item.split('-');

    for (let key in monthCount){

      if (arr[1] === monthCount[key]){
        return {
          [day]: arr[2],
          [month]: arr[1],
          [monthName]: key,
          [year]: arr[0]
        }
      }
    }

  })

  newStr.splice(newStr.indexOf(undefined),1)
  return newStr
}

console.log(findDates(str))


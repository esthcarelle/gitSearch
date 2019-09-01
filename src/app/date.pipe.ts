import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let to:Date=new Date(value);
    
    let today:Date = new Date(); //get current date and time
    let toWithNoTime:any=new Date(to.getFullYear(),to.getMonth(),to.getDay());
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime-toWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;
   

    if (dateCounter >= 1 ){
      return dateCounter;
    }else{
      return 0;
    }
  }

}

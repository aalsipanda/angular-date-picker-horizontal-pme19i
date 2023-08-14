import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import moment from 'moment';

/** @title DatePicker by Horizontal virtual scroll */
@Component({
  selector: 'cdk-virtual-scroll-horizontal-example',
  styleUrls: ['cdk-virtual-scroll-horizontal-example.css'],
  templateUrl: 'cdk-virtual-scroll-horizontal-example.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkVirtualScrollHorizontalExample {
  items: any[] = [];
  currentDate = new Date();
  currentMonth = '';
  stopDate = new Date();
  selectedItem = null;

  ngOnInit() {
    // Creating an array with specified date range
    const todaysDate = new Date();
    const startDate = moment(todaysDate).add(7, 'd');
    const endDate = moment(todaysDate).subtract(7, 'd');
    this.loadMoreDates(startDate, endDate);
  }

  private loadMoreDates(startDate, endDate) {
    this.items = this.getDates(startDate, endDate);
  }

  // Common method to create an array of dates
  getDates(startDate: any, stopDate: any) {
    let dateArray = [];
    let currentDate = moment(startDate);
    stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }

  // Get the selected Date
  select(item: any) {
    this.selectedItem = item;
  }

  // Method for changing Month
  changeMonth(e: any) {
    this.currentDate = this.items[e];
    this.currentMonth = new Date(this.currentDate).toLocaleString('default', {
      month: 'short',
    });
  }

  // Method to get the current weekday of the date showon
  returnWeekDay(item: any) {
    return new Date(item).toLocaleDateString('default', { weekday: 'short' });
  }
}

import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FirstDayOfWeek, RangeDate } from '../typings';
import { DropdownModule } from 'ngx-eagle/dropdown';

@Component({
  selector: 'ngx-range-picker',
  standalone: true,
  imports: [FormsModule, DropdownModule, CommonModule],
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.scss'],
  providers: [DatePipe]
})
export class RangePickerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() range: RangeDate = { startDate: null, endDate: null };
  @Input() format: string = 'dd/MM/yyyy';
  @Input() firstDayOfWeek: FirstDayOfWeek = FirstDayOfWeek.Sunday;
  @Input() days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  @Input() months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  @Input() startYear: number = 1900;
  @Input() endYear: number = 2100;
  @Input() todayButton: boolean = true;
  @Input() todayLabel: string = 'Today';
  @Output() rangeChange = new EventEmitter<RangeDate>();

  @ViewChild('startDate') startDate!: ElementRef<HTMLInputElement>;
  @ViewChild('endDate') endDate!: ElementRef<HTMLInputElement>;
  @ViewChild('calendarRef') calendarRef!: ElementRef<HTMLInputElement>;

  calendarWidth: string = '323px';

  showYears = false;
  showMonths = false;

  years: number[] = [];
  calendar: Date[][] = [];
  currentMonth: number;
  currentYear: number;
  displayedDays: string[] = [];

  constructor(private datePipe: DatePipe) {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();    
  }

  ngAfterViewInit(): void {
    this.onResize();
    this.generateCalendar();    
    this.generateYears();
    this.scrollToActiveYear();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calendarWidth = this.calendarRef?.nativeElement.offsetWidth + 'px';
  }

  openChange(open: boolean) {
    if (!open) {
      this.showYears = false;
      this.showMonths = false;
    }
  }

  scrollToActiveYear() {
    setTimeout(() => {
      const activeYearId = `year-${this.currentYear}`;
      const activeButton = document.getElementById(activeYearId);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['range']) {
      this.range = changes['range'].currentValue;
      this.updateEndDateMin();
    }
    if (changes['firstDayOfWeek']) {
      this.updateDisplayedDays();
    }
    this.generateCalendar();
  }

  ngOnInit() {

  }

  setStartDate(dateString: any) {
    const date = this.parseDate(dateString.value);
    if (date) {
      this.range.startDate = date;
      this.startDate.nativeElement.value = this.datePipe.transform(date, this.format) || '';
      this.updateEndDateMin();
    }
  }

  setEndDate(dateString: any) {
    const date = this.parseDate(dateString.value);
    if (date) {
      this.range.endDate = date;
      this.endDate.nativeElement.value = this.datePipe.transform(date, this.format) || '';
    }
  }

  parseDate(dateString: string): Date | null {
    const [day, month, year] = dateString.split('/').map(Number);
    if (day && month && year) {
      return new Date(year, month - 1, day);
    }
    return null; // Retorna null si la fecha es inválida
  }

  generateYears() {
    for (let year = this.endYear; year >= this.startYear; --year) {
      this.years.push(year);
    }
  }

  selectToday(){
    this.range.startDate = new Date();
    this.range.endDate = new Date();
    this.currentMonth = this.range.startDate.getMonth();
    this.currentYear = this.range.startDate.getFullYear();
    this.updateEndDateMin();
    this.scrollToActiveYear();
    this.generateCalendar();
  }

  updateEndDateMin() {
    if (this.range.startDate && this.range.endDate && this.range.startDate > this.range.endDate) {
      this.range.endDate = this.range.startDate;
    }
    this.onRangeChange();
  }

  onRangeChange() {
    if (this.range.startDate && this.range.endDate) {
      const formattedStartDate = this.datePipe.transform(this.range.startDate, this.format);
      const formattedEndDate = this.datePipe.transform(this.range.endDate, this.format);
      this.rangeChange.emit({ startDate: formattedStartDate, endDate: formattedEndDate });
    }
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const daysInLastMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const dayOfWeek = firstDay.getDay(); // El día de la semana del primer día del mes

    // Ajusta el día de la semana según el primer día de la semana configurado
    const adjustedDayOfWeek = (dayOfWeek - this.firstDayOfWeek + 7) % 7;

    const calendar: Date[][] = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      calendar[i] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < adjustedDayOfWeek) {
          // Días del mes anterior
          calendar[i][j] = new Date(this.currentYear, this.currentMonth - 1, daysInLastMonth - adjustedDayOfWeek + j + 1);
        } else if (date > daysInMonth) {
          // Días del mes siguiente
          calendar[i][j] = new Date(this.currentYear, this.currentMonth + 1, date - daysInMonth);
          date++;
        } else {
          // Días del mes actual
          calendar[i][j] = new Date(this.currentYear, this.currentMonth, date);
          date++;
        }
      }
    }
    this.calendar = calendar;
  }

  updateDisplayedDays() {
    if (this.firstDayOfWeek === 0) {
      if (this.days.length > 1) {
        let ultimoElemento = this.days.pop();

        if (ultimoElemento !== undefined) {
          this.days.unshift(ultimoElemento);
        }
      }
    }
    this.displayedDays = this.days;
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  prevYear() {
    this.currentYear--;
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  nextYear() {
    this.currentYear++;
    this.generateCalendar();
  }

  isSelected(date: Date): boolean {
    if (!this.range.startDate || !this.range.endDate) {
      return false;
    }
    const start = new Date(this.range.startDate);
    const end = new Date(this.range.endDate);
    return date >= start && date <= end;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isStartDate(date: Date): boolean {
    return !!this.range.startDate && new Date(this.range.startDate).toDateString() === date.toDateString();
  }

  isEndDate(date: Date): boolean {
    return !!this.range.endDate && new Date(this.range.endDate).toDateString() === date.toDateString();
  }

  selectDate(date: Date) {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (!this.range.startDate || (this.range.startDate && this.range.endDate)) {
      this.range.startDate = selectedDate;
      this.range.endDate = null;
    } else if (this.range.startDate && !this.range.endDate) {
      if (selectedDate < this.range.startDate) {
        this.range.endDate = this.range.startDate;
        this.range.startDate = selectedDate;
      } else {
        this.range.endDate = selectedDate;
      }
    }
    this.updateEndDateMin();
  }

  formattedDate(field: 'startDate' | 'endDate'): string | null {
    const date = this.range[field];
    return date ? this.datePipe.transform(date, this.format) : null;
  }
}

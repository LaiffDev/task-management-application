import { Component, SimpleChanges, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TaskData } from './models/task-data';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatTooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  /**
   * table configuration
   */
  displayedColumns: string[] = ['id', 'description', 'priority', 'status', 'dueDate', 'edit'];
  dataSource: MatTableDataSource<TaskData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * global variables
   */
  allTasks : TaskData[] = [
    {id : 1, description : 'Design login page', priority : 'high', status : 'backlog', dueDate : '13/01/2026'},
    {id : 2, description : 'Design login page', priority : 'low', status : 'to do', dueDate : '30/01/2026'},
    {id : 3, description : 'Design login page', priority : 'medium', status : 'in progress', dueDate : '14/02/2026'},
    {id : 4, description : 'Design login page', priority : 'low', status : 'staging', dueDate : '18/05/2026'},
    {id : 5, description : 'Design login page', priority : 'high', status : 'completed', dueDate : '30/08/2026'},
    {id : 6, description : 'Design login page', priority : 'medium', status : 'cancelled', dueDate : '14/02/2024'},
  ]

  backlogs : any[] = []
  todos : any[] = []
  inProgress : any[] = []
  stagings : any[] = []
  completed : any[] = []
  canceled : any[] = []

  constructor(){
    this.dataSource = new MatTableDataSource<TaskData>(this.allTasks);
  }

  ngOnInit(){
    this.getAllTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['allTasks']) {
      this.dataSource.data = this.allTasks;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllTasks(){
    console.log(this.allTasks)

    this.allTasks.filter((task:any) => {
      if(task.status === 'backlog'){
        this.backlogs.push(task)
      }else if(task.status === 'to do'){
        this.todos.push(task)
      }else if(task.status === 'in progress'){
        this.inProgress.push(task)
      }
      else if(task.status === 'staging'){
        this.stagings.push(task)
      }
      else if(task.status === 'completed'){
        this.completed.push(task)
      }
      else if(task.status === 'cancelled'){
        this.canceled.push(task)
      }
    })
    this.dataSource.data = this.allTasks;
  }


  //search filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

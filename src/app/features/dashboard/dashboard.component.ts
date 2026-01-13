import { Component, inject, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskData } from './models/task-data';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  /**
   * dialog configs
   */
  readonly dialog = inject(MatDialog);

  /**
   * table configs
   */
  displayedColumns: string[] = [
    'id',
    'description',
    'priority',
    'status',
    'dueDate',
    'edit',
  ];
  dataSource: MatTableDataSource<TaskData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * global variables
   */
  allTasks: TaskData[] = [];
  savedTasks: TaskData[] = [];

  backlogs: any[] = [];
  todos: any[] = [];
  inProgress: any[] = [];
  stagings: any[] = [];
  completed: any[] = [];
  canceled: any[] = [];

  constructor(private taskService: TaskService) {
    this.dataSource = new MatTableDataSource<TaskData>(this.allTasks);
  }

  ngOnInit() {
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

  getAllTasks() {
    if (typeof localStorage !== 'undefined') {
      this.allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    this.dataSource.data = this.allTasks;
  }

  //open dialog to add tasks
  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent);

    //returns the data after the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      this.savedTasks.push(result);
      this.taskService.AddNewTask(this.savedTasks);

      //recalling the function when a task is added
      this.getAllTasks();
    });
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

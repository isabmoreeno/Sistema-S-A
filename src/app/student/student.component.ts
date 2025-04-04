import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {

  student: Student[] = [];

  constructor(private service: StudentService){}

  ngOnInit(): void {
    this.service.getStudent().subscribe({
        next: json => this.student = json
    })
  }

}
 
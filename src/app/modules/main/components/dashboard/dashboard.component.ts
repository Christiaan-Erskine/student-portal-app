import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students : Student[] = [];
  public cols: number =1;

  
  constructor(private authService: AuthServiceService, private router: Router) { }
  
  ngOnInit() {
    if (this.authService.getUser().type == "student") {
      this.router.navigate(['/profile-page']);
    }
      
    
    this.authService.getAllStudents().subscribe(result => {result.forEach((element: Student) => {this.students.push(element) })});
    this.cols = window.innerWidth > 1000 ? 3 : window.innerWidth > 750 ? 2 : 1;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.cols = window.innerWidth > 1000 ? 3 : window.innerWidth > 750 ? 2 : 1;
  }


  log(val: any) { console.log(val); }
}

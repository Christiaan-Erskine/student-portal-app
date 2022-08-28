import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  user: User = this.authService.getUser();

  constructor(private authService: AuthServiceService,  private router: Router) { }

  ngOnInit(): void {
  }

  events: string[] = [];
  opened: boolean=false;

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

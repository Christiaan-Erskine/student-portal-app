import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  id!: string;
  myUser!: User;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.myUser = this.authService.getUser();
  }

}

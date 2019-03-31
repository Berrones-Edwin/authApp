import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styles: []
})
export class PrivadoComponent implements OnInit {

  profile: any;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}

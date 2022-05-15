import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usuario = ""
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.usuario = localStorage.getItem('email')
      console.log(this.usuario);
    }    
  }
  
  salir() {
    this.auth.logout()
    this.router.navigateByUrl('/login')
  }
}

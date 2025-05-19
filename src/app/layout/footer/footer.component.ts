import { Component, inject, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit,OnDestroy {

  private router = inject(Router);

  year = signal(0);


  ngOnInit(): void {
    let fecha = new Date;

    this.year.set(fecha.getFullYear());
  }

  goRoutes(ruta:string){
    this.router.navigate([ruta]);
  }


  ngOnDestroy(): void {

  }

}

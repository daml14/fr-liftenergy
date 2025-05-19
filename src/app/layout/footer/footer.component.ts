import { Component, OnDestroy, OnInit, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit,OnDestroy {

  year = signal(0);


  ngOnInit(): void {
    let fecha = new Date;

    this.year.set(fecha.getFullYear());
  }


  ngOnDestroy(): void {

  }

}

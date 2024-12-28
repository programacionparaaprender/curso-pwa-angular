import { Component, OnInit } from '@angular/core';
import { Seguro } from '../../shared/model/Seguro';
import { SeguroService } from '../../shared/services/seguro.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-seguros',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './listar-seguros.component.html',
  styleUrls: ['./listar-seguros.component.css']
})
export class ListarSegurosComponent implements OnInit {

  public seguros$: Observable<Seguro[]> | undefined;

  constructor(private seguroService: SeguroService) { }

  ngOnInit() {
    this.seguros$ = this.seguroService.listar();
  }

}

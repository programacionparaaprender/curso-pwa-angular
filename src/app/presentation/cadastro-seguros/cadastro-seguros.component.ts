import { Component, OnInit } from '@angular/core';
import { MarcaCarro } from '../../shared/model/MarcaCarro';
import { Seguro } from '../../shared/model/Seguro';
import { CarroService } from '../../shared/services/carro.service';
import { SeguroService } from '../../shared/services/seguro.service';
import { PushNotificationService } from '../../shared/services/push-notification.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


@Component({
  selector: 'app-cadastro-seguros',
  standalone:true,
  imports:[CommonModule, FormsModule, AsyncPipe],
  templateUrl: './cadastro-seguros.component.html',
  styleUrls: ['./cadastro-seguros.component.css']
})
export class CadastroSegurosComponent implements OnInit {

  public marcasCarro$: Observable<MarcaCarro[]> | undefined;
  public seguro = new Seguro();

  constructor(
    private carroService: CarroService,
    private seguroService: SeguroService,
    //private pushNotificationService: PushNotificationService
  ) { }

  ngOnInit() {
    this.carregarMarcasDeCarro();
  }

  carregarMarcasDeCarro() {
    this.marcasCarro$ = this.carroService.getMarcas();
  }

  adicionar() {
    this.seguroService.salvar(this.seguro);
  }

  enviarNotificacao() {
    //this.pushNotificationService.enviar();
  }

}

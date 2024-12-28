import { MarcaCarro } from './MarcaCarro';

export class Seguro {
  marcaCarro: MarcaCarro;
  modeloCarro: string;
  placaCarro: string;
  nomeProprietario: string;
  sobrenomeProprietario: string;
  dataNascimentoProprietario: string;
  constructor(
    marcaCarro: MarcaCarro = new MarcaCarro(),
    modeloCarro: string = '',
    placaCarro: string = '',
    nomeProprietario: string = '',
    sobrenomeProprietario: string = '',
    dataNascimentoProprietario: string = ''
  ){
    this.marcaCarro = marcaCarro;
    this.modeloCarro = modeloCarro;
    this.placaCarro = placaCarro;
    this.nomeProprietario = nomeProprietario;
    this.sobrenomeProprietario = sobrenomeProprietario;
    this.dataNascimentoProprietario = dataNascimentoProprietario;
  }

}

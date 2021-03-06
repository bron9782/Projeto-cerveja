import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CervejasService } from 'src/app/shared/service/cervejas.service';
import { Cerveja } from '../../shared/models/cerveja.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
  id: any;
  cerveja: Cerveja[] = [];
  cerv: any;

  constructor(
    private route: ActivatedRoute,
    private service: CervejasService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service
      .detalhesCerveja(this.id)
      .subscribe((dados) => (this.cerveja = dados));
  }
}

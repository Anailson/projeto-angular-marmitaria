import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {


  //ARRAY - SÃO OS ATRIBUTOS QUE VEM DA package.model
  packages: Package []= [
  new Package('Churrasco' ,'Churrasco de Picanha','https://churrascariameinhaus.com.br/blog/wp-content/uploads/2017/08/voce-sabia-24-de-abril-e-o-dia-do-churrasco-receitas-770x513.jpg'),
  new Package('Churrasco' ,'Churrasco de Picanha','https://churrascariameinhaus.com.br/blog/wp-content/uploads/2017/08/voce-sabia-24-de-abril-e-o-dia-do-churrasco-receitas-770x513.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

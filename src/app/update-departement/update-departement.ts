import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Departement } from '../model/departement.model';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-departement',
  imports: [FormsModule],
  templateUrl: './update-departement.html',
  styles: ``
})
export class UpdateDepartement implements OnInit {

  @Input()
  departement!: Departement;
   @Input()
    ajout!: boolean;

   @Output()
  departementUpdated = new EventEmitter<Departement>();


  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateDepartement', this.departement);
  }

  saveDepartement(): void {
    this.departementUpdated.emit(this.departement);
  }
}

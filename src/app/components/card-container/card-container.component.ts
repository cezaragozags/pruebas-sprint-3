import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-card-container',
  imports: [CardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {

  @Input() view!: string | 'grid'; // Recibe la vista desde home
  @Input() products!: Product[] | [];

  


}


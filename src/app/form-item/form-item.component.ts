import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css']
})
export class FormItemComponent implements OnInit {

  @Output() createItem = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }
  createNewItem(title, link) {
    this.createItem.emit(new Item(title, link));
  }
}

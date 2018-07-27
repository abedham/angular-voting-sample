import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  @Output() reorder = new EventEmitter<Array<number>>();
  constructor() {
  }


  ngOnInit() {
  }
  voteUp() {
    this.item.votes++;
    this.reorder.emit([this.index, 1]);
  }
  voteDown() {
    this.item.votes--;
    this.reorder.emit([this.index, -1]);
  }

}

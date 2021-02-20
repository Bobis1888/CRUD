import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Item } from '../models/Item';

@Component({
  templateUrl: './item-list.component.html',
  providers: [DataService],
  styleUrls: ['item-list.css'],
 })
export class ItemListComponent implements OnInit {

  items: Item [];
  progress = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.progress = true;
    this.items = null;
    this.dataService.getItems().subscribe((data: Item[]) => {
      this.items = data;
      this.progress = false;
    });
  }

}

import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-api',
  templateUrl: './image-api.component.html',
  styleUrls: ['./image-api.component.css']
})
export class ImageApiComponent {
  @Input() item: any;
  images :any;
  imageData: any;
  items: any[] = [];
  constructor(private api:ApiService){}

  ngOnInit() {
    this.api.getImages().subscribe((data)=>{
    this.imageData = data.items
    console.log(this.imageData)
});
}
  

}

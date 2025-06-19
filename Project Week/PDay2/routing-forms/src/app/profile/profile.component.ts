import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  id!: number
  title!: string | null
  constructor(private route: ActivatedRoute){}
   ngOnInit(): void {
       this.id = Number(this.route.snapshot.paramMap.get("id"))
       this.title = this.route.snapshot.paramMap.get("title")
   }
}

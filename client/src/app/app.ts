import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'Dating App';
  protected menbers = signal<any>([]);

  async ngOnInit(){
    this.menbers.set(await this.getMembers());
  }

  async getMembers() {
    try {
      const response = await this.http.get('https://localhost:5001/api/members');
    } catch (error) {
      console.error(error);
    }
  }
}

import { Component } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public clients: Client[] | undefined;
  constructor(private clientService: ClientService){}

  public getClients(): void{
    this.clientService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

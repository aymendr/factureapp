import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public clients: Client[] = [];
  constructor(private clientService: ClientService){}
  ngOnInit(): void {
    this.getClients();
    throw new Error('Method not implemented.');
  }

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

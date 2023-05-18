import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverStatus='No server was created';
    serverName='';
    serverCreated=false;
    servers = ['SR1','SR2']

    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000)
    }
    ngOnInit(): void {
    }
    onCreateServer(){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverStatus=`Server ${this.serverName} was created!!!`
    }
    onUpdate(event:any ){
      this.serverName=event.target.value;
    }
  }

import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Task} from '../../task';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskServices{
    constructor(private http:Http){
        console.log('task Service Initiated ....')
    }

getTasks(){
    return this.http.get('http://localhost:3000/api/tasks').map(res=>res.json());
}
}
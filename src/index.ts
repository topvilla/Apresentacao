import Server from './Server';
import IndexController from './Controller/IndexController';
import { response } from 'express';

const server = new Server();

server.get('/',function(response,request){
    const c = new IndexController(request,response);
    c.index();
});

server.listInPort(3000);
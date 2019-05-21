import express from "express";
import { hostname } from "os";


export default class Server{
    private express:express.Application;
    private host:string = "0.0.0.0"
    constructor(){
        this.express = express();
    }
    get(url:string,callback){
        this.express.get(url,function(req,resp){
            resp.send("server on"+ new Date().toDateString());
        });
    }
    listen():void{
        this.express.listen(3000,function(){
            console.log("up server on in "+new Date().toDateString());
        });
    }
    listInPort(port:number):void{
        this.express.listen(port,this.host);
    }
}
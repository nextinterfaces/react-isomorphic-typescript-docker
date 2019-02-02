# Isomorphic React Dockerized web application

This is an isomorphic web application running on Node rendering react on client and server utilizing React, Redux, TypeScript, TypeORM, MySQL, Docker, Node.js,  Nginx. 

Ready for VPS deployment on DigitalOcean or Vultr.

### This project consist of following technologies

* **Isomorphic React** Client & API Server rendering sharing common **Redux** layer

* **TypeScript** on Client and Server

* **TypeORM** database layer

* **Dockerized** containers for Client (Node.js), API Server (Node.js), Proxy(Nginx), Database (MySQL)

* Vultr or **DigitalOcean** CI/CD pipeline deployment ready 
 

### Browser Flow:

 1. When web site is accessed for a first time
 2. The server renders the initial page directly on Node.js, before the Single Page Application is loaded
 3. Meanwhile client SPA JS libraries are loaded and rendered and web site silently becomes SPA
 4. This allows web site to render instantly without SPA delays

### Architecture:

```
------------------------------------
|
|	** API Server **
|	
|            a Docker container
|        
|            Node.js Restful API service
|        
|            TypeScript
|
|            TypeORM
|
|------------------------------------
|  
|	** Web Server **
|	
|            a Docker container
|        
|            React server-side rendering on Node.js
|        
|            rich Single Page Application client render
|        
|            TypeScript
|
|            React
|
|            Redux, Thunk
|
|            ReactRouter
|
|            communicates to API via JSON ajax
|
|------------------------------------
|        
|    ** Nginx **
|    
|            a Docker container
|
|            web front-facing server
|		 
|            proxing to API and Web server
|       
|            handling SSL connection
|
|------------------------------------
|
|    ** MySQL **
|    
|            MySQL Docker container
|
------------------------------------
```


### Links:

**API TypeORM** based on 

[https://github.com/typeorm/typescript-koa-example](https://github.com/typeorm/typescript-koa-example)
    
**Web Server** based on 

[https://github.com/nextinterfaces/isomorphic-demo](https://github.com/nextinterfaces/isomorphic-demo)

**How to Deploy and Run on Vultr**

[https://www.vultr.com/docs/deploy-a-php-application-using-docker-compose](https://www.vultr.com/docs/deploy-a-php-application-using-docker-compose)

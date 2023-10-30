# Queworkers learning using Gearman

## About the project

### Gearman server

Gearman provides a generic application framework to farm out work to other machines or processes that are better suited to do the work. It allows you to do work in parallel, to load balance processing, and to call functions between languages. It can be used in a variety of applications, from high-availability web sites to the transport of database replication events

- [Gearman](http://gearman.org/)

Gearman server run environment is composed by PHP but the client and workers can be written in multiple languages. For this project we have installed the server using a [docker image](https://hub.docker.com/r/artefactual/gearmand/).

### Gearman client & workers

We have used Nodejs [oficial client](http://gearman.org/download/). You can install it using npm `https://www.npmjs.com/package/abraxas`

Our current approach is to register some mock workers and then run the client to send some jobs to the server. The workers will process the jobs and return the result to the client. Each worker script can be registered multiple times so we can see how the load is distributed between the workers.

## Installation

### Server

```bash
docker compose up -d
```

### Workers

These are simple script. I have tested them ./worker.js and ./heave.worker.js and ./twoSum.worker.js. You can run them as many times as you like. The only thing to care about is to point the client to the correct host and port (Gearman server)

```bash

```bash
node worker.js
```

```bash
node heavy.worker.js
```

```bash
node twoSum.worker.js
```

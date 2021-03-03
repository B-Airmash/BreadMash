VM4b Server
-
In the words of Congratulatio:
> Server is made from **_nginx_** and **_node_**. 

> It is run by cd versions of git clones.

> **_nginx_ is the web server.**
> **_node_ is the javascript environment used to build the frontend**.

> If you go to [breadmash](https://breadmash.tk), it's the frontend on the server.

Airmash-Frontend
-

> I've cloned the [airmash-frontend repository](https://github.com/airmash-refugees/airmash-frontend) into the directory. 
```
cd ~/airmash-frontend
```
> So you should be able to make your changes in there then run the command: 
```
npm run build
```
> It will update the frontend at https://breadmash.tk

AB-Protocol
-

> I've cloned [wight's ab-protocol repository](https://github.com/wight-airmash/ab-protocol) into the directory.
```
cd ~/ab-protocol
```
> So you should be able to make your changes in there then run the command: 
```
npm run start
```

AB-Server
-

> I've cloned [wight's ab-server repository](https://github.com/wight-airmash/ab-server) into the directory.
```
cd ~/ab-server
```
> Make a screen in the directory
```
screen
```
> Run Command:
```
npm run start
```
> This will allow the VM4B server to work and be joined aka be accessed

> To leave the screen run
```
ctrl + d
```
then:
```
ctrl + a
```

AB-Bot
-

> I've cloned [Spatie's ab-bot repository](https://github.com/spatiebot/ab-bot) into the directory.
```
cd ~/ab-bot
```
> Make a screen in the directory
```
screen
```
> Run Command:
```
node dist/app.js --ws=(ws here) --num=(ammount of bots) --type=distribute --character=(character type) --name=(name here) --flag=(flag iso) --level=40
```
>The character type and ws varies on [spatie's instuctions](https://github.com/spatiebot/ab-bot#running)

> This will add bots to VM4B

> To leave the screen run
```
ctrl + d
```
then:
```
ctrl + a
```
> That's how the VM4B server works from the server-end.

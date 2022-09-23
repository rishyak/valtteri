# valtteri
Discord bot to reply with iconic things said by [Valtteri Bottas](https://en.wikipedia.org/wiki/Valtteri_Bottas).

## Requires
1. discord.js
2. dotenv

## Usage
Feel free to use this app for fun.

### Preamble
Before you use it, use the [`.env.sample`](.env.sample) file and add your credentials to it. 

### Register slash commands and make new slash commands
Run [`deploy-commands.js`](deploy-commands.js):
```txt
node deploy-commands.js
```

Feel free to add more commands. Just remember to run the file and register the slash commands. 

### Replying to messages
[`index.js`](index.js) contains the code to deal with slash commands. To add a sassy Valttereply, simply add a string to the `replies` array on line 9.

### Deploy
Deploy it wherever, just don't forget to invite the bot to your server.
```txt
node .
```

## Use my deployment
My app is constantly deployed and running. To add it to your server, [click here](http://discord.com/oauth2/authorize?client_id=1022666494125035572&scope=bot) and authorise it. 

## Requesting new replies
If you don't code or like js (understandable), create an issue.   

If you do code, submit a PR.

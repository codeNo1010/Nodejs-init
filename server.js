const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/first' , function(요청, 응답){
    응답.send('처음 여는 /first 입니다.');
});

// 들어온 요청을 HTML로 보내기
app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

//git commit 
//  rm -rf .git.
//  git init.

//  git add .
//  git commit -m “init”
//  git log
//  git remote add origin <url>
//  git push -u —force origin master

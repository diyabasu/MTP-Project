const fs=require('fs')
const https=require('https')

function saveImagetodisk(url,path)
{
  var fullUrl= url
  var localPath= fs.createWriteStream(path)
  var request = https.get(fullUrl,function(response){console.log(response)
  response.pipe(localPath)})                                                   
}

saveImagetodisk("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dfree%2Bdownload&psig=AOvVaw2FiGocFA9blQ4ul1dG8ZHx&ust=1685193599735000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD4gsGJk_8CFQAAAAAdAAAAABAE","/path_standard" +Date.now()+".png")

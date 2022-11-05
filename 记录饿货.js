/**
 * @author 小余味
 * @description 🐒这个人很懒什么都没有留下。
 * @origin 小余味
 * @version v1.0.0
 * @create_at 2022-09-08 07:40:14
 * @title 记录饿货
 * @public true
 * @rule 记录饿货
 * @encrypt true
 * @public false
 */
/**本脚本只适用于新版本傻妞，实现查询饿了么豆子等信息，以下三个参数请填写正确，elmck变量请备注好QQ号码即可查询 */
/**
 * 遇到使用问题请加QQ群：110641291
 */
var qldizhi = "";
var qlclient_id = "";
var qlclient_secret = "";

console.log("\u4f5c\u8005\u9879\u76ee\u5730\u5740\uff1ahttps://github.com/younweri/QQSillyGril");var s=sender;s.reply("\u8bf7\u5728\u5341\u79d2\u5185\u53d1\u9001\u60a8\u7684elmCookie\uff0cq\u9000\u51fa\u4f1a\u8bdd");var qq=s.getUserId(),$jscomp$destructuring$var0=request({url:qldizhi+"/open/auth/token?client_id\x3d"+qlclient_id+"\x26client_secret\x3d"+qlclient_secret,method:"get"}),body=$jscomp$destructuring$var0.body,headers=$jscomp$destructuring$var0.headers,status=$jscomp$destructuring$var0.status,tokens=JSON.parse(body),tokenaa=tokens.data.token,index=1,newS=s.listen(1E4);if(null==newS)s.reply("\u8d85\u65f6\uff0c10\u79d2\u5185\u672a\u56de\u590d\uff0c\u53d6\u6d88\u672c\u6b21\u8bb0\u5f55\u3002");else if("q"==newS.getContent()||"Q"==newS.getContent())newS.reply("\u5df2\u9000\u51fa\u4f1a\u8bdd");else{var ck=newS.getContent(),messageId=newS.getMessageId();s.recallMessage(messageId);var elmapis=elmapi(ck);if(0<=elmapis.indexOf("\u672a\u767b\u5f55"))s.reply("ck\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u6293\u53d6");else{var userjson=JSON.parse(elmapis),userid=userjson.user_id,username=userjson.username,$jscomp$destructuring$var1=request({url:qldizhi+"/open/envs",method:"post",body:[{name:"elmck",value:ck,remarks:qq+"@"+userid+"\x26"+username}],headers:{Authorization:"Bearer "+tokenaa}}),body=$jscomp$destructuring$var1.body,headers=$jscomp$destructuring$var1.headers,status=$jscomp$destructuring$var1.status;if(body.indexOf("code':200")){s.reply("\u4e0a\u8f66\u6210\u529f\uff0c\u6b63\u5728\u4e3a\u60a8\u67e5\u8be2\u8d26\u53f7\u4fe1\u606f~");var $jscomp$destructuring$var2=request({url:"https://restapi.ele.me/eus/v5/user_detail",method:"get",headers:{cookie:ck}}),body=$jscomp$destructuring$var2.body,headers=$jscomp$destructuring$var2.headers,status=$jscomp$destructuring$var2.status,xx=JSON.parse(body),$jscomp$destructuring$var3=request({url:"https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset\x3d0\x26limit\x3d100\x26longitude\x3d116.397128\x26latitude\x3d39.916527",method:"get",headers:{cookie:ck}}),body=$jscomp$destructuring$var3.body,headers=$jscomp$destructuring$var3.headers,status=$jscomp$destructuring$var3.status,dzxx=JSON.parse(body),d=new Date,nf=d.getFullYear().toString(),yf=d.getMonth()+1,rf=d.getDate();10>rf&&(rf="0"+rf);var rq=nf+yf;console.log(nf+"-"+yf+"-"+rf);var jinridouzi=0,zh;for(zh in dzxx.records)0<=dzxx.records[zh].createdTime.indexOf(nf+"-"+yf+"-"+rf)&&(jinridouzi+=dzxx.records[zh].count);console.log(jinridouzi);var benyuedouzi=dzxx.monthAccountInfo[rq].plusCount,zongongdouzi=dzxx.peaCount,pinimg=xx.avatar,img1=pinimg.substr(0,1),img2=pinimg.substr(1,2),img3=pinimg.slice(3)+"",userimg="https://cube.elemecdn.com/"+img1+"/"+img2+"/"+img3+".jpeg",userid=xx.user_id,username=xx.username,ckzt="",ckzt=1==xx.is_mobile_valid?"Cookie\u6709\u6548":"Cookie\u5931\u6548";s.reply(image(userimg)+"\u5e8f\u53f7:"+index+"\nQQ\u53f7\u7801\uff1a"+qq+"\n\u6635\u79f0\uff1a"+username+"\nID\uff1a"+userid+"\nCookie\u72b6\u6001\uff1a"+ckzt+"\n\u5f53\u524d\u8c46\u8c46\uff1a"+zongongdouzi+"\n\u4eca\u65e5\u6536\u5165\uff1a"+jinridouzi+"\n\u672c\u6708\u6536\u5165\uff1a"+benyuedouzi)}else s.reply("\u4e0a\u8f66\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u914d\u7f6e")}}function elmapi(a){return request({url:"https://restapi.ele.me/eus/v5/user_detail",method:"get",headers:{cookie:a}}).body};
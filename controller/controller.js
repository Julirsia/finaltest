const cwd = process.cwd();
const db=require(cwd+'/database/db');

exports.story_list=(req,res)=>{
  db.query('select * from story',(err,results)=>{
    if(err) console.log(err);
    res.render('story',{story:results});
  });
};

exports.story_write=(req,res)=>{
  var title = req.body.title;
  var name = req.body.name;
  var content = req.body.content;
  db.query('Insert into story(Story_Title,Story_Content,User_Name) values (?,?,?)',[title,content,name],(err,results)=>{
    if(err) console.log(err);
    res.redirect('/story')
  });
};

exports.story_view=(req,res)=>{
  var id = req.params.id;
  console.log(id);
  db.query('select * from story where Story_ID = ?',[id],(err,results)=>{
    if(err) console.log(err);
    res.render('story_content',{story:results});
  });
};

exports.review_list=(req,res)=>{
  db.query('select * from review',(err,results)=>{
    if(err) console.log(err);
    res.render('review',{review:results});
  });
};

exports.review_write=(req,res)=>{
  var title = req.body.title;
  var name = req.body.name;
  var content = req.body.content;
  db.query('Insert into review(Review_Title,Review_Content,User_Name) values (?,?,?)',[title,content,name],(err,results)=>{
    if(err) console.log(err);
    res.redirect('/review')
  });
};

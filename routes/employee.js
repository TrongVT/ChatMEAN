exports.list=function(req,res){
	req.getConnection(function(err,con){
		var query=con.query("select *from employee",function(err,rows){
			if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('employee',{page_title:"List Employee",data:rows});
		});
		console.log(query.sql);
	});
};
exports.edit=function(req,res){
	var id=req.params.id;
	req.getConnection(function(err,con){
		var query=con.query("select *from employee where id= ?",[id],function(err,rows){
			if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('editemployee',{page_title:"Edit Employee",data:rows});
		});
	});
};
exports.save_edit=function(req,res){
	var input ={
			name    : req.body.name,
            address : req.body.address,
            email   : req.body.email,
            phone   : req.body.phone 
	}
    var id = req.params.id;
    
    req.getConnection(function(err,con){
    	var data = {
            name    : name,
            address : input.address,
            email   : input.email,
            phone   : input.phone 
        
        };
        console.log(data);
        //sua nhan vien
      //   con.query("update employee set ? where id=?",[data,id],function(err,rows){
      //   	if (err)
      //         console.log("Error Updating : %s ",err );
         
      //     res.redirect('/employee');
      // });
    });
};
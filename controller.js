var a = [];
function hahha (req, res){
    var sql="SELECT * FROM Userss"; 
    db.query(sql, function(err, result){
        if (err) throw err;
        for(var i = 0;i<result.length;i++ )
        a.push(i);
        console.log(a);
        for(var i = 0;i<a.length;i++ )
        console.log(a[i]);
        
     });
}
exports.index=hahha;

const dbConnect= require('./mongodb');
const deleteData= async ()=>{
    let data = await dbConnect();
    let result= await data.deleteMany({name: 'max 7'});
    if(result.acknowledged){
        console.log("Deleted");
    }
}
deleteData();
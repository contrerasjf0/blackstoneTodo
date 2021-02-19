const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Types;

const TodoSchema = new Schema({
  description: String,
  userId: String,
  done: Boolean,
  creatAt: {
    type: Date,
    default: Date.now
  }
}); 

class Todo {

  constructor(){
    this.model = mongoose.model('todo', TodoSchema);
  }

  async add(todo){
    let document;
    try {
      document = await this.model.create(todo);
    } catch (err) {
      console.log('Error saving record');
      return null;
    }
    
    return document;
  }

  async getByUserId(userId){
    let documents = [];

    try{
      documents = await this.model.find({ userId });
    } catch(err){
      console.log('Error to retrieve records');
    }

    return documents;
  }

  async update(id, data){

    let document = data;

    try {
      document = await this.model.findOneAndUpdate({_id: new ObjectId(id) }, data, {new: true});
    } catch (err) {
      console.log('Error to update records');
    }
    return document;
  }

}

module.exports = Todo;

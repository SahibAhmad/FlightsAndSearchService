

class CrudRepository {
    constructor (model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;

        } catch (error) {
            console.log("some thing went wrong in repository");
            throw {error};
        }
    }
    
    async destroy (modelId) {
      try {
          this.model.destroy({
              where: {
                  id: modelId,
              }
          });
          return true;
      } catch (error) {
            console.log("some thing went wrong in repository");
            throw {error};
      }
    }

    async get (modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("some thing went wrong in repository");
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            
        }
    }

    async update(modelId,newData) {
        try {
            const result = await this.model.update(newData, {
                where : {
                    id : modelId,
                }
            });

            return result;
            //remember we can update each key one by one and then return that updated 
            // instance as well
        } catch (error) {
            console.log("some thing went wrong in repository");
            throw {error};
        }
    }
}


module.exports = CrudRepository
export class Carburant {
    type: string;
    id: string;
    attributes: {
      id: number;
      state: number;
      type_carburant: string;
      ordering: number;
     
    };
  
    constructor(data: any) {
      this.type = data.type;
      this.id = data.id;
      this.attributes = {
        id: data.attributes.id,
        state: data.attributes.state,
        type_carburant: data.attributes.type_carburant,
        ordering: data.attributes.ordering,
        
      };
    }
  

  }
  
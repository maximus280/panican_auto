export class Carosserie {
    type: string;
    id: string;
    attributes: {
      id: number;
      state: number;
      nom: string;
      ordering: number;
     
    };
  
    constructor(data: any) {
      this.type = data.type;
      this.id = data.id;
      this.attributes = {
        id: data.attributes.id,
        state: data.attributes.state,
        nom: data.attributes.nom,
        ordering: data.attributes.ordering,
        
      };
    }
  

  }
  
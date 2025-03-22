export class Marque {
    type: string;
    id: string;
    attributes: {
      id: number;
      state: number;
      name: string;
      image: string;
     
    };
  
    constructor(data: any) {
      this.type = data.type;
      this.id = data.id;
      this.attributes = {
        id: data.attributes.id,
        state: data.attributes.state,
        name: data.attributes.name,
        image: data.attributes.image,
        
      };
    }
  

  }
  
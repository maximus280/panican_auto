export class Options {
    type: string;
    id: string;
    attributes: {
      id: number;
      state: number;
      name: string;
      ordering: number;
     
    };
  
    constructor(data: any) {
      this.type = data.type;
      this.id = data.id;
      this.attributes = {
        id: data.attributes.id,
        state: data.attributes.state,
        name: data.attributes.name,
        ordering: data.attributes.ordering,
        
      };
    }
  

  }
  
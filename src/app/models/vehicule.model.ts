export class Vehicule {
    type: string;
    id: string;
    attributes: {
      id: number;
      state: number;
      ordering: number;
      nom: string;
      description: string;
      vendu: string;
      prix: string;
      année: string;
      marque: string;
      categories: string;
      kilométrage:number;
      photo: string;
      carburant:number;
      description_detaillee: string;
      carosserie: string;
      option: string;
      transmission: string;
      modele: string;
      galerie: string[];
    };
  
    constructor(data: any) {
      this.type = data.type;
      this.id = data.id;
      this.attributes = {
        id: data.attributes.id,
        state: data.attributes.state,
        ordering: data.attributes.ordering,
        nom: data.attributes.nom,
        description: data.attributes.description,
        vendu: data.attributes.vendu,
        prix: data.attributes.prix,
        année: data.attributes.année,
        marque: data.attributes.marque,
        categories: data.attributes.categories,
        photo: data.attributes.photo,
        kilométrage: data.attributes.kilométrage,
        carburant: data.attributes.carburant,
        description_detaillee: data.attributes.description_detaillee,
        carosserie: data.attributes.carosserie,
        option: data.attributes.option,
        modele: data.attributes.modele,
        transmission: data.attributes.transmission,
        galerie: /* this.parseGalerie(data.attributes.galerie) */data.attributes.transmission,
      };
    }
  
    private parseGalerie(galerieString: string): string[] {
      try {
        const galerieObj = JSON.parse(galerieString);
        return Object.values(galerieObj).map((item: any) => item.image);
      } catch (error) {
        console.error("Erreur de parsing de la galerie :", error);
        return [];
      }
    }
  }
  
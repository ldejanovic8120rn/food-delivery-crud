'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //RESTAURANTS
    await queryInterface.bulkInsert('Restaurants', [
      {
        id: 1,
        name: "Kafana Meda",
        kitchen: "Serbian",
        city: "Zajecar",
        street: "Svetozara Markovica 56",
        phone: "019 425311",
        delivery_price: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Iva Top",
        kitchen: "Serbian",
        city: "Bor",
        street: "Borska 44",
        phone: "030 433568",
        delivery_price: 650,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Pizza bar",
        kitchen: "Italian",
        city: "Belgrade",
        street: "Mutapova 5",
        phone: "064 0540405",
        delivery_price: 1100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Dva Jelena",
        kitchen: "Serbian",
        city: "Belgrade",
        street: "Skadarska 32",
        phone: "011 7234855",
        delivery_price: 1300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Dva Stapica",
        kitchen: "Chinese",
        city: "Belgrade",
        street: "Kneza Milosa 15",
        phone: "011 4043550",
        delivery_price: 750,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: "Bevanda",
        kitchen: "Mediteran",
        city: "Belgrade",
        street: "Pozarevacka 51",
        phone: "011 2447446",
        delivery_price: 1500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: "Zapata",
        kitchen: "Mexican",
        city: "Belgrade",
        street: "Vuka Karadzica 14",
        phone: "065 3809207",
        delivery_price: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

    //FOODS
    await queryInterface.bulkInsert('Foods', [
      {
        id: 1,
        name: "Punjena vesalica",
        price: 800,
        description: "Punjeno kackavaljem i sunkom",
        category: "Main course",
        portion: "Big",
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 2,
        name: "Punjena pljeskavica",
        price: 780,
        description: "Punjena lukom, kackavaljem i sunkom",
        category: "Main course",
        portion: "Big",
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 3,
        name: "Baklava",
        price: 290,
        description: "Kao u Turskoj",
        category: "Dessert",
        portion: "Big",
        restaurant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 4,
        name: "Teleca corba",
        price: 250,
        description: "Specijalitet kuce",
        category: "Soup",
        portion: "Medium",
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 5,
        name: "Plava traka",
        price: 750,
        description: "Ne propustite!",
        category: "Main course",
        portion: "Big",
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 6,
        name: "Palacinke u satou",
        price: 1000,
        description: "Za 4 osobe",
        category: "Dessert",
        portion: "Big",
        restaurant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 7,
        name: "Bolognese",
        price: 880,
        description: "Sef kuhinje garantuje!",
        category: "Pasta",
        portion: "Medium",
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 8,
        name: "Paesano",
        price: 1200,
        description: "Seljacka - 40cm",
        category: "Pizza",
        portion: "Big",
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 9,
        name: "Tiramisu",
        price: 410,
        description: "Sweets time!",
        category: "Dessert",
        portion: "Small",
        restaurant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 10,
        name: "Predjelo Ala Jelen",
        price: 1300,
        description: "Srpske meze za 2 osobe",
        category: "Appetizer",
        portion: "Big",
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 11,
        name: "Karadjordjeva",
        price: 950,
        description: "Crni Djordje",
        category: "Main course",
        portion: "Big",
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 12,
        name: "Sopska",
        price: 320,
        description: "Krastavac, paradajz i sir",
        category: "Salad",
        portion: "Medium",
        restaurant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 13,
        name: "Kiselo ljuta supa",
        price: 250,
        description: "Da pocnemo...",
        category: "Soup",
        portion: "Big",
        restaurant_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 14,
        name: "Rolnice sa povrcemo",
        price: 160,
        description: "Za vegeterijance",
        category: "Appetizer",
        portion: "Small",
        restaurant_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 15,
        name: "Piletina sa ananasom",
        price: 720,
        description: "Obavezno probajte!",
        category: "Main course",
        portion: "Big",
        restaurant_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 16,
        name: "Riblja corba",
        price: 320,
        description: "Sa recnom ribom",
        category: "Soup",
        portion: "Big",
        restaurant_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 17,
        name: "Pastrmka",
        price: 1200,
        description: "Iz Dunava",
        category: "Main course",
        portion: "Big",
        restaurant_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 18,
        name: "Zubatac",
        price: 4350,
        description: "Sveze zaledjen",
        category: "Main course",
        portion: "Big",
        restaurant_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 19,
        name: "Grande burrito",
        price: 720,
        description: "Sa junecim rebrima",
        category: "Burrito",
        portion: "Big",
        restaurant_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 20,
        name: "Burrito Tradicionales",
        price: 900,
        description: "Tradicionalni meksicki",
        category: "Burrito",
        portion: "Big",
        restaurant_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 21,
        name: "Churros",
        price: 270,
        description: "Slatki stapici",
        category: "Dessert",
        portion: "Medium",
        restaurant_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

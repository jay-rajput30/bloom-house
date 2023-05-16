export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (url === "https://api.plants.com") {
        resolve({
          status: 200,
          message: "success",
          data: {
            plants: [
              {
                id: 1,
                name: "Succulent Mix",
                price: 12.99,
                description: "A mix of three different succulents.",
                rating: 3.5,
                category: "Plants",
                thumbnail:
                  "https://images.unsplash.com/photo-1625582598943-2445bb7b8253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
              {
                id: 2,
                name: "Cherry Tomato Seeds",
                price: 3.99,
                description:
                  "A packet of cherry tomato seeds for home gardening.",
                rating: 3.2,
                category: "Seeds",
                thumbnail:
                  "https://plus.unsplash.com/premium_photo-1678722936997-92a9bcfaff0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBzZWVkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: true,
              },
              {
                id: 3,
                name: "Herb Trio",
                price: 14.99,
                description: "A trio of basil, parsley, and thyme plants.",
                rating: 4.7,
                category: "Plants",
                thumbnail:
                  "https://images.unsplash.com/photo-1625582598943-2445bb7b8253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
              {
                id: 4,
                name: "Hand-Painted Plant Pot",
                price: 24.99,
                description: "A unique hand-painted ceramic plant pot.",
                rating: 3.9,
                category: "Plant Pots",
                thumbnail:
                  "https://images.unsplash.com/photo-1670169603920-e2d4080e22d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwcGxhbnQlMjBwaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                isOnSale: true,
              },
              {
                id: 5,
                name: "Mint Seeds",
                price: 2.99,
                description: "A packet of mint seeds for home gardening.",
                rating: 4.1,
                category: "Seeds",
                thumbnail:
                  "https://plus.unsplash.com/premium_photo-1678722936997-92a9bcfaff0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBzZWVkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
              {
                id: 6,
                name: "Succulent Planter",
                price: 19.99,
                description: "A decorative planter for succulent plants.",
                rating: 4.6,
                category: "Plant Pots",
                thumbnail:
                  "https://images.unsplash.com/photo-1670169603920-e2d4080e22d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwcGxhbnQlMjBwaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                isOnSale: true,
              },
              {
                id: 7,
                name: "Monstera Deliciosa Plant",
                price: 24.99,
                description: "A popular indoor plant with unique leaves.",
                rating: 4.3,
                category: "Plants",
                thumbnail:
                  "https://images.unsplash.com/photo-1625582598943-2445bb7b8253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
              {
                id: 8,
                name: "Lavender Seeds",
                price: 3.99,
                description: "A packet of lavender seeds for home gardening.",
                rating: 4.4,
                category: "Seeds",
                thumbnail:
                  "https://plus.unsplash.com/premium_photo-1678722936997-92a9bcfaff0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnQlMjBzZWVkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: true,
              },
              {
                id: 9,
                name: "Hanging Plant Pot",
                price: 16.99,
                description: "A stylish hanging plant pot for indoor use.",
                rating: 4.9,
                category: "Plant Pots",
                thumbnail:
                  "https://images.unsplash.com/photo-1670169603920-e2d4080e22d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwcGxhbnQlMjBwaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
              {
                id: 10,
                name: "Snake Plant",
                price: 18.99,
                description:
                  "A low-maintenance indoor plant that purifies the air.",
                rating: 3.7,
                category: "Plants",
                thumbnail:
                  "https://images.unsplash.com/photo-1625582598943-2445bb7b8253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                isOnSale: false,
              },
            ],
          },
        });
      } else {
        reject({ status: 404, message: "oops, data not found" });
      }
    }, 2000);
  });
};

// src/hotels.js
const imageUrl = "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=";
const hotelsData = [
   
  {
    id: 1,
    name: "Astoria Current",
    city: "london",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 5,
    bathrooms: 3,
    area: 3500,
    room:5,
    price:34000,
    type:"ForRent"
  },
  {
    id: 2,
    name: "SereneStay Resort",
    city: "london",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 2,
    bathrooms: 3,
    area: 3500,
    room:6,
    price:34,
    type:"ForRent"
  },
  {
    id: 3,
    name: "Happy Resort",
    city: "london",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    room:8,
    price:3400,
    type:"ForRent"
  },
  {
    id: 4,
    name: "Happy Stay Resort",
    city: "london",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    room:12,
    price:3000,
    type:"ForRent"

  },
  {
    id: 5,
    name: "Home Away From Home",
    city: "dubai",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    room:13,
    price:24000,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type:"forSale"
  },
    
  {
    id: 6,
    name: "Hello Home",
    city: "MP",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 2,
    bathrooms: 3,
    area: 3500,
    room:4,
    price:14000,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    type:"ForRent"
  },
  {
    id: 7,
    name: "Luxury Resort",
    city: "MP",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 5,
    bathrooms: 3,
    area: 3500,
    room:4,
    price:14000,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type:"ForSale"
  },
  {
    id: 8,
    name: "Luxury Resort",
    city: "MP",
    image:
      "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
    location: "Paradise Beach, Island",
    bedrooms: 2,
    bathrooms: 3,
    area: 3500,
    room:14,
    price:34000,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type:"ForSale"
  },
  {
    id: 9,
    name: "Luxury Resort",
    city: "MP",
    image:
      "https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg",
    location: "Paradise Beach, Island",
    bedrooms: 2,
    bathrooms: 3,
    area: 3500,
    room:16,
    price:4000,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type:"ForSale"

  },
  {
    id: 10,
    name: "Luxury Resort",
    city: "New York",
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80",
    location: "Paradise Beach, Island",
    bedrooms: 5,
    bathrooms: 3,
    area: 3500,
    room:4,
    price:34000,
    type:"ForRent",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 11,
    name: "Luxury Resort",
    city: "Canada",
    image:
      "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    location: "Paradise Beach, Island",
    bedrooms: 5,
    bathrooms: 3,
    area: 3500,
    room:4,
    price:34000,
    type:"ForRent",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
    
  ];
  for (let i = 12; i <= 62; i++) {
    const hotel = {
      id: i,
      name: `Hotel ${i}`,
      city: "New York", 
      image: imageUrl,
      location: "Paradise Beach, Island",
      bedrooms: 5,
      bathrooms: 3,
      area: 3500,
      room: 4,
      price: 34000,
      type: "ForRent",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    };
  
    hotelsData.push(hotel);
  }
  
  export default hotelsData;
  
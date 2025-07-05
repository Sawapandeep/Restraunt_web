const MapWidget = () => {
  const latitude = 23.07;
  const longitude = 70.13;
  const zoom = 14;

  // Static map image using Google Maps (no API key)
  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=${zoom}&size=600x300&markers=color:red%7C${latitude},${longitude}&key=YOUR_API_KEY`;

  // Free alternative using OpenStreetMap static image (no API key)
  const openStreetMapUrl = `https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${longitude},${latitude}&z=${zoom}&size=600,300&l=map&pt=${longitude},${latitude},pm2rdm`;

  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="p-4 w-[90%] mx-auto text-center">
      <h2 className="text-lg font-semibold mb-4">Visit Us</h2>
      <a
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <img src={mapImageUrl} alt="Map preview" className="w-full h-auto" />
      </a>
    </div>
  );
};

export default MapWidget;

//   const latitude = 23.07;
//   const longitude = 70.13;
//   const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

//   return (
//     <div className="p-4 w-[90%] mx-auto text-center">
//       <h2 className="text-lg font-semibold mb-4">Find Us on Google Maps</h2>
//       <a
//         href={googleMapsUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Open Location
//       </a>
//     </div>
//   );
// };

// export default MapWidget;

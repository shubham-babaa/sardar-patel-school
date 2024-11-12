"use client";


const SchoolMap = () => {
  const locations = [
    {
      title: "Escondido Grill",
      address1: "601 Geary St",
      address2: "San Francisco, CA 94102, USA",
      coords: { lat: 24.57973, lng: 80.86385 },
      placeId: "ChIJ5Sz52pGAhYAR1raOybzuDp8",
    },
  ];

  return (
    <div
      className="mapouter"
      style={{
        position: "relative",
        textAlign: "right",
        width: "100%",
        height: "400px",
      }}
    >
      <div
        className="gmap_canvas"
        style={{
          overflow: "hidden",
          background: "none!important",
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sardar%20Patel%20Convent%20School%20Satna&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 400px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 100%;
        }
        .gmap_iframe {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default SchoolMap;

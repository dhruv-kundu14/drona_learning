import React from "react";
import {
  MDBCarousel,
//   MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow className="py-5 text-center">
         {/* Title with underline */}
      <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
        <h1 style={{ color: "#203B6A" }}>Testimonials</h1>
        <div
          style={{
            width: "50px", // Adjust width as needed
            height: "4px", // Adjust height as needed
            backgroundColor: "#FF7F00", // Orange color for underline
            margin: "0 auto",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-10px", // Positioning the underline
          }}
        ></div>
      </div>

      <MDBCol md="12">
        <MDBCarousel showControls dark>
          {/* <MDBCarouselInner> */}
            <MDBCarouselItem className="active">
            <p className="lead font-italic mx-4 mx-md-5" style={{ fontSize: "1.3rem" }}>
                "Mathematics being one of the most important subjects, it is especially important to have solid base, especially in grade XI and XII. Having not attended tuitions before, I was a little apprehensive while joining the mathematics classes in Drona as the portions taught in school and in these classes may lead to confusion. This perception of mine changed after I joined Jayanti ma’am classes. She is a teacher every student must have, and I feel very privileged to get her guidance. I was also privileged to have the guidance in Physics from Aditi Dutta Ma’am and Chemistry from Neethu Ma’am. Their extraordinary approach to relate the concepts not only helped me understand each topic clearly, but also assisted me to effectively apply the concepts in answering the questions.  Regular worksheets for self-practice helped me realise the mistake I made and each error that I made was discussed and remediated. This self-realisation has helped me improve my approach to learning and score exceptionally good marks in Grade XII."
              </p>
              <p className="lead font-italic mx-4 mx-md-5">- Ranjana R Kamath</p>
              <p className="text-muted mb-0">2019</p>
            </MDBCarouselItem>
            <MDBCarouselItem>
            <p className="lead font-italic mx-4 mx-md-5" style={{ fontSize: "1.3rem" }}>
                 "Hi, Our overall experience with Drona Learning Academy for online learning has been awesome and knowledgeable which helped our daughter studying in class 7. She got to learn a lot of new techniques and tips to enhance her learning capabilities and experience. I would say it is one of the best platforms as it has many features which are out of the box, like live interactions on the topics of various subjects, which in my opinion is the best feature as it helps students to learn by visualization. The platform also helps teachers to prepare the lesson plans very accurately by focusing on key points of the topic as desired by the student and adding extra efforts to enrich the interactions."
              </p>
              <p className="lead font-italic mx-4 mx-md-5">- Amit Naik</p>
              <p className="text-muted mb-0">Father: Aanyaa Naik, Class 7, GURGAON 2018-2019</p>
            </MDBCarouselItem>
            <MDBCarouselItem>
            <p className="lead font-italic mx-4 mx-md-5" style={{ fontSize: "1.3rem" }}>
               "The best for building your base concepts. When I joined Drona learning academy in Grade X in the year 2018, I had no idea what to expect from the online classes. However, with the help of Jayanti Datta ma’am and her team, I was guided step by step for my preparation. They are the best concept builders and their way of teaching leaves no space for doubt. Questions are always encouraged and answered. If you want to have a good grasp on the subjects, then Drona learning academy is the best."
              </p>
              <p className="lead font-italic mx-4 mx-md-5">- Shaswat</p>
              <p className="text-muted mb-0">2018-2021</p>
            </MDBCarouselItem>
          {/* </MDBCarouselInner> */}
        </MDBCarousel>
      </MDBCol>
    </MDBRow>
  );
}
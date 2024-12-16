import Carousel from 'react-bootstrap/Carousel';
import './Courses.css';

const carouselItems = [
  { id: 1, image: "https://dhruv-kundu14.github.io/drona_learning/Icons/Background/2.png"},
  { id: 2, image: "https://dhruv-kundu14.github.io/drona_learning/Icons/Background/2.png" },
  { id: 3, image: "https://dhruv-kundu14.github.io/drona_learning/Icons/Background/2.png "},
];

// Sale messages data
const saleMessages = [
  {
    id: 1,
    title: 'DRONA LEARNING ACADEMY',
    subtitle: 'Assisted Self Learning Program (VI-X)',
    points: [
      ' Concept-wise Practice Worksheets and tests',
      ' Correction and in-depth feedback from experts',
      ' Personalized and on-demand Live interactive classes for doubt clarification and concept building',
      ' Your personalized path to excel in maths and science',
      ' ASLP currently for Maths and Science',
      ' New subjects will be launched soon',
    ],
  },
  {
    id: 2,
    title: 'MATHEMATICS AND SCIENCE TEST SERIES',
    subtitle: 'Academic Year: 2024-25',
    points: [
      ' Comprehensive tests aligned with the latest CBSE curriculum',
      ' Detailed test and performance feedback by expert teachers',
      ' Ultimate tool for mastering the subject and scoring high in board exams',
      ' Complimentary Live interactive remedial sessions',
      ' Additional On-Demand Live and interactive remedial sessions',
    ],
  },
  {
    id: 3,
    title: 'LEARN ANYTIME ANYWHERE',
    subtitle: 'Live Interactive Online Classes',
    points: [
      ' Concept-based teaching to bridge learning gaps to build strong foundations',
      ' Highly educated, experienced, and passionate teachers',
      ' Learn one on one or in very small groups',
      ' Personalised focus on each child',
      ' Each session is of One hour duration',
      ' Regular Tests are conducted to see the progress',
    ],
  },
];

const CarouselFade = () => {
  return (
    <div className="carousel">
      <Carousel fade>
        {carouselItems.map((item) => {
          const saleMessage = saleMessages.find((message) => message.id === item.id);

          return (
            <Carousel.Item key={item.id}>
              <img
                className="carousel-img"
                src={item.image}
                alt={`Slide ${item.id}`}
              />
              <Carousel.Caption>
                <h3>{item.caption}</h3>
                {saleMessage && (
                  <div>
                    <h4>{saleMessage.title}</h4>
                    <h5>{saleMessage.subtitle}</h5>
                    <ul>
                      {saleMessage.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselFade;

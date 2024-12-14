import React from "react";
import "./Careers.css";

const Faq = () => {
  const handleToggle = (e) => {
    const question = e.target;
    const answer = e.target.nextSibling;

    if (question.classList.contains("faq-accordion-question-button-active")) {
      question.classList.remove("faq-accordion-question-button-active");
      answer.classList.remove("faq-accordion-answer-active");
    } else {
      // // reset
      const openQuestions = document.querySelectorAll(
        ".faq-accordion-answer-active"
      );
      const openBtn = document.querySelectorAll(
        ".faq-accordion-question-button-active"
      );
      openQuestions?.forEach((item) =>
        item.classList.remove("faq-accordion-answer-active")
      );
      openBtn?.forEach((btn) =>
        btn.classList.remove("faq-accordion-question-button-active")
      );

      question.classList.add("faq-accordion-question-button-active");
      answer.classList.toggle("faq-accordion-answer-active");
    }
  };

  const data = [
    {
      id: 1,
      question: "What is the application process?",
      answer:
        "Applicants should submit their application online via this website. Structured questions will enable you to exhibit your potential to work at Drona Learning Academy and the job position for which you have applied. You should also ensure that you have uploaded your CV, and filled in all required criteria’s while applying, to enable a thorough review of your application.",
    },
    {
      id: 2,
      question: "How do I apply for a position?",
      answer:
        "First, review the job description you are interested in applying and confirm you meet all the requirements for the position. Then click the Apply Now button, create a profile and complete the application form, or log in with an existing profile account and update your information. Complete the required steps to submit your application",
    },
    {
      id: 3,
      question: "How do I search for job opportunities?",
      answer:
        "On the Career site homepage, click the current openings option. Select your search criteria and you will be presented with opportunities that match your criteria as you click on view jobs on the career opportunities search page. To view each position’s description, click on the position’s title in the search results. Note: If nothing is returned when you perform a search, it indicates that no current vacancies exist in your preferred geographic location and/or within your selected job area",
    },
    {
      id: 4,
      question: "What will happen after I complete the online application?",
      answer:
        "You will receive an automatic message from the system confirming the successful receipt of your application. Once submitted, your resume enters our candidate tracking system. Upon scrutiny of your filled in application and being identified as potential applicant for the job role, you will be contacted via telephone/e-mail to take part in the next phase of the recruitment process. You will participate in competency based job interview(s) and the number of interview(s) may vary by role.",
    },
    {
      id: 5,
      question: "Is my personal data safe when I apply online?",
      answer:
        " Yes. Your personal data in your online application is protected in a secure database. Without your username and password, nobody can access your information. Your personal information will not be shared by us to anyone.",
    },
    {
      id: 6,
      question:
        "Will I be considered for other positions when applying for a specific position?",
      answer:
        " Yes – your candidate profile will be stored in our database and will be available to our Staffing team to be considered for alternate job opportunities.",
    },
    {
      id: 7,
      question: " How often can I update my profile?",
      answer:
        " Once you have submitted your profile on our site, unfortunately you will not be able to access your profile or the application form for any update. If there is a change in your skills or employment history, you may resubmit the application form once again(if the position/role is still open) or submit another application for any other role that might have published.",
    },
    {
      id: 8,
      question:
        "Is Background verification mandatory in Drona Learning Academy?",
      answer:
        "Yes – Background check is mandatory and it is initiated immediately after the joining. As part of the background check process, you may be required to provide certain information such as employment references and proof, education documents, address proof, ID proof and provide other information and/or documentation necessary to enable us to comply to company policy",
    },
    {
      id: 9,
      question:
        " Does Drona Learning Academy hire only experienced people or freshers also?",
      answer:
        " It is vital for our continued success that we bring in teaching faculty who are experienced in Academic, Vocational, Competitive Exam preparation and career enhancement courses. Some of our courses required seasoned and experienced teaching professional who can start quickly and enhance the brand of Drona. There would be opportunity for freshers in specific domains who completes the spectrum of employment from both ends.",
    },
    {
      id: 10,
      question:
        " Does Drona Learning Academy hire only experienced people or freshers also?",
      answer:
        " Depending upon the job position some roles are Full-time and some are part-time.",
    },
    {
      id: 11,
      question:
        "I would like to speak to someone about opportunities at Drona Learning Academy?",
      answer:
        "We hope you will find all the information you need about all the job opportunity on this website. We also encourage you to write to us helpus@dronalearning.com for all job inquiries.",
    },
  ];

  return (
    <div className="faq-accordion df">
      <div
        className="faq-accordion-container"
        data-aos="fade-in"
        data-aos-delay="250"
        data-aos-duration="500"
      >
        <div className="faq-accordion-content">
          <h1 className="faq-accordion-title">Frequently Asked Questions</h1>

          {data.map((item) => (
            <div className="faq-accordion-question" key={item.id}>
              <button
                className="faq-accordion-question-button"
                onClick={handleToggle}
              >
                {" "}
                {item.question}
              </button>
              <div className="faq-accordion-answer">
                <p> {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

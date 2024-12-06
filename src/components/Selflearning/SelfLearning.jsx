import React from "react";
import "./SelfLearning.css";
import Footer from "../Footer/Footer";

const SelfLearning = () => {
  return (
    <>
      <div className="self-container">
        <h2 className="self-title">Why Choose Us?</h2>
        <hr className="self-divider" />
        <div className="self-content">
          <p>
            Drona Learning Academy consists of a group of extremely passionate,
            highly educated, and experienced teachers. With our vast experience
            and research, we have designed unique methods of teaching each
            subject.
          </p>
          <p>
            With the understanding that each child is different and faces
            varying types of learning challenges, we ensure that the focus on
            each child is different, and tailor-made just for them. We try to
            identify the challenges they face, understand the root cause of why
            the student is unable to learn, and address them in a way that they
            are able to unlearn any ineffective methods of learning, and adopt a
            new, holistic way of understanding and loving each subject.
          </p>
          <p>
            In our endeavor to promote self-learning amongst the students, Drona
            Learning academy is pleased to introduce the<b> SELF LEARNING
            PROGRAM(SLP)</b> in Mathematics.
          </p>
          <b>Benefits of this Program</b>
          <p>
            Daily practice in mathematics can help learners to improve their
            grades and test scores. This is because regular practice helps to
            solidify the concepts that they are learning in class and gives them
            more opportunities to apply what they have learned., hence
            developing their reasoning ability.
          </p>
          <p>
            As learners become more proficient in mathematics, they are more
            likely to feel confident in their abilities. Mathematics teaches
            children how to think critically and solve problems thus helping
            them to improve their reasoning ability.
          </p>
          <p>
            In addition to these academic benefits, daily practice in
            mathematics can also help learners to develop important life skills
            such as perseverance, resilience, and determination.
          </p>
          <b>What we Offer</b>
          <ul>
            <li>
              <p>
                <b>Concept wise Practice worksheets</b> that cover all the important
                topics in Mathematics pertaining to a particular grade and are
                aligned with the latest CBSE syllabus.
              </p>
            </li>
            <li>
              <p>
                The Practice worksheets are self-paced, so learners can learn at
                their own pace.
              </p>
            </li>
            <li>
              <p>
                These worksheets are flexible and convenient and can be accessed
                from anywhere at any time.
              </p>
            </li>
            <li>
              <p>
                The solutions of the worksheets will be evaluated, and feedback
                will be shared with the learner. This will help the learners to
                learn from their mistakes and focus on the areas where they need
                the most help.
              </p>
            </li>
          </ul>
          <p>
            The Practice worksheets are designed to be challenging but fair, and
            they will help the learner to identify their strengths and
            weaknesses.
          </p>
          <p>Please fill up the form to know more about this program.</p>
          <p>
            <b>Self-Learning Program(SLP)</b> is available for students of Grade VI,
            VII, VIII and XII.
          </p>
          <div className="self-register">
            <b>Register today and take advantage of our special discount!</b>
          </div>
        </div>
      </div>
      <div className="self-contact">
        <h1>Get in touch !!</h1>
      </div>

      <form>
        <div className="form-component">
          <label htmlFor="parent-name">Parent Name *</label>
          <input type="text" id="parent-name" name="parent-name" required />
        </div>
        <div className="form-component">
          <label htmlFor="student-name">Student Name *</label>
          <input type="text" id="student-name" name="student-name" required />
        </div>
        <div className="form-component">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-component">
          <label htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-component">
          <label htmlFor="grade">Grade *</label>
          <input type="text" id="grade" name="grade" required />
        </div>
        <div className="form-component">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

      <Footer />
    </>
  );
};

export default SelfLearning;

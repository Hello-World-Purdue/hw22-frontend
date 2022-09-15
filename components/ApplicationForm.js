import {DecoratedButton} from "components/Decorated";
import React, {useState} from "react";

import {
  ClassYear,
  Gender,
  Major,
  Referral,
  ShirtSize,
  ethnicities,
  gradYears,
} from "../util/enums";

const styles = {};

const initialState = {
  hackathons: 0,
  dietaryRestrictions: "None",
  website: "",
  answer1: "",
  answer2: "",
  classYear: Object.values(ClassYear)[0],
  graduationYear: gradYears[0],
  ethnicity: ethnicities[0],
  gender: Object.values(Gender)[0],
  major: Object.values(Major)[0],
  referral: Object.values(Referral)[0],
  shirtSize: Object.values(ShirtSize)[0],
  resume: null,
};

const ApplicationForm = (props) => {
  const [state, setState] = useState(initialState);

  const [resumeFile, setResumeFile] = React.useState();

  function submitForm(event) {
    event.preventDefault();

    const userData = {
      ...state,
      resume: resumeFile,
    };

    props.sendAnswers(userData);
    console.log("Success");
  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const resumeUploadHandler = (e) => {
    console.log(e.target.files);
    setResumeFile(e.target.files[0]);
  };

  return (
    <div className={[styles.formContainer, styles.appFormContainer].join(" ")}>
      <div className={styles.appFormTitle}>APPLICATION FORM</div>
      <form className={styles.applicationForm} onSubmit={submitForm}>
        {/* Number of hackathons */}
        <div className="form-group">
          <label>HOW MANY HACKATHONS HAVE YOU TAKEN PART IN</label>
          <input
            type="number"
            name="hackathons"
            min={0}
            onChange={handleChange}
            required
            value={state.hackathons}
          />
        </div>

        {/* Dietary Restrictions */}
        <div className="form-group">
          <label>PLEASE TELL US ABOUT ANY DIETARY RESTRICTIONS</label>
          <input
            placeholder="None"
            name="dietaryRestrictions"
            onChange={handleChange}
            required
            value={state.dietaryRestrictions}
          />
        </div>

        {/* Answer 1 */}
        <div className="form-group">
          <label>
            What do you hope to gain from participating in Hello World?
          </label>
          <textarea
            name="answer1"
            onChange={handleChange}
            required
            value={state.answer1}
            // as="textarea"
          />
        </div>

        {/* Answer 2 */}
        <div className="form-group">
          <label>
            What part of hackathons are you looking most forward to?
          </label>
          <textareau
            name="answer2"
            onChange={handleChange}
            required
            value={state.answer2}
            // as="textarea"
          />
        </div>

        {/* Class Year (Freshman, Sophomore) */}
        <div className="form-group">
          <label>SELECT YOUR CLASS YEAR</label>
          <br></br>
          <select
            className="form-control"
            onChange={handleChange}
            name="classYear"
            required
            value={state.classYear}
          >
            {Object.values(ClassYear).map((classYear) => (
              <option value={classYear} key={classYear}>
                {classYear}
              </option>
            ))}
          </select>
        </div>

        {/* Graduation Year */}
        <div className="form-group">
          <label>SELECT YOUR GRADUATION YEAR</label>
          <br></br>
          <select
            className="form-control"
            name="graduationYear"
            onChange={handleChange}
            value={state.graduationYear}
          >
            {gradYears.map((gradYear) => (
              <option value={gradYear} key={gradYear}>
                {gradYear}
              </option>
            ))}
          </select>
        </div>

        {/* Ethnicity */}
        <div className="form-group">
          <label>SELECT YOUR ETHNICITY</label>
          <br></br>
          <select
            className="form-control"
            name="ethnicity"
            onChange={handleChange}
            value={state.ethnicity}
          >
            {ethnicities.map((ethnicity) => (
              <option value={ethnicity} key={ethnicity}>
                {ethnicity}
              </option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>SELECT YOUR GENDER</label>
          <br></br>
          <select
            className="form-control"
            name="gender"
            onChange={handleChange}
            value={state.gender}
          >
            {Object.values(Gender).map((gender) => (
              <option value={gender} key={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        {/* Major */}
        <div className="form-group">
          <label>SPECIFY YOUR MAJOR</label>
          <br></br>
          <select
            className="form-control"
            name="major"
            onChange={handleChange}
            value={state.major}
          >
            {Object.values(Major).map((major) => (
              <option value={major} key={major}>
                {major}
              </option>
            ))}
          </select>
        </div>

        {/* Referral */}
        <div className="form-group">
          <label>HOW DID YOU HEAR ABOUT HELLO WORLD?</label>
          <br></br>
          <select
            className="form-control"
            name="referral"
            onChange={handleChange}
            value={state.referral}
          >
            {Object.values(Referral).map((referral) => (
              <option value={referral} key={referral}>
                {referral}
              </option>
            ))}
          </select>
        </div>

        {/* Shirt Size */}
        <div className="form-group">
          <label>WHAT IS YOUR SHIRT SIZE?</label>
          <br></br>
          <select
            className="form-control"
            name="shirtSize"
            onChange={handleChange}
            value={state.shirtSize}
          >
            {Object.values(ShirtSize).map((shirtSize) => (
              <option value={shirtSize} key={shirtSize}>
                {shirtSize}
              </option>
            ))}
          </select>
        </div>

        {/* Website Link */}
        <div className="form-group">
          <label>LINK YOUR WEBSITE HERE IF YOU HAVE ONE</label>
          <input
            type="url"
            name="website"
            onChange={handleChange}
            value={state.website}
          />
        </div>

        {/* Resume */}
        <div className="form-group">
          <label>LINK YOUR RESUME HERE</label>
          <br></br>
          <input
            type="file"
            className=""
            onChange={resumeUploadHandler}
            required
          />
        </div>

        <div className={styles.buttonContainer}>
          <DecoratedButton>Submit</DecoratedButton>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

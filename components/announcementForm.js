import React, { useContext, useState } from "react";
import { Form, Card } from "react-bootstrap";
import CustomButton from "../customButton";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/forms.module.css";
import UserContext from "../../context/userContext";
import AlertContext from "../../context/alertContext";

export const announcementLabel = [
    "Events", "Food", "Logisitics", "Sponsor", "Judging", "Miscellaneous"
];

const AnnouncementsForm = (props) => {
    const [body, setBody] = useState("");
    const [label, setLabel] = useState("Events");
    const { makeAnnouncement } = useContext(UserContext);
    const { setAlert } = useContext(AlertContext);
    function submitForm(event) {
        event.preventDefault();
        const announcement = {
            body: body, title: "Announcement", label: label,
        };
        makeAnnouncement(announcement);
    }

    const bodyHandler = (event) => {
        setBody(event.target.value);
    };

    const labelHandler = (event) => {
        console.log(label);
        setLabel(event.target.value);
    };

    return (React.createElement(Card, { className: styles.formContainer },
        React.createElement(Form, { className: styles.form, onSubmit: sumbitForm },
            React.createElement(Form.Group, { className: styles.formField },
                React.createElement(Form.Label, null, "BODY"),
                React.createElement(Form.Control, { onChange: bodyHandler, type: "text", name: "username", required: true})),
            React.createElement(Form.Group, { className: styles.formField },
                React.createElement(Form.Label, null, "LABEL"),
                React.createElement("br", null),
                React.createElement("select", { className: "form-control", onChange: labelHandler, name: "label", required: true }, announcementLabel.map((label) => (React.createElement("option", { value: label, key: label, }, label))))),
            React.createElement("div", { className: styles.buttonContainer },
                React.createElement(CustomButton, null, "BAM!")))));
};

export const CreateAnnouncementsButton = () => (React.createElement(React.Fragment, null, 
    React.createElement("div", { className: "", style: { position: "relative" } },
        React.createElement("button", { type: "button", className: "create-announcement-button", "data-bs-toggle": "modal", "data-bs-targer": "#exampleModal" }, "Create Announcement")),
    React.createElement("div", { className: "modal", id: "exampleModal" },
        React.createElement("div", { className: "modal-dialog" },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" }, 
                    React.createElement("h5", { className: "modal-title" }),
                    React.createElement("button", { type: "button", className: "btn-close", "data-cs-dismiss": "modal", "aria-label": "Close" })),
                React.createElement("div", { className: "modal-body" },
                    React.createElement(AnnouncementsForm, null)))))));

export default AnnouncementsForm;
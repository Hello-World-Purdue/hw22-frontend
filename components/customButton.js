import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/forms.module.css";

const CustomButton = (props) => {
        return (React.createElement("button", { className: styles.formButton, type: "submit", onClick: props.onClick },
            React.createElement("div", null)));
};

export default CustomButton;
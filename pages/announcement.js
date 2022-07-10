import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/announcements.module.css";
import AnnouncementLabel from "../components/announcementLabel";
/*import { Layout } from "../Components/Layout";
import { Header } from "../Components/Header";*/
import { w3cwebsocket as WebSocket } from "websocket";
import { CreateAnnouncementsButton } from "../components/announcementForm";
import UserContext from "../context/userContext";
import AuthContext from "../context/authContext";

const list = [];
function Announcements() {
    const { getAnnouncements } = useContext(UserContext);
    const { isAuthenticated, user, logout } = useContext(AuthContext);
    const [annList, setAnnList] = useState(list);
    const [ws, setWs] = useState();
    const setupWS = () => {
        const url = process.env.NODE_ENV === "production"
            ? "wss://helloworldpurdue-api.herokuapp.com"
            : "ws://localhost:5000";
        const ws = new WebSocket(url, "echo-protocol");
        ws.onopen = function () {
            console.log("WebSocket Client Connected");
        };
        ws.onerror = function (error) {
            console.log("Connection Error: " + error.toString());
        };
        ws.onmessage = function (message) {
            // console.log("Received: '" + message.data + "'");
            // console.log("received: %s", message);
            const msg = JSON.parse(message.data + "");
            // console.log(annList);
            setAnnList([...annList, msg]);
        };
        ws.onclose = function () {
            console.log("echo-protocol Connection Closed");
            setTimeout(setupWS, 2900);
        };
        setWs(ws);
    };

    useEffect(() => {
        getAnnouncements().then((d) => {
            // console.log(d.announcements);
            setAnnList([...annList, ...d.announcements]);
        });
        setupWS();
    }, []);

    useEffect(() => {
        if (ws) {
            ws.onmessage = function (message) {
                // console.log("Received: '" + message.data + "'");
                // console.log("received: %s", message);
                const msg = JSON.parse(message.data + "");
                // console.log(annList);
                setAnnList([...annList, msg]);
            };
        }
    }, [annList]);

    return (React.createElement("div", { className: styles.announcementContainer },
        React.createElement(Layout, null,
            React.createElement(Header, { headerImgClass: "announcements-header" }),
            isAuthenticated &&
                ((user === null || user === void 0 ? void 0 : user.role) === "ADMIN" || (user === null || user === void 0 ? void 0 : user.role) === "EXEC") && (React.createElement(CreateAnnouncementsButton, null)),
            annList && annList.length > 0 ? (React.createElement("div", { className: styles.announcementList }, annList
                .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
                .map((announcement) => {
                return (React.createElement("div", { className: styles.announcement },
                    React.createElement("div", { className: "row", style: { width: "100%" } },
                        React.createElement("div", { className: "col" },
                            React.createElement(AnnouncementLabel, { annType: announcement.label })),
                        React.createElement("div", { className: "w-100" }),
                        React.createElement("div", { className: "col announcements-time" }, new Date(announcement.updatedAt).toLocaleString("en-US", {
                            weekday: "short",
                            day: "numeric",
                            year: "numeric",
                            month: "short",
                            hour: "numeric",
                            minute: "numeric", // numeric, 2-digit
                        }))),
                    React.createElement("div", { className: `${styles.annMessage} text-break` }, announcement.body)));
            }))) : (React.createElement("div", { style: { textAlign: "center", marginBottom: "10vh" } },
                React.createElement("h4", { style: { fontFamily: "backissues" } }, "NO ANNOUNCEMENTS YET."))))));
}

export default Announcements;
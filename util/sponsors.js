const sponsors = [
    {
        "name": "AWS",
        "blurb": "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.  AWS partners with Purdue university in a variety of cloud computing and education projects ranging from working with Purdue’s central IT (ITaP) organization, as well as supporting individual colleges, departments, researchers, and faculty.",
        "height": 90,
        "width": 90
    },
    {
        "name": "Solana",
        "blurb": "Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.. Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.",
        "height": 80,
        "width": 180
    },
    {
        "name": "Collins Aerospace",
        "blurb": "Collins Aerospace is a leader in technologically advanced and intelligent solutions for the global aerospace and defense industry. As a subsidiary of Raytheon Technologies, we engaged in designing, manufacturing and servicing systems and components for commercial aviation, business aviation, military and defense, helicopters, space, airports, and other industries.",
        "height": 100,
        "width": 180
    },
    {
        "name": "Delloite",
        "blurb": "At Deloitte you will work across cutting-edge technologies including various cloud platforms, and front-end and back-end technologies. You will follow your passion to either learn many new technologies, or become an expert in a desired few.  Deloitte will give you the ability to use your skillset across various industries to implement and deliver cutting-edge solutions.",
        "height": 100,
        "width": 150
    }   
]

const sponsorMap = new Map();

sponsorMap.set('aws', sponsors[0]);
sponsorMap.set('solana', sponsors[1]);
sponsorMap.set('collins', sponsors[2]);
sponsorMap.set('delloite', sponsors[3]);

export default sponsorMap;
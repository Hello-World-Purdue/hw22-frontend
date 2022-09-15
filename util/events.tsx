export interface EventsData {
	name: string;
	times: string;
	locations: string;
	details: string;
	happened: boolean;
}

export const data: EventsData[] = [
	{
		name: "React Workshop",
		times: "Sept 13, 6:30 to 7:30 PM",
		locations: "LWSN B134",
		details: "",
		happened: Date.now() > Date.parse("2022-09-13, 19:30:00") ? true : false,
	},
	{
		name: "Json Workshop",
		times: "Sept 14, 6:30 to 7:30 PM",
		locations: "LWSN B134",
		details: "",
		happened: Date.now() > Date.parse("2022-09-14, 19:30:00") ? true : false,
	},
	{
		name: "Unity Workshop",
		times: "Sept 15, 6:30 to 7:30 PM",
		locations: "LWSN 1106",
		details: "",
		happened: Date.now() > Date.parse("2022-09-15, 19:30:00") ? true : false,
	},
	{
		name: "Git & Github Workshop",
		times: "Sept 16, 6:00 to 7:30 PM",
		locations: "HAAS G066",
		details: "",
		happened: Date.now() > Date.parse("2022-09-16, 19:30:00") ? true : false,
	},
];

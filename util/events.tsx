export interface EventsData {
	name: string;
	times: string;
	locations: string;
	details: string;
	happened: boolean;
}

export const data: EventsData[] = [
	// {
	// 	name: "Closing Ceremony",
	// 	times: "Sept 18, 1:30 to 2:30 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 14:30:00") ? true : false,
	// },
	// {
	// 	name: "Expo / Judging",
	// 	times: "Sept 18, 10:30 AM to 1:30 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 13:30:00") ? true : false,
	// },
	// {
	// 	name: "Doughnuts",
	// 	times: "Sept 18, 8:30 to 10:30 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 10:30:00") ? true : false,
	// },
	// {
	// 	name: "Breakfast",
	// 	times: "Sept 18, 7:30 to 8:30 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 08:30:00") ? true : false,
	// },
	// {
	// 	name: "Mock Demos",
	// 	times: "Sept 18, 5:30 to 7:30 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 07:30:00") ? true : false,
	// },
	// {
	// 	name: "Jackbox / Smash",
	// 	times: "Sept 18, 1:30 to 5:30 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 05:30:00") ? true : false,
	// },
	// {
	// 	name: "Midnight Snacks",
	// 	times: "Sept 17, 11:30 PM to 1:30 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-18, 01:30:00") ? true : false,
	// },
	// {
	// 	name: "Board Games",
	// 	times: "Sept 17, 10:30 to 11:30 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 23:30:00") ? true : false,
	// },
	// {
	// 	name: "Dinner",
	// 	times: "Sept 17, 7:00 to 8:00 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 20:00:00") ? true : false,
	// },
	// {
	// 	name: "Delloite Workshop",
	// 	times: "Sept 17, 1:30 to 2:30 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 14:30:00") ? true : false,
	// },
	// {
	// 	name: "Lunch",
	// 	times: "Sept 17, 12:00 to 1:00 PM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 13:00:00") ? true : false,
	// },
	// {
	// 	name: "Team Building Activity",
	// 	times: "Sept 17, 11:00 AM to 12:00 PM",
	// 	locations: "WALC Basement",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 12:00:00") ? true : false,
	// },
	// {
	// 	name: "Opening Ceremony",
	// 	times: "Sept 17, 9:30 to 10:00 AM",
	// 	locations: "TBD",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 10:00:00") ? true : false,
	// },
	// {
	// 	name: "Check In",
	// 	times: "Sept 17, 8:30 to 9:30 AM",
	// 	locations: "WALC Basement",
	// 	details: "",
	// 	happened: Date.now() > Date.parse("2022-09-17, 09:30:00") ? true : false,
	// },
	{
		name: "Git & Github Workshop",
		times: "Sept 16, 6:00 to 7:30 PM",
		locations: "HAAS G066",
		details: "",
		happened: Date.now() > Date.parse("2022-09-16, 19:30:00") ? true : false,
	},
	{
		name: "Intro to Solana",
		times: "Sept 15, 7:30 to 8:30 PM",
		locations: "Virtual",
		details: "",
		happened: Date.now() > Date.parse("2022-09-15, 20:30:00") ? true : false,
	},
	{
		name: "Unity Workshop",
		times: "Sept 15, 6:30 to 7:30 PM",
		locations: "LWSN 1106",
		details: "",
		happened: Date.now() > Date.parse("2022-09-15, 19:30:00") ? true : false,
	},
	{
		name: "Json Workshop",
		times: "Sept 14, 6:30 to 7:30 PM",
		locations: "LWSN B134",
		details: "",
		happened: Date.now() > Date.parse("2022-09-14, 19:30:00") ? true : false,
	},
	{
		name: "React Workshop",
		times: "Sept 13, 6:30 to 7:30 PM",
		locations: "LWSN B134",
		details: "",
		happened: Date.now() > Date.parse("2022-09-13, 19:30:00") ? true : false,
	}
];

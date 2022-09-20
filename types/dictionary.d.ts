import Definitons from "./definitions";

interface Dictionary {
	id: string, // the id of the word in datuk
	head: string, // The starting letter of the word
	entry: string, // The word in question
	origin: string, // The origin of the word
	info: string, // Other information on the word
	defs: Definitons[] // The definitions for the said word
}

export default Dictionary;
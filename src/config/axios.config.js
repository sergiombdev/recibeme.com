import axios from "axios";
import { data } from './host.config';

export const instance = (othersHeaders) =>
	axios.create({
		...data,
		headers: {
			"Content-Type": "application/json",
			...othersHeaders
		}
	});
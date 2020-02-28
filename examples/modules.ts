import { parseDate } from "https://deno.land/std/datetime/mod.ts";

const myDate = parseDate("02-03-2020", "dd-mm-yyyy");

console.log(myDate);


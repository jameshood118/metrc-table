import type { Strain } from '../types/strains.ts';

const JSON_URL = './data/strains.json';

/**
 * Loads the local JSON data using async/await syntax.
 * @returns A promise that resolves to an array of Strain.
 */
export async function fetchItemsFromApi() {
  try {
    // AWAIT 1: Wait for the network request to complete
    const response = await fetch(JSON_URL);
    // Error handling check
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    // AWAIT 2: Wait for the response body to be parsed as JSON
    // We explicitly cast the result to Strain[] for TypeScript
    const data = await response.json() as Strain[];
    return data;
  } catch (error) {
    // The catch block handles any errors from 'fetch' or the 'await' calls
    console.error("Error loading data:", error);
    // Return an empty array on failure
    return []; 
  }
}
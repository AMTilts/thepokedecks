// export async function getAllPokeData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         throw error;
//     }
// }
// export async function getPokeData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error in Fetching URl. Error is:     ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         throw error;
//     }
// }
"use strict";
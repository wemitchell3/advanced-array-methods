const outEl = document.querySelector("#output")

// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     let totalOrders = 0
//     business.orders.forEach(order => totalOrders += order)

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((currentTotal, nextValue) => currentTotal += nextValue,0)

console.log(totalRainfall)

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((currentWords, nextWord) => currentWords + " " + nextWord)

console.log(sentence)

//     businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
// let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue,
//     0
// )

//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders.toFixed(2)})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             console.log(keyPressEvent)
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
//                     ||  business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//                 <section>
//                 ${foundBusiness.purchasingAgent.nameFirst},
//                 ${foundBusiness.purchasingAgent.nameLast}
//                 </section>
//             `;
//         }
//     });

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
// const agents = businesses.map(business => {
//         return {
//             fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//             companyName: business.companyName,
//             phoneNumber: business.phoneWork
//         }
//     })

// console.table(agents)

// agents.forEach(agent => {
//     outEl.innerHTML += `<h2>${agent.fullName}</h2>`;
//     outEl.innerHTML += `<h2>${agent.companyName}</h2>`;
//     outEl.innerHTML += `<h2>${agent.phoneNumber}</h2>`;
//     outEl.innerHTML += "<hr/>";
// });


// outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity} ${business["addressStateCode"]} ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     console.log(business.addressStateCode)
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
//   })

// const newYorkBusinesses = businesses.filter(business =>
//     business.companyIndustry === "Manufacturing")


//   newYorkBusinesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity} ${business["addressStateCode"]} ${business[zipCodeProperty]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });
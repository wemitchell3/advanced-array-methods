const outEl = document.querySelector("#output")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            console.log(keyPressEvent)
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
                    ||  business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            );

            outEl.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
                <section>
                ${foundBusiness.purchasingAgent.nameFirst},
                ${foundBusiness.purchasingAgent.nameLast}
                </section>
            `;
        }
    });

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
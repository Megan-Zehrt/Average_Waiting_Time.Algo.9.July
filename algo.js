// 1701. Average Waiting Time



// There is a restaurant with a single chef. You are given an array customers, where customers[i] = [arrivali, timei]:

// arrivali is the arrival time of the ith customer. The arrival times are sorted in non-decreasing order.
// timei is the time needed to prepare the order of the ith customer.
// When a customer arrives, he gives the chef his order, and the chef starts preparing it once he is idle. The customer waits till the chef finishes preparing his order. The chef does not prepare food for more than one customer at a time. The chef prepares food for customers in the order they were given in the input.

// Return the average waiting time of all customers. Solutions within 10-5 from the actual answer are considered accepted.



/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let totalWaitingTime = 0;
    let currentTime = 0;

    for (let customer of customers) {
        let arrivalTime = customer[0];
        let prepTime = customer[1];

        // If the chef is already busy and finishes the previous order after the current customer arrives
        if (currentTime < arrivalTime) {
            currentTime = arrivalTime;
        }

        // Calculate the end time after preparing the current order
        currentTime += prepTime;

        // Calculate the waiting time for the current customer
        let waitingTime = currentTime - arrivalTime;
        totalWaitingTime += waitingTime;
    }
    
    // Calculate the average waiting time
    let averageWaitingTime = totalWaitingTime / customers.length;

    return averageWaitingTime;
};
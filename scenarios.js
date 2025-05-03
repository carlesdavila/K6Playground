import http from 'k6/http';
import { sleep, check } from 'k6';

// Options to define multiple scenarios
export const options = {
    scenarios: {
        // Scenario 1: Users browsing the homepage
        browse_homepage: {
            executor: 'constant-vus', // The executor defines how virtual users (VUs) are scheduled. 
                                      // 'constant-vus' keeps a fixed number of VUs active for a specified duration.
            vus: 5, // Number of virtual users
            duration: '20s', // Duration of the scenario
            exec: 'browse_homepage', // Function to execute for this scenario
        },
        // Scenario 2: Users placing an order
        place_order: {
            executor: 'ramping-vus', // The executor defines how VUs are scheduled. 
                                      // 'ramping-vus' gradually increases or decreases the number of VUs over time.
            startVUs: 0, // Initial number of virtual users
            stages: [
                { duration: '10s', target: 10 }, // Ramp-up to 10 users in 10 seconds
                { duration: '10s', target: 10 }, // Hold 10 users for 10 seconds
                { duration: '10s', target: 0 }, // Ramp-down to 0 users in 10 seconds
            ],
            exec: 'place_order', // Function to execute for this scenario
        },
    },
};

// Scenario 1: Browsing the homepage
export function browse_homepage() {
    let res = http.get('https://quickpizza.grafana.com');
    check(res, {
        "status is 200": (res) => res.status === 200, // Check if the response status is 200
        "response time is less than 500ms": (res) => res.timings.duration < 500, // Check if response time is under 500ms
    });
    sleep(1); // Simulate user think time
}

// Scenario 2: Placing an order
export function place_order() {
    let res = http.post('https://quickpizza.grafana.com/order', JSON.stringify({ item: 'pizza', quantity: 1 }), {
        headers: { 'Content-Type': 'application/json' }, // Set the request header to JSON
    });
    check(res, {
        "status is 201": (res) => res.status === 201, // Check if the response status is 201 (Created)
        "response time is less than 800ms": (res) => res.timings.duration < 800, // Check if response time is under 800ms
    });
    sleep(1); // Simulate user think time
}
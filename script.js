import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
};

// Setup method: executed before the test starts
export function setup() {
    console.log('Setting up initial data...');
}

// Main test method (unchanged)
export default function () {
    let res = http.get('https://quickpizza.grafana.com');
    check(res, {
        "status is 200": (res) => res.status === 200,
        "response time is less than 500ms": (res) => res.timings.duration < 500
    });
    sleep(1);
}

// Teardown method: executed after the test ends
export function teardown(data) {
    console.log('Cleaning up after the test...');
}
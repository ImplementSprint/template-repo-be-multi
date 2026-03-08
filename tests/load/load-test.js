// Template for k6 load test as required by Section 13.6
import http from 'k6/http';
import { sleep } from 'k6';
export default function () {
  http.get(__ENV.TARGET_URL + '/api/health');
  sleep(1);
}

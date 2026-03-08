import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  // TARGET_URL is injected by the pipeline during UAT phase
  const url = `${__ENV.TARGET_URL}/health`;
  const res = http.get(url);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  
  sleep(1);
}

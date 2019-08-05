import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  // stages: [
  //   { duration: '30s', target: 20 },
  //   { duration: '1m30s', target: 10 },
  //   { duration: '20s', target: 0 },
  // ],
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('http://localhost:3002/12');
  check(res, {
    'status was 200': r => r.status === 200,
    'transaction time OK': r => r.timings.duration < 100,
  });
  sleep(1);
}

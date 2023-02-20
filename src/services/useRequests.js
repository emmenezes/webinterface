const default_header = {
  'Content-type': 'application/json; charset=UTF-8',
};

export function useRequests() {
  function sendInput(input, period = 0) {
    fetch('/custominput', {
      method: 'POST',
      body: JSON.stringify({
        input: input,
        period: period,
      }),
      headers: default_header,
    })
      .then((response) => response.json())
      .then((message) => console.log(message));
  }

  return { sendInput };
}